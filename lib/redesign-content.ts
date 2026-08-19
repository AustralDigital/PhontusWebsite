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
    image: "/images/phontus-clinical-kit-v2.webp",
    imageAlt: "The mobile Phontus Clinical Kit in a patient room.",
  },
  {
    id: "frontline",
    label: "Frontline Kit",
    badge: "For counters, offices and desks",
    title: "Phontus Frontline Kit",
    copy: "A compact tabletop kit that lives where the conversation already happens: a service counter, a school office, a hotel desk, a worksite trailer. It sits between the two people and stays plugged in.",
    features: [
      "Small enough for a shared counter, visible from both sides",
      "External directional microphone that rejects lobby noise",
      "No setup between conversations, nothing to reset",
      "Arrives pre-configured for the site it is going to",
    ],
    image: "/images/phontus-frontline-kit-v2.webp",
    imageAlt: "The compact Phontus Frontline Kit on a service counter.",
  },
  {
    id: "phone",
    label: "Phone Line",
    badge: "For callers reaching your team by phone",
    title: "Phontus Phone Line",
    copy: "Interpreting built into your business number. Customers call the number they already have for you, your team answers as usual, and Phontus interprets between them on the line.",
    features: [
      "Your existing number or a dedicated one",
      "No app, no account, no device on either end",
      "Covers the calls that arrive when no kit is nearby",
      "Calls appear in the same session history as kit sessions",
    ],
  },
  {
    id: "human",
    label: "Human interpreter",
    badge: "Included with every session",
    badgeTone: "human",
    title: "Human interpreter escalation",
    copy: "Not a separate product and not a separate purchase. When a conversation needs a person, ask for one from the session screen. AI interpreting keeps going until the interpreter connects, and the transcript carries straight through the handover.",
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
    badge: "Included with every session",
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
    eyebrow: "Solutions · Healthcare",
    title: "Care that starts on time.",
    lead: "A patient arrives, checks in, is told where to go and what happens next. When those exchanges stall, everything scheduled after them runs late.",
    overviewCopy: "Check-in, care coordination, directions to the right department, scheduling and follow-up. The Clinical Kit rolls to where the patient is; the Phone Line covers the calls that come in before the visit.",
    tags: ["Clinical Kit", "Phone Line"],
    image: "/images/phontus-clinical-kit-healthcare-v2.webp",
    imageAlt: "A clinician and patient speaking with a Phontus Clinical Kit nearby.",
    coverage: [
      "Check-in and registration",
      "Directions to the right department",
      "Care coordination at the bedside",
      "Scheduling and rescheduling",
      "Discharge and follow-up instructions",
      "Calls before and after a visit",
    ],
    recommendationTitle: "The cart for the room, the line for the call",
    recommendations: [
      {
        product: "Clinical Kit",
        role: "In the room",
        copy: "The cart goes to the patient. In an exam room or at the bedside the screen sits where both people can read it standing, and the frame carries the cleaning supplies the room already requires.",
      },
      {
        product: "Phone Line",
        role: "Before and after the visit",
        copy: "Much of a clinic's language work happens on the phone: confirming an appointment, explaining what to bring, following up. The line covers those calls without waiting for a cart to be free.",
      },
    ],
    exchangeTitle: "A first-time patient at the front desk",
    exchangeCopy: "Four turns, about forty seconds. Nothing is handed over and nobody leaves the desk to find help.",
    elapsed: "00:38 elapsed",
    transcript: [
      { speaker: "Visitor", language: "Spanish (US)", time: "00:04", original: "Buenos días, tengo cita a las diez con la doctora Ruiz.", translation: "Good morning, I have a ten o'clock appointment with Dr Ruiz." },
      { speaker: "Front desk", language: "English (US)", time: "00:12", original: "I have you right here. Have you been to this office before?", translation: "Aquí la tengo. ¿Ha venido antes a esta oficina?" },
      { speaker: "Visitor", language: "Spanish (US)", time: "00:22", original: "No, es mi primera vez. ¿Necesito llenar algo?", translation: "No, this is my first time. Do I need to fill anything out?" },
      { speaker: "Front desk", language: "English (US)", time: "00:31", original: "One form. I will bring it over and go through it with you.", translation: "Un formulario. Se lo llevo y lo repasamos juntos." },
    ],
    changes: [
      { title: "For the staff member", copy: "No hunting for a bilingual colleague, no waiting in a phone queue, no device handed across the desk. Start the session and keep working through the queue." },
      { title: "For the patient", copy: "Nobody asks them to install anything, create an account, or hold someone else's equipment. They speak Spanish out loud and get an answer in the same minute." },
    ],
    questionsTitle: "Asked in clinics and hospitals",
    faqs: [
      { question: "Can one cart move between rooms during a shift?", answer: "Yes. The Clinical Kit is built to roll, and a session belongs to the site rather than to a room. Teams that cover several rooms usually start with one cart and add a second where the wait shows up." },
      { question: "Who can read a transcript afterwards?", answer: "The administrators you designate, according to the retention rules you set per site in the admin console." },
      { question: "Does the patient have to do anything?", answer: "No. They speak. There is no app, no account, no headset and nothing to sign before the conversation starts." },
    ],
    ctaTitle: "See the Clinical Kit in a room like yours.",
    ctaCopy: "Twenty minutes, a real session, and an honest answer about whether the cart or the line fits first.",
  },
  {
    slug: "business-operations",
    name: "Business and field operations",
    eyebrow: "Solutions · Business and field operations",
    title: "Work that cannot wait for a callback.",
    lead: "A customer at the counter, a driver at the dock, an installer at a door. These conversations happen once, in person, and there is no second attempt on the schedule.",
    overviewCopy: "Customer service, pickup and delivery, installations, safety briefings and shift coordination. The Frontline Kit sits at the counter or in the trailer; the Phone Line handles the dispatch calls.",
    tags: ["Frontline Kit", "Phone Line"],
    image: "/images/phontus-frontline-kit-business-v2.webp",
    imageAlt: "Two operations team members speaking near a Phontus Frontline Kit.",
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
      { product: "Frontline Kit", role: "At the counter or in the trailer", copy: "Compact enough for a shared counter and visible from both sides. The directional microphone is the reason it works in a loud room: it listens to the two people in front of it and rejects the rest." },
      { product: "Phone Line", role: "For dispatch and inbound calls", copy: "Delivery windows, service calls and schedule changes arrive by phone. Interpreting on your existing number means the caller does not have to find someone who speaks English first." },
    ],
    exchangeTitle: "Confirming a delivery window at the counter",
    exchangeCopy: "The exchange that decides whether someone waits at home all day.",
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
      { question: "Does it work in a loud environment?", answer: "That is what the external directional microphone is for. It focuses on the two people speaking and eliminates the background sound around them, which is why the kits no longer use headsets." },
      { question: "Can we run kits across several locations?", answer: "Yes. Sites, devices and staff accounts are managed together in the admin console, and usage by site tells you where to add the next kit." },
      { question: "What if there is no counter, just a truck?", answer: "The Frontline Kit is a tabletop format, so it needs a surface and power. Where neither exists, the Phone Line covers the conversation instead." },
    ],
    ctaTitle: "Put a kit on your busiest counter.",
    ctaCopy: "Tell us where the queue backs up and we will show a session in that exact setting.",
  },
  {
    slug: "education",
    name: "Schools and districts",
    eyebrow: "Solutions · Schools and districts",
    title: "Families reached the first time.",
    lead: "Enrollment, an attendance question, a bus change, a form that has to come back signed. Reaching a family once is worth more than leaving three messages.",
    overviewCopy: "Enrollment, front-office questions, attendance, transportation, events and routine family communication. A Frontline Kit at the office window, the Phone Line for the calls home.",
    tags: ["Frontline Kit", "Phone Line"],
    image: "/images/phontus-frontline-kit-education-v2.webp",
    imageAlt: "A school staff member and parent speaking near a Phontus Frontline Kit.",
    coverage: ["Enrollment and registration", "Front-office questions", "Attendance and tardiness", "Transportation changes", "Events, permissions and forms", "Routine calls home"],
    recommendationTitle: "Where families actually reach you",
    recommendations: [
      { product: "Frontline Kit", role: "At the front office window", copy: "A parent arrives with a question and an hour of their day. The kit sits on the office counter so the exchange finishes at the window instead of becoming an appointment." },
      { product: "Phone Line", role: "For calls home", copy: "Attendance, transport and event calls go out by phone. Interpreting on the line means staff can make the call themselves rather than routing it to whoever in the building speaks Spanish." },
    ],
    exchangeTitle: "A registration question at the office window",
    exchangeCopy: "The conversation that decides whether a child starts school on Monday or the following week.",
    elapsed: "00:41 elapsed",
    transcript: [
      { speaker: "Parent", language: "Spanish (US)", time: "00:05", original: "Vengo a inscribir a mi hija. ¿Qué documentos necesito?", translation: "I am here to enroll my daughter. Which documents do I need?" },
      { speaker: "Front office", language: "English (US)", time: "00:14", original: "Proof of address and her immunisation record. Do you have those today?", translation: "Comprobante de domicilio y su registro de vacunas. ¿Los tiene hoy?" },
      { speaker: "Parent", language: "Spanish (US)", time: "00:26", original: "Tengo las vacunas. El comprobante lo puedo traer mañana.", translation: "I have the immunisations. I can bring the proof of address tomorrow." },
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
      { question: "Who can read what was said?", answer: "Only the administrators you designate, under the retention rules you set. If your district needs transcripts deleted on a shorter schedule, that is a per-site setting." },
    ],
    ctaTitle: "Start at the office window that sees the most families.",
    ctaCopy: "We will run a session against a real enrollment conversation and size it from there.",
  },
  {
    slug: "hospitality",
    name: "Hotels and hospitality",
    eyebrow: "Solutions · Hotels and hospitality",
    title: "Service that does not need a translator app.",
    lead: "A guest at check-in, a request at eleven at night, a housekeeping question between shifts. Hospitality is judged on exchanges that take under a minute.",
    overviewCopy: "Check-in, directions, service requests and coordination between shifts and departments. The kit stays on the desk, in view of both the guest and the agent.",
    tags: ["Frontline Kit", "Phone Line"],
    image: "/images/phontus-frontline-kit-hospitality-v2.webp",
    imageAlt: "A hotel agent and guest speaking near a Phontus Frontline Kit.",
    coverage: ["Check-in and check-out", "Directions and recommendations", "Service and housekeeping requests", "Billing questions", "Coordination between departments", "Calls to the front desk"],
    recommendationTitle: "The desk and the line, both always staffed",
    recommendations: [
      { product: "Frontline Kit", role: "At the front desk", copy: "It sits on the desk in view of both the guest and the agent, so nobody reaches for a phone and holds it up to a stranger. The exchange stays a conversation between two people." },
      { product: "Phone Line", role: "For in-house and inbound calls", copy: "Requests come from rooms and from outside the building at every hour. Interpreting on the line means the overnight agent handles them without waking anyone up." },
    ],
    exchangeTitle: "A late check-out request at the desk",
    exchangeCopy: "A small ask, answered immediately, that decides how the stay is remembered.",
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
      { question: "Does the guest have to interact with the device?", answer: "No. They speak to the agent. The screen shows what is happening so both people can follow it, but only the agent operates it." },
      { question: "Can we put kits at more than one desk?", answer: "Yes. Each desk is a site in the admin console, with its own device and usage view." },
      { question: "Does it work in a busy lobby?", answer: "The external directional microphone focuses on the guest and the agent and eliminates the noise around them. That is why the kits no longer use headsets." },
    ],
    ctaTitle: "See a check-in run in Spanish.",
    ctaCopy: "Twenty minutes on a call, using the conversations your front desk actually has.",
  },
];

export const homeFaqs = [
  { question: "Which languages does Phontus support?", answer: "Spanish ⇄ English at launch. More languages are in development. On screen, languages are always spelled out in words, so nobody has to decode an abbreviation." },
  { question: "Do participants need headsets?", answer: "No. Each kit has an external directional microphone that focuses on the two people speaking and eliminates the background sound around them. Both people talk out loud, normally. Nothing is handed over, worn, or cleaned between conversations." },
  { question: "What if AI interpreting is not enough for a conversation?", answer: "Request a certified human interpreter from the session screen. AI interpreting continues until they connect, and the transcript continues without a break." },
  { question: "Does a caller need an app or an account?", answer: "No. Callers dial your existing or dedicated number and speak. Phontus interprets between the caller and your team on the line." },
  { question: "Who controls transcripts and retention?", answer: "You do. Retention rules are set per site in the admin console, and session history is visible to the administrators you designate. The security page describes the current approach." },
  { question: "Can we start at one site?", answer: "Yes. Most teams begin with one kit at the place where language comes up most, then add sites from the console. Kits arrive pre-configured." },
];
