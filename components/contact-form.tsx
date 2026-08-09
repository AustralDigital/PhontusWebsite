"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import {
  accessMethodOptions,
  contactSchema,
} from "@/lib/contact-schema";
import { siteConfig } from "@/lib/config";

type FieldErrors = Partial<Record<string, string[]>>;

export function ContactForm() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "fallback"
  >("idle");
  const [serverMessage, setServerMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      workEmail: data.get("workEmail"),
      phone: data.get("phone"),
      organization: data.get("organization"),
      role: data.get("role"),
      organizationType: data.get("organizationType"),
      locations: data.get("locations"),
      useCase: data.get("useCase"),
      accessMethod: data.get("accessMethod"),
      message: data.get("message"),
      consent: data.get("consent") === "on",
    };
    const parsed = contactSchema.safeParse(payload);

    if (!parsed.success) {
      const nextErrors = parsed.error.flatten().fieldErrors;
      setErrors(nextErrors);
      setStatus("idle");
      const firstInvalid = Object.keys(nextErrors)[0];
      form
        .querySelector<HTMLElement>(`[name="${firstInvalid}"]`)
        ?.focus();
      return;
    }

    setErrors({});
    setStatus("submitting");
    setServerMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const result = (await response.json()) as {
        ok: boolean;
        message?: string;
        errors?: FieldErrors;
      };

      if (response.ok && result.ok) {
        setStatus("success");
        form.reset();
        return;
      }

      if (result.errors) setErrors(result.errors);
      setServerMessage(
        result.message ?? "We couldn’t deliver your request just now.",
      );
      setStatus("fallback");
    } catch {
      setServerMessage("We couldn’t deliver your request just now.");
      setStatus("fallback");
    }
  }

  const errorFor = (name: string) => errors[name]?.[0];

  return (
    <form className="contact-form" noValidate onSubmit={onSubmit}>
      <div className="form-grid">
        <FormField label="First name" name="firstName" error={errorFor("firstName")} required />
        <FormField label="Last name" name="lastName" error={errorFor("lastName")} required />
        <FormField
          label="Work email"
          name="workEmail"
          type="email"
          error={errorFor("workEmail")}
          required
        />
        <FormField label="Phone" name="phone" type="tel" note="Optional" />
        <FormField
          label="Organization"
          name="organization"
          error={errorFor("organization")}
          required
        />
        <FormField label="Role" name="role" error={errorFor("role")} required />
        <SelectField
          label="Organization type"
          name="organizationType"
          error={errorFor("organizationType")}
          options={[
            "Healthcare organization",
            "Retail or logistics",
            "Telecom or field service",
            "School or district",
            "Hotel or hospitality",
            "Government or community services",
            "Other",
          ]}
        />
        <FormField
          label="Number of locations"
          name="locations"
          type="number"
          note="Optional"
        />
        <SelectField
          label="Expected use case"
          name="useCase"
          error={errorFor("useCase")}
          options={[
            "Patient or visitor support",
            "Customer service",
            "Workplace or field operations",
            "Student or family communication",
            "Guest services",
            "Evaluating language access",
            "Other",
          ]}
        />
        <SelectField
          label="Preferred access"
          name="accessMethod"
          error={errorFor("accessMethod")}
          options={accessMethodOptions}
        />
        <label className="form-field form-field--full">
          <span>What would you like to explore?</span>
          <textarea
            name="message"
            rows={5}
            required
            aria-invalid={Boolean(errorFor("message"))}
            aria-describedby={errorFor("message") ? "message-error" : undefined}
          />
          {errorFor("message") ? (
            <small className="field-error" id="message-error">
              {errorFor("message")}
            </small>
          ) : null}
        </label>
      </div>
      <label className="consent-field">
        <input
          type="checkbox"
          name="consent"
          required
          aria-invalid={Boolean(errorFor("consent"))}
          aria-describedby={errorFor("consent") ? "consent-error" : undefined}
        />
        <span>
          I agree that Phontus may contact me about this request. I understand I
          can opt out at any time.
        </span>
      </label>
      {errorFor("consent") ? (
        <small className="field-error" id="consent-error">
          {errorFor("consent")}
        </small>
      ) : null}

      <button className="button button--primary form-submit" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Request a Demo"}
        <ArrowRight aria-hidden="true" size={17} />
      </button>

      <div className="form-status" aria-live="polite">
        {status === "success" ? (
          <p className="form-status--success">
            <CheckCircle2 aria-hidden="true" /> Thanks—we received your request
            and will be in touch.
          </p>
        ) : null}
        {status === "fallback" ? (
          <p className="form-status--fallback">
            {serverMessage} Please email us directly at{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>
        ) : null}
      </div>
    </form>
  );
}

function FormField({
  label,
  name,
  type = "text",
  note,
  error,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  note?: string;
  error?: string;
  required?: boolean;
}) {
  const errorId = `${name}-error`;
  return (
    <label className="form-field">
      <span>
        {label} {note ? <small>{note}</small> : null}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        min={type === "number" ? 1 : undefined}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
      />
      {error ? (
        <small className="field-error" id={errorId}>
          {error}
        </small>
      ) : null}
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
  error,
}: {
  label: string;
  name: string;
  options: readonly string[];
  error?: string;
}) {
  const errorId = `${name}-error`;
  return (
    <label className="form-field">
      <span>{label}</span>
      <select
        name={name}
        defaultValue=""
        required
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
      >
        <option value="" disabled>
          Select one
        </option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      {error ? (
        <small className="field-error" id={errorId}>
          {error}
        </small>
      ) : null}
    </label>
  );
}
