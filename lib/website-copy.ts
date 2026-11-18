export const productDetails = {
  "clinical-kit": {
    "label": "Mobile interpretation",
    "title": "Live interpretation at the bedside",
    "copy": "Bring a shared screen, a directional microphone, and live interpretation into the exam room or to the bedside on one mobile cart.",
    "short": "A mobile interpreting cart for exam rooms and bedside conversations.",
    "points": [
      [
        "Move between rooms",
        "The screen, microphone and organized storage move together on a wheeled cart."
      ],
      [
        "Share the conversation on screen",
        "A shared screen at standing height displays what each person said and the interpretation."
      ],
      [
        "Request a human interpreter",
        "Staff can request a human interpreter from the session screen."
      ]
    ],
    "contexts": [
      [
        "Exam rooms",
        "Bring the cart into the exam room for conversations such as a routine follow-up."
      ],
      [
        "At the bedside",
        "Keep the shared screen in view while staff speak directly to the patient."
      ],
      [
        "Across the clinic",
        "Move the cart between rooms and manage it with the rest of your site’s devices."
      ]
    ],
    "fit": "/solutions/healthcare"
  },
  "interpreting-kit": {
    "label": "Tabletop interpretation",
    "title": "Live interpretation at the counter",
    "copy": "A compact tabletop kit for reception desks and service counters. Staff can start a session from the shared screen as soon as a visitor arrives.",
    "short": "A tabletop interpreting kit for service counters and reception desks.",
    "points": [
      [
        "Ready at the counter",
        "The kit arrives configured for your site. Staff choose the languages, start a session, and speak directly to the visitor."
      ],
      [
        "A screen both people can read",
        "A directional microphone picks up speech. Both people can read the original words and the interpretation on screen."
      ],
      [
        "Request a human interpreter",
        "Request a human interpreter directly from the session screen when needed."
      ]
    ],
    "contexts": [
      [
        "Reception and service desks",
        "Help visitors check in, ask a question or find their next step."
      ],
      [
        "Schools and hotels",
        "Use the kit for family questions in the school office and guest requests at the front desk."
      ],
      [
        "Worksites and offices",
        "Support shift handoffs, delivery questions, and routine conversations on site."
      ]
    ],
    "fit": "/solutions"
  },
  "phone-line": {
    "label": "Phone interpretation",
    "title": "Live interpretation on your business number",
    "copy": "Offer two-way English and Spanish interpretation on your existing business number or a dedicated line. Callers dial as usual.",
    "short": "Two-way interpretation on your existing phone number.",
    "points": [
      [
        "Callers dial your number",
        "Use the business number callers already know or set up a dedicated line."
      ],
      [
        "Staff answer as usual",
        "Each person speaks in English or Spanish and hears the other person’s words interpreted aloud."
      ],
      [
        "Request an interpreter during the call",
        "Request a human interpreter during the call. Review Phone Line calls alongside kit sessions in the admin console."
      ]
    ],
    "contexts": [
      [
        "Before an appointment",
        "Answer scheduling questions and explain what a visitor should bring."
      ],
      [
        "Guest and family calls",
        "Answer families’ and guests’ questions before they arrive and after they leave."
      ],
      [
        "Dispatch and service",
        "Confirm delivery windows, explain schedule changes, and handle service requests."
      ]
    ],
    "fit": "/platform"
  }
} as const;

export const industryDetails = {
  "healthcare": {
    "title": "Language access from check-in to bedside",
    "lead": "Support check-in, scheduling, and routine coordination across languages. Staff can request a human interpreter according to your organization’s language-access policies.",
    "summary": "Patient check-in, care coordination, scheduling and follow-up."
  },
  "education": {
    "title": "Help families talk with school staff",
    "lead": "Use live interpretation for enrollment, attendance, and routine questions at the school office or on the phone.",
    "summary": "Enrollment, attendance and everyday conversations with families."
  },
  "business-operations": {
    "title": "Interpretation at the counter and on site",
    "lead": "Help staff handle customer questions, coordinate deliveries, and share shift updates with people who speak another language.",
    "summary": "Customer service, deliveries, shift handoffs and field coordination."
  },
  "hospitality": {
    "title": "Help guests speak directly with staff",
    "lead": "Support check-in, billing questions, and guest requests across languages at reception or over the phone.",
    "summary": "Check-in, guest requests and calls before and after a stay."
  }
} as const;

export const platformPoints = [
  [
    "Sites and devices",
    "Enroll kits, assign them to sites, and see which devices are deployed at each location."
  ],
  [
    "People and access",
    "Manage staff accounts and grant access to the locations each person works at."
  ],
  [
    "Sessions and usage",
    "Review kit sessions and Phone Line calls together. View usage by site."
  ],
  [
    "Transcript retention",
    "Set how long each site keeps transcripts and manage who can read them."
  ]
] as const;

export const conversationSteps = [
  [
    "Choose the language pair",
    "Select two languages available for your kit, then start the session. English and Spanish are available by default. Additional pairs are in preview."
  ],
  [
    "Take turns speaking",
    "Phontus plays the interpretation aloud and displays both languages on the shared screen."
  ],
  [
    "Request an interpreter if needed",
    "Staff can ask a human interpreter to join from within the same session."
  ]
] as const;

export const handoffSteps = [
  [
    "Start with AI interpretation",
    "Each person speaks directly to the other, taking one turn at a time."
  ],
  [
    "Request a human interpreter",
    "Staff send the request from the session. AI interpretation continues while the interpreter joins."
  ],
  [
    "Continue in the same session",
    "The transcript identifies which turns the human interpreter handled."
  ]
] as const;

export const demoAgenda = [
  "See a live English–Spanish session and ask about preview languages.",
  "Compare the kits and the Phone Line for your setting.",
  "See how to request a human interpreter.",
  "See how your team can manage sites, devices and usage."
] as const;
