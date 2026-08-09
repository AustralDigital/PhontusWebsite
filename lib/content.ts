import {
  BriefcaseBusiness,
  Hotel,
  Hospital,
  School,
  type LucideIcon,
} from "lucide-react";

export type DeliveryMethodSlug =
  | "clinical-kit"
  | "frontline-kit"
  | "phone-access";

export type DeliveryMethod = {
  slug: DeliveryMethodSlug;
  name: string;
  label: string;
  audience: string;
  headline?: string;
  description: string;
  image?: string;
  imageAlt?: string;
  features: string[];
};

export const deliveryMethods: DeliveryMethod[] = [
  {
    slug: "clinical-kit",
    name: "Phontus Clinical Kit",
    label: "Clinical Kit",
    audience: "For hospitals and clinics",
    description:
      "A mobile interpreting cart that keeps the Phontus session screen, two open-ear bone-conduction headsets, organized storage, and space for cleaning supplies together at the point of care.",
    image: "/images/phontus-clinical-kit.webp",
    imageAlt:
      "The mobile Phontus Clinical Kit with a session screen and two open-ear bone-conduction headsets.",
    features: [
      "Mobile cart for care environments",
      "Two open-ear bone-conduction headsets",
      "Organized storage and space for cleaning supplies",
    ],
  },
  {
    slug: "frontline-kit",
    name: "Phontus Frontline Kit",
    label: "Frontline Kit",
    audience: "For routine frontline operations",
    description:
      "A compact tabletop interpreting kit for customer counters, school offices, hotel desks, worksites, and other routine, non-critical service environments.",
    image: "/images/phontus-frontline-kit.webp",
    imageAlt:
      "The compact Phontus Frontline Kit with a session screen and two open-ear bone-conduction headsets.",
    features: [
      "Compact tabletop format",
      "Two open-ear bone-conduction headsets",
      "Designed for routine, non-critical conversations",
    ],
  },
  {
    slug: "phone-access",
    name: "Phontus Phone Line",
    label: "Phone Line",
    audience: "For callers reaching your team by phone",
    headline: "Interpretation built into your business phone line.",
    description:
      "Customers call your existing or dedicated number. Phontus interprets between the caller and your team in real time—no app, account, or special device required.",
    features: [
      "Works with your existing number or a new dedicated one",
      "No app, account, or device needed for the caller",
      "Planned capability — not yet deployed",
    ],
  },
];

export type Solution = {
  slug: "healthcare" | "business-operations" | "education" | "hospitality";
  title: string;
  shortTitle: string;
  eyebrow: string;
  metadataTitle: string;
  metadataDescription: string;
  description: string;
  hero: string;
  image: string;
  imageAlt: string;
  icon: LucideIcon;
  accessMethods: DeliveryMethodSlug[];
  challenge: string;
  useCases: string[];
  benefits: { title: string; description: string }[];
  considerations: string[];
};

export const solutions: Solution[] = [
  {
    slug: "healthcare",
    title: "Clearer everyday conversations across healthcare settings.",
    shortTitle: "Healthcare",
    eyebrow: "For healthcare teams",
    metadataTitle: "Healthcare Interpretation Kit",
    metadataDescription:
      "Support routine hospital and clinic conversations with the mobile Phontus Clinical Kit, open-ear bone-conduction headsets, and the Phontus Phone Line.",
    description:
      "Support routine check-in, care coordination, directions, scheduling, and follow-up with the mobile Phontus Clinical Kit.",
    hero:
      "Bring AI-assisted Spanish–English interpretation to the point of care with the mobile Phontus Clinical Kit and two open-ear bone-conduction headsets, while keeping qualified human-interpreter pathways for complex, sensitive, or high-stakes conversations.",
    image: "/images/phontus-clinical-kit-healthcare.webp",
    imageAlt:
      "A clinician and patient using the Phontus Clinical Kit with open-ear bone-conduction headsets.",
    icon: Hospital,
    accessMethods: ["clinical-kit", "phone-access"],
    challenge:
      "Language needs can emerge across clinics, hospitals, dental practices, and access teams. Staff need an interpretation option that can move to the point of need and remains clear about when qualified human support is required.",
    useCases: [
      "Check-in and routine intake",
      "Everyday care coordination",
      "Directions and scheduling",
      "Care instructions and follow-up",
    ],
    benefits: [
      {
        title: "Mobile by design",
        description:
          "Move one organized Clinical Kit between reception areas, care rooms, and departments.",
      },
      {
        title: "A headset for each participant",
        description:
          "Two open-ear bone-conduction headsets support a focused, face-to-face exchange while leaving the ears uncovered.",
      },
      {
        title: "Everything stays together",
        description:
          "Keep the session screen, headsets, organized storage, and space for cleaning supplies in one recognizable station.",
      },
    ],
    considerations: [
      "Map appropriate uses by department and conversation risk.",
      "Maintain access to qualified human interpreters for complex, sensitive, or high-stakes conversations.",
      "Plan Clinical Kit placement, headset cleaning and handling, charging, audio privacy, and staff access.",
    ],
  },
  {
    slug: "business-operations",
    title: "Keep customer service and daily operations moving.",
    shortTitle: "Business & Field Operations",
    eyebrow: "For retail, logistics, telecom, and field teams",
    metadataTitle: "Business Interpretation Kit & Phone Line",
    metadataDescription:
      "Support routine customer and workplace conversations with the compact Phontus Frontline Kit, open-ear bone-conduction headsets, and the Phontus Phone Line.",
    description:
      "Support routine customer service, pickup and delivery, installations, and workplace coordination with the compact Frontline Kit or the Phontus Phone Line.",
    hero:
      "Bring AI-assisted Spanish–English interpretation to stores, service centers, warehouses, and worksites with the compact Phontus Frontline Kit, plus the Phontus Phone Line for customers who call in directly.",
    image: "/images/phontus-frontline-kit-business.webp",
    imageAlt:
      "Two operations team members using a Phontus Frontline Kit with open-ear bone-conduction headsets.",
    icon: BriefcaseBusiness,
    accessMethods: ["frontline-kit", "phone-access"],
    challenge:
      "Teams move between counters, floors, depots, and job sites. They need language support that is easy to reach for routine, non-critical conversations without adding another complicated workflow.",
    useCases: [
      "Customer questions and service requests",
      "Pickup, delivery, and appointment coordination",
      "Installation and equipment explanations",
      "Routine shift and workplace communication",
    ],
    benefits: [
      {
        title: "A compact point of access",
        description:
          "Place the Frontline Kit close to routine conversations at counters, service areas, and shared workspaces.",
      },
      {
        title: "A headset for each participant",
        description:
          "Two open-ear bone-conduction headsets help both people follow the interpreted exchange while remaining face to face.",
      },
      {
        title: "Reach beyond the station",
        description:
          "The Phontus Phone Line lets customers reach your team by phone when a shared kit is not nearby.",
      },
    ],
    considerations: [
      "Plan Frontline Kit placement, connectivity, headset handling, charging, and Phone Line coverage across fixed and mobile settings.",
      "Use Phontus for appropriate routine, non-critical interactions and qualified human support for safety, HR, contractual, legal, emergency, or other high-stakes conversations.",
      "Set clear kit ownership, staff access, cleaning, and handoff expectations.",
    ],
  },
  {
    slug: "education",
    title: "Help schools build clearer everyday connections with families.",
    shortTitle: "Schools & Districts",
    eyebrow: "For school and district teams",
    metadataTitle: "School Interpretation Kit & Phone Line",
    metadataDescription:
      "Support routine school and family conversations with the compact Phontus Frontline Kit, open-ear bone-conduction headsets, and the Phontus Phone Line.",
    description:
      "Support enrollment, front-office questions, attendance, transportation, events, and routine family communication with the Frontline Kit or the Phontus Phone Line.",
    hero:
      "Bring AI-assisted Spanish–English interpretation to front offices, enrollment areas, and family-support spaces with the compact Phontus Frontline Kit, plus the Phontus Phone Line for families who call in directly.",
    image: "/images/phontus-frontline-kit-education.webp",
    imageAlt:
      "A school staff member and parent using a Phontus Frontline Kit with open-ear bone-conduction headsets.",
    icon: School,
    accessMethods: ["frontline-kit", "phone-access"],
    challenge:
      "Language needs can appear across campuses, schedules, and family touchpoints. School teams need an approachable option for routine questions that remains bounded by district privacy, accessibility, and interpreter policies.",
    useCases: [
      "Enrollment and front-office questions",
      "Attendance and transportation",
      "Schedules, events, and wayfinding",
      "Routine family communication",
    ],
    benefits: [
      {
        title: "Easy for families to begin",
        description:
          "Begin a kit-based session without asking the student or family member to create a separate account or install an app.",
      },
      {
        title: "A headset for each participant",
        description:
          "Two open-ear bone-conduction headsets support a focused exchange while leaving the ears uncovered.",
      },
      {
        title: "Flexible across the district",
        description:
          "Use a compact Frontline Kit at shared service points, plus the Phontus Phone Line when a family calls in directly.",
      },
    ],
    considerations: [
      "Align use with student privacy requirements and district policies.",
      "Use qualified human interpreters for IEP meetings, discipline, safety, or other formal and high-stakes conversations.",
      "Plan accessible kit placement, headset cleaning and handling, supervision, charging, Phone Line coverage, and staff ownership.",
    ],
  },
  {
    slug: "hospitality",
    title: "Help guests feel understood from arrival to checkout.",
    shortTitle: "Hotels & Hospitality",
    eyebrow: "For hotel and guest-service teams",
    metadataTitle: "Hotel Interpretation Kit & Phone Line",
    metadataDescription:
      "Support routine guest-service conversations with the compact Phontus Frontline Kit, open-ear bone-conduction headsets, and the Phontus Phone Line.",
    description:
      "Support routine check-in, directions, service requests, and team coordination with the Frontline Kit or the Phontus Phone Line.",
    hero:
      "Bring AI-assisted Spanish–English interpretation to front desks and guest-service stations with the compact Phontus Frontline Kit, plus the Phontus Phone Line for guests who call in directly.",
    image: "/images/phontus-frontline-kit-hospitality.webp",
    imageAlt:
      "A hotel associate and guest using a Phontus Frontline Kit with open-ear bone-conduction headsets.",
    icon: Hotel,
    accessMethods: ["frontline-kit", "phone-access"],
    challenge:
      "Guest needs can surface at the front desk, around the property, or across service teams. Language support should be easy to reach for routine requests while remaining thoughtful about privacy and escalation in shared spaces.",
    useCases: [
      "Arrival, check-in, and checkout",
      "Directions and amenity questions",
      "Guest service requests",
      "Housekeeping and maintenance coordination",
    ],
    benefits: [
      {
        title: "A clear starting point",
        description:
          "Move from a language need to a kit-based session without asking the guest to install an app or create a separate account.",
      },
      {
        title: "A headset for each participant",
        description:
          "Two open-ear bone-conduction headsets give the associate and guest a dedicated way to follow the exchange while remaining face to face.",
      },
      {
        title: "Reach across the property",
        description:
          "Use the compact Frontline Kit at shared service points, plus the Phontus Phone Line when a guest calls in directly.",
      },
    ],
    considerations: [
      "Plan kit placement and use headsets thoughtfully in shared or noisy environments.",
      "Protect privacy during payment, identity, and room-related conversations.",
      "Keep established qualified human-interpreter pathways for emergencies, disputes, and other sensitive or high-stakes requests.",
    ],
  },
];

export const faqs = [
  {
    question: "Which languages does Phontus support at launch?",
    answer:
      "Phontus is launching with Spanish and English. Additional languages are not currently available.",
  },
  {
    question: "How can my team access Phontus?",
    answer:
      "Organizations can use the mobile Clinical Kit in hospitals and clinics, the compact Frontline Kit in routine service and workplace settings, or the Phontus Phone Line when a customer calls your business number directly.",
  },
  {
    question: "What comes with each interpreting kit?",
    answer:
      "Both kits pair the Phontus session experience with two open-ear bone-conduction headsets. The Clinical Kit uses a mobile cart with organized storage and space for cleaning supplies; the Frontline Kit uses a compact tabletop format for counters, desks, offices, and worksites.",
  },
  {
    question: "Why use open-ear bone-conduction headsets?",
    answer:
      "The headsets leave the ears uncovered and give each participant a dedicated way to follow the interpreted exchange while staying engaged with the person and environment around them.",
  },
  {
    question: "Does the person receiving support need an account?",
    answer:
      "No separate participant account is required to join a kit-based session.",
  },
  {
    question: "Is Phontus a replacement for professional interpreters?",
    answer:
      "No. Phontus provides AI-assisted Spanish–English interpretation for appropriate routine interactions. Organizations should keep clear policies for when a qualified human interpreter is needed, especially for complex, sensitive, or high-stakes conversations.",
  },
  {
    question: "Where can Phontus fit?",
    answer:
      "Phontus is designed for routine frontline conversations across healthcare, business and field operations, schools, hospitality, and similar service environments. The right mix of Clinical Kits, Frontline Kits, and the Phontus Phone Line depends on the organization’s workflows, privacy needs, physical spaces, and escalation policies.",
  },
];
