import { z } from "zod";

export const settingOptions = [
  "Healthcare",
  "Business or field operations",
  "School or district",
  "Hotel or hospitality",
  "Other",
] as const;

export const contactSchema = z.object({
  firstName: z.string().trim().min(1, "Enter your first name.").max(80),
  lastName: z.string().trim().min(1, "Enter your last name.").max(80),
  workEmail: z.string().trim().email("Enter a valid work email address.").max(160),
  organization: z.string().trim().min(1, "Enter your organization.").max(160),
  setting: z.enum(settingOptions, { errorMap: () => ({ message: "Select a setting." }) }),
  message: z.string().trim().min(10, "Tell us a little more about where language comes up.").max(2000),
});

export type ContactInquiry = z.infer<typeof contactSchema>;
