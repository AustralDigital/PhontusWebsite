import { photography } from "@/lib/photography";
import type { TranscriptLine } from "@/components/conversation-card";

export type ProductTab = "clinical" | "frontline" | "phone" | "human" | "console";

export const productPanels: Array<{
  id: ProductTab;
  label: string;
  badge: string;
  badgeTone?: "brand" | "human";
  title: string;
  copy: string;
  features: string[];
  image?: string;
  imageAlt?: string;
  imageMobile?: string;
}> = [
  {
    id: "clinical",
    label: "Clinical Kit",
    badge: "For hospitals and clinics",
    title: "Phontus Clinical Kit",
    copy: "A mobile interpreting cart built for the point of care. It rolls to the bedside or into the exam room and keeps the session screen at a height both people can read while standing.",
    features: [
      "Session screen mounted at standing reading height",
      "External directional microphone, aimed at the two speakers",
      "Organized storage and space for cleaning supplies",
      "Nothing worn, nothing handed to a patient",
    ],
    image: photography.clinicalCorridor.src,
    imageMobile: photography.clinicalCorridor.mobileSrc,
    imageAlt: photography.clinicalCorridor.alt,
  },
  {
    id: "frontline",
    label: "Interpreting Kit",
    badge: "For counters, offices and desks",
    title: "Phontus Interpreting Kit",
    copy: "A compact tabletop kit that lives where the conversation already happens: a service counter, a school office, a hotel desk, a worksite trailer. It sits between the two people and stays plugged in.",
    features: [
      "Compact format for a shared counter",
      "External directional microphone to help reduce surrounding noise",
      "No setup between conversations, nothing to reset",
      "Arrives pre-configured for the site it is going to",
    ],
    image: photography.officeKit.src,
    imageMobile: photography.officeKit.mobileSrc,
    imageAlt: photography.officeKit.alt,
  },
  {
    id: "phone",
    label: "Phone Line",
    badge: "For callers reaching your team by phone",
    title: "Phontus Phone Line",
    copy: "Interpreting built into your business number. Customers call the number they already have for you, your team answers as usual, and Phontus interprets between them on the line.",
    features: [
      "Your existing number or a dedicated one",
      "No app or account for callers; no Phontus kit required",
      "Covers the calls that arrive when no kit is nearby",
      "Calls appear in the same session history as kit sessions",
    ],
  },
  {
    id: "human",
    label: "Human interpreter",
    badge: "Part of the Phontus system",
    badgeTone: "human",
    title: "Human interpreter escalation",
    copy: "When a conversation needs a person, request a human interpreter from the session screen. Keep the support your team needs connected to the conversation.",
    features: [
      "Requested from the session screen, mid-conversation",
      "AI interpreting continues while the interpreter joins",
      "The transcript marks which turns the person handled",
      "Available on kit sessions and on the Phone Line",
    ],
  },
  {
    id: "console",
    label: "Admin console",
    badge: "Part of the Phontus system",
    title: "Admin console",
    copy: "One place to run Phontus across every site. Kit sessions and phone calls land in the same history, so whoever runs the service sees the whole picture, not half of it.",
    features: [
      "Sites, staff accounts and device enrollment",
      "Retention rules set per site",
      "Session history across kits and the Phone Line",
      "Usage by site, so you know where to add a kit next",
    ],
  },
];

export type Solution = {
  slug: "healthcare" | "business-operations" | "education" | "hospitality";
  name: string;
  eyebrow: string;
  title: string;
  lead: string;
  overviewCopy: string;
  tags: string[];
  image: string;
  imageAlt: string;
  imageMobile?: string;
  coverage: string[];
  recommendationTitle: string;
  recommendations: { product: string; role: string; copy: string }[];
  exchangeTitle: string;
  exchangeCopy: string;
  elapsed: string;
  transcript: TranscriptLine[];
  changes: { title: string; copy: string }[];
  questionsTitle: string;
  faqs: { question: string; answer: string }[];
  ctaTitle: string;
  ctaCopy: string;
};

export const solutions: Solution[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    eyebrow: "Industries · Healthcare",
    title: "Care that starts on time.",
    lead: "A patient arrives, checks in, is told where to go and what happens next. When those exchanges stall, everything scheduled after them runs late.",
    overviewCopy: "Check-in, care coordination, directions to the right department, scheduling and follow-up. The Clinical Kit rolls to where the patient is; the Phone Line covers the calls that come in before the visit.",
    tags: ["Clinical Kit", "Phone Line"],
    image: photography.healthcare.src,
    imageMobile: photography.healthcare.mobileSrc,
    imageAlt: photography.healthcare.alt,
    coverage: [
      "Check-in and registration",
      "Directions to the right department",
      "Care coordination at the bedside",
      "Scheduling and rescheduling",
      "Discharge and follow-up instructions",
      "Calls before and after a visit",
    ],
    recommendationTitle: "At check-in, at the bedside and on the phone",
    recommendations: [
      {
        product: "Interpreting Kit",
        role: "At the front desk",
        copy: "A tabletop kit for patient check-in, registration, and scheduling at reception.",
      },
      {
        product: "Clinical Kit",
        role: "In the room",
        copy: "Bring the cart into the exam room or to the bedside. Both people can see the screen, and the cart has space for cleaning supplies.",
      },
      {
        product: "Phone Line",
        role: "Before and after the visit",
        copy: "Interpret calls about appointments, what to bring to a visit, and follow-up on your clinic’s phone line.",
      },
    ],
    exchangeTitle: "A first-time patient at the front desk",
    exchangeCopy: "An example of patient check-in: confirming an appointment, then explaining the next step.",
    elapsed: "00:38 elapsed",
    transcript: [
      { speaker: "Visitor", language: "Spanish (US)", time: "00:04", original: "Buenos días, tengo cita a las diez con la doctora Ruiz.", translation: "Good morning, I have a ten o'clock appointment with Dr Ruiz." },
      { speaker: "Front desk", language: "English (US)", time: "00:12", original: "I have you right here. Have you been to this office before?", translation: "Aquí la tengo. ¿Ha venido antes a esta oficina?" },
      { speaker: "Visitor", language: "Spanish (US)", time: "00:22", original: "No, es mi primera vez. ¿Necesito llenar algo?", translation: "No, this is my first time. Do I need to fill anything out?" },
      { speaker: "Front desk", language: "English (US)", time: "00:31", original: "One form. I will bring it over and go through it with you.", translation: "Un formulario. Se lo llevo y lo repasamos juntos." },
    ],
    changes: [
      { title: "For the staff member", copy: "No hunting for a bilingual colleague, no waiting in a phone queue, no device handed across the desk. Start the session and keep working through the queue." },
      { title: "For the patient", copy: "Nobody asks them to install anything, create an account, or hold someone else's equipment. They speak Spanish out loud and hear the response in their own language." },
    ],
    questionsTitle: "Asked in clinics and hospitals",
    faqs: [
      { question: "Can one cart move between rooms during a shift?", answer: "Yes. Staff can move the Clinical Kit between rooms. Sessions are associated with the site." },
      { question: "Who can read a transcript afterwards?", answer: "The administrators you designate, according to the retention rules you set per site in the admin console." },
      { question: "Does the patient have to do anything?", answer: "Staff operate the kit. The patient speaks directly to the staff member and can follow the exchange on the shared screen." },
    ],
    ctaTitle: "See the Clinical Kit in a room like yours.",
    ctaCopy: "Twenty minutes, a real session, and an honest answer about whether the cart or the line fits first.",
  },
  {
    slug: "business-operations",
    name: "Business and field operations",
    eyebrow: "Industries · Business and field operations",
    title: "Work that cannot wait for a callback.",
    lead: "A customer at the counter, a driver at the dock, an installer at a door. These conversations happen once, in person, and there is no second attempt on the schedule.",
    overviewCopy: "Customer service, pickup and delivery, installations, safety briefings and shift coordination. The Interpreting Kit sits at the counter or in the trailer; the Phone Line handles the dispatch calls.",
    tags: ["Interpreting Kit", "Phone Line"],
    image: "/images/phontus-frontline-kit-business-v2.webp",
    imageAlt: "Two operations team members speaking near a Phontus Interpreting Kit.",
    coverage: [
      "Counter questions, returns and warranty",
      "Pickup, delivery and dispatch calls",
      "Installations and site visits",
      "Safety briefings before a shift",
      "Crew and shift coordination",
      "Supplier and vendor calls",
    ],
    recommendationTitle: "The kit where people meet, the line where they call",
    recommendations: [
      { product: "Interpreting Kit", role: "At the counter or in the trailer", copy: "The tabletop kit fits a shared counter. Its directional microphone helps reduce surrounding noise." },
      { product: "Phone Line", role: "For dispatch and inbound calls", copy: "Interpret conversations about delivery windows, service requests, and schedule changes on your existing business number." },
    ],
    exchangeTitle: "Confirming a delivery window at the counter",
    exchangeCopy: "A customer asks about a delivery, and a staff member helps find a time that works.",
    elapsed: "00:34 elapsed",
    transcript: [
      { speaker: "Customer", language: "Spanish (US)", time: "00:03", original: "Vine a preguntar cuándo llega mi pedido.", translation: "I came to ask when my order arrives." },
      { speaker: "Counter", language: "English (US)", time: "00:10", original: "It is scheduled for Thursday, between eight and noon.", translation: "Está programado para el jueves, entre las ocho y el mediodía." },
      { speaker: "Customer", language: "Spanish (US)", time: "00:19", original: "Trabajo hasta las diez. ¿Puede ser por la tarde?", translation: "I work until ten. Could it be in the afternoon?" },
      { speaker: "Counter", language: "English (US)", time: "00:28", original: "I can move it to Thursday afternoon. You will get a call first.", translation: "Puedo cambiarlo al jueves por la tarde. Le llamarán antes." },
    ],
    changes: [
      { title: "For the team member", copy: "One fewer reason to escalate, transfer, or ask someone to come back with a family member. The kit is already on and the session starts where the person is standing." },
      { title: "For the customer", copy: "They get a straight answer at the counter instead of a note to call back later, and they hear it in the language they came in speaking." },
    ],
    questionsTitle: "Asked in counters and worksites",
    faqs: [
      { question: "Does it work in a loud environment?", answer: "The kit’s directional microphone helps reduce surrounding noise. We can demonstrate the setup with a scenario from your workplace." },
      { question: "Can we run kits across several locations?", answer: "Yes. Manage sites, devices, and staff access in the admin console, and review usage by location." },
      { question: "What does the tabletop kit need on site?", answer: "The tabletop kit needs a stable surface and power. The Phone Line is an option for conversations that take place by phone." },
    ],
    ctaTitle: "Put a kit on your busiest counter.",
    ctaCopy: "Tell us where the queue backs up and we will show a session in that exact setting.",
  },
  {
    slug: "education",
    name: "Schools and districts",
    eyebrow: "Industries · Schools and districts",
    title: "Families reached the first time.",
    lead: "Enrollment, an attendance question, a bus change, a form that has to come back signed. Reaching a family once is worth more than leaving three messages.",
    overviewCopy: "Enrollment, front-office questions, attendance, transportation, events and routine family communication. An Interpreting Kit at the office window, the Phone Line for the calls home.",
    tags: ["Interpreting Kit", "Phone Line"],
    image: photography.education.src,
    imageMobile: photography.education.mobileSrc,
    imageAlt: photography.education.alt,
    coverage: ["Enrollment and registration", "Front-office questions", "Attendance and tardiness", "Transportation changes", "Events, permissions and forms", "Routine calls home"],
    recommendationTitle: "Where families actually reach you",
    recommendations: [
      { product: "Interpreting Kit", role: "At the front office window", copy: "Keep a kit at the school office window for enrollment questions, forms, and day-to-day conversations with families." },
      { product: "Phone Line", role: "For calls home", copy: "Use phone interpretation to contact families about attendance, transportation, and school events." },
    ],
    exchangeTitle: "A registration question at the office window",
    exchangeCopy: "A parent asks which documents they need to enroll their child.",
    elapsed: "00:41 elapsed",
    transcript: [
      { speaker: "Parent", language: "Spanish (US)", time: "00:05", original: "Vengo a inscribir a mi hija. ¿Qué documentos necesito?", translation: "I am here to enroll my daughter. Which documents do I need?" },
      { speaker: "Front office", language: "English (US)", time: "00:14", original: "Proof of address and her immunization record. Do you have those today?", translation: "Comprobante de domicilio y su registro de vacunas. ¿Los tiene hoy?" },
      { speaker: "Parent", language: "Spanish (US)", time: "00:26", original: "Tengo las vacunas. El comprobante lo puedo traer mañana.", translation: "I have the immunizations. I can bring the proof of address tomorrow." },
      { speaker: "Front office", language: "English (US)", time: "00:35", original: "That is fine. I will start the file now so tomorrow is quick.", translation: "Está bien. Empiezo el expediente ahora para que mañana sea rápido." },
    ],
    changes: [
      { title: "For office staff", copy: "The bilingual colleague everyone borrows gets their own job back. Any staff member can finish an enrollment or a call home without scheduling around someone else." },
      { title: "For the family", copy: "One trip instead of two, and an answer at the window rather than a form to take home and puzzle over." },
    ],
    questionsTitle: "Asked in school offices",
    faqs: [
      { question: "Can each campus have its own kit?", answer: "Yes. Each site is configured separately in the admin console, with its own devices, staff accounts and retention rules." },
      { question: "Can staff use it for outbound calls home?", answer: "Yes. The Phone Line interprets in both directions, so a call a staff member places is interpreted the same way as one that comes in." },
      { question: "Who can read what was said?", answer: "Your district manages who can access transcripts and sets how long each site keeps them." },
    ],
    ctaTitle: "Start at the office window that sees the most families.",
    ctaCopy: "We will run a session against a real enrollment conversation and size it from there.",
  },
  {
    slug: "hospitality",
    name: "Hotels and hospitality",
    eyebrow: "Industries · Hotels and hospitality",
    title: "Service that does not need a translator app.",
    lead: "A guest at check-in, a request at eleven at night, a housekeeping question between shifts. Hospitality is judged on exchanges that take under a minute.",
    overviewCopy: "Check-in, directions, service requests and coordination between shifts and departments. The kit stays on the desk, in view of both the guest and the agent.",
    tags: ["Interpreting Kit", "Phone Line"],
    image: photography.hospitality.src,
    imageMobile: photography.hospitality.mobileSrc,
    imageAlt: photography.hospitality.alt,
    coverage: ["Check-in and check-out", "Directions and recommendations", "Service and housekeeping requests", "Billing questions", "Coordination between departments", "Calls to the front desk"],
    recommendationTitle: "At the desk and on the line",
    recommendations: [
      { product: "Interpreting Kit", role: "At the front desk", copy: "Set the kit where guests and staff can both see the screen during check-in and service requests." },
      { product: "Phone Line", role: "For in-house and inbound calls", copy: "Interpret calls about reservations, directions, and requests from guests during their stay." },
    ],
    exchangeTitle: "A late check-out request at the desk",
    exchangeCopy: "A guest asks for a later checkout and a place to leave their luggage.",
    elapsed: "00:29 elapsed",
    transcript: [
      { speaker: "Guest", language: "Spanish (US)", time: "00:03", original: "¿Puedo salir más tarde mañana? Mi vuelo es a las seis.", translation: "Can I check out later tomorrow? My flight is at six." },
      { speaker: "Front desk", language: "English (US)", time: "00:11", original: "I can hold the room until two at no charge.", translation: "Puedo mantener la habitación hasta las dos sin cargo." },
      { speaker: "Guest", language: "Spanish (US)", time: "00:19", original: "Perfecto. ¿Puedo dejar las maletas después?", translation: "Perfect. Can I leave my bags after that?" },
      { speaker: "Front desk", language: "English (US)", time: "00:25", original: "Yes, we will store them here until you leave.", translation: "Sí, las guardamos aquí hasta que se vaya." },
    ],
    changes: [
      { title: "For the agent", copy: "No apologetic gesturing, no fetching a colleague from another department, no phone passed across the desk. The answer happens at the desk, in the moment." },
      { title: "For the guest", copy: "They are spoken to rather than worked around. Their request is understood the first time, in their own language, by the person in front of them." },
    ],
    questionsTitle: "Asked in hotels",
    faqs: [
      { question: "Does the guest have to interact with the device?", answer: "Staff operate the kit. Guests speak directly to staff and can follow the exchange on the screen." },
      { question: "Can we put kits at more than one desk?", answer: "Yes. Enroll multiple kits and organize them by site in the admin console." },
      { question: "Does it work in a busy lobby?", answer: "The kit’s directional microphone helps reduce surrounding noise so staff and guests can speak directly to each other." },
    ],
    ctaTitle: "See a check-in run in Spanish.",
    ctaCopy: "Twenty minutes on a call, using the conversations your front desk actually has.",
  },
];

export const homeFaqs = [
  { question: "Which languages does Phontus support?", answer: "English and Spanish are available by default. Phontus is previewing selected kit language pairs that include Modern Standard Arabic, Standard Mandarin, Japanese, Brazilian Portuguese, French, German, Hindi, and Korean. Ask us about the pair your team needs." },
  { question: "Do participants need headsets?", answer: "Participants speak directly to each other. A directional microphone picks up the conversation, so participants can keep their hands free." },
  { question: "What if the conversation needs a human interpreter?", answer: "Staff can request a human interpreter from the session screen. Ask us about interpreter availability for your setting." },
  { question: "Who controls transcripts and retention?", answer: "Your organization sets transcript retention by site and manages who can access session history." },
  { question: "Does the caller need an app or account?", answer: "Callers simply dial your business number or a dedicated line. The call itself is all they need to join." },
  { question: "Can we start with one kit?", answer: "Yes. Start with one counter or room and use staff feedback and site usage to plan where to expand." },
];
