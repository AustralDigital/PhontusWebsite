import { z } from "zod";

export const accessMethodOptions = [
  "Clinical Kit",
  "Frontline Kit",
  "Phone Line",
  "Mix of kits and Phone Line",
  "Not sure yet",
] as const;

export const contactSchema = z.object({
  firstName: z.string().trim().min(1, "Enter your first name.").max(80),
  lastName: z.string().trim().min(1, "Enter your last name.").max(80),
  workEmail: z
    .string()
    .trim()
    .email("Enter a valid work email address.")
    .max(160),
  phone: z.string().trim().max(40).optional().default(""),
  organization: z.string().trim().min(1, "Enter your organization.").max(160),
  role: z.string().trim().min(1, "Enter your role.").max(120),
  organizationType: z
    .string()
    .min(1, "Select an organization type.")
    .max(80),
  locations: z.string().trim().max(20).optional().default(""),
  useCase: z.string().min(1, "Select an expected use case.").max(120),
  accessMethod: z.enum(accessMethodOptions, {
    errorMap: () => ({
      message: "Select a preferred way to access Phontus.",
    }),
  }),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a little more about what you need.")
    .max(2000),
  consent: z.literal(true, {
    errorMap: () => ({
      message: "Please confirm that Phontus may contact you.",
    }),
  }),
});

export type ContactInquiry = z.infer<typeof contactSchema>;
