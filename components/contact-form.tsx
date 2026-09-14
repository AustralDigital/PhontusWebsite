"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import { contactSchema, settingOptions } from "@/lib/contact-schema";
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
      organization: data.get("organization"),
      setting: data.get("setting"),
      message: data.get("message"),
    };
    const parsed = contactSchema.safeParse(payload);
    if (!parsed.success) {
      const nextErrors = parsed.error.flatten().fieldErrors;
      setErrors(nextErrors);
      setStatus("idle");
      form
        .querySelector<HTMLElement>(`[name="${Object.keys(nextErrors)[0]}"]`)
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
      } else {
        if (result.errors) setErrors(result.errors);
        setServerMessage(
          result.message ?? "We couldn’t deliver your request just now.",
        );
        setStatus("fallback");
      }
    } catch {
      setServerMessage("We couldn’t deliver your request just now.");
      setStatus("fallback");
    }
  }

  const errorFor = (name: string) => errors[name]?.[0];

  return (
    <form className="contact-form" noValidate onSubmit={onSubmit} data-reveal>
      <div className="form-row">
        <Field
          label="First name"
          name="firstName"
          placeholder="Ana"
          error={errorFor("firstName")}
        />
        <Field
          label="Last name"
          name="lastName"
          placeholder="Reyes"
          error={errorFor("lastName")}
        />
      </div>
      <Field
        label="Work email"
        name="workEmail"
        type="email"
        placeholder="you@organization.org"
        error={errorFor("workEmail")}
      />
      <Field
        label="Organization"
        name="organization"
        placeholder="Where you work"
        error={errorFor("organization")}
      />
      <label className="form-field">
        <span>Setting</span>
        <select
          name="setting"
          defaultValue=""
          aria-invalid={Boolean(errorFor("setting"))}
          aria-describedby={errorFor("setting") ? "setting-error" : undefined}
          required
        >
          <option value="" disabled>
            Select a setting
          </option>
          {settingOptions.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
        {errorFor("setting") ? (
          <small id="setting-error" className="field-error">
            {errorFor("setting")}
          </small>
        ) : null}
      </label>
      <label className="form-field">
        <span>Where do language barriers show up?</span>
        <textarea
          name="message"
          rows={4}
          placeholder="Front desk at two clinics, plus the calls that come in before appointments."
          aria-invalid={Boolean(errorFor("message"))}
          aria-describedby={errorFor("message") ? "message-error" : undefined}
          required
        />
        {errorFor("message") ? (
          <small id="message-error" className="field-error">
            {errorFor("message")}
          </small>
        ) : null}
      </label>
      <button
        className="button button--primary form-submit"
        type="submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Request a demo"}
        <ArrowRight aria-hidden="true" />
      </button>
      <small className="form-email-note">
        Prefer email?{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
      </small>
      <div className="form-status" aria-live="polite">
        {status === "success" ? (
          <p className="form-status--success">
            <CheckCircle2 aria-hidden="true" /> Thanks — we received your
            request and will be in touch.
          </p>
        ) : null}
        {status === "fallback" ? (
          <p>
            {serverMessage} Please email us directly at{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>
        ) : null}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  error?: string;
}) {
  return (
    <label className="form-field">
      <span>{label}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required
        autoComplete={
          name === "firstName"
            ? "given-name"
            : name === "lastName"
              ? "family-name"
              : name === "workEmail"
                ? "email"
                : "organization"
        }
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error ? (
        <small id={`${name}-error`} className="field-error">
          {error}
        </small>
      ) : null}
    </label>
  );
}
