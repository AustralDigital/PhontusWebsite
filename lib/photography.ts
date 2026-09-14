// Optimized from public/images/New Pictures; retain the supplied compositions.
const scene = (name: string, alt: string) => ({
  src: `/images/photography/${name}-landscape.webp`,
  mobileSrc: `/images/photography/${name}-portrait.webp`,
  alt,
});

export const photography = {
  receptionKit: scene("reception-kit", "Phontus Interpreting Kit ready for a conversation on a reception counter."),
  officeKit: scene("office-kit", "Phontus Interpreting Kit on a desk in a bright office."),
  clinicalCorridor: scene("clinical-corridor", "The complete Phontus Clinical Kit, including its wheeled base, beside an exam room doorway."),
  clinicalExamRoom: scene("clinical-exam-room", "Phontus Clinical Kit with its screen, storage and wheeled base in an exam room."),
  reception: scene("reception-conversation", "A staff member and visitor using a Phontus Interpreting Kit at a healthcare reception desk."),
  healthcare: scene("clinical-conversation", "A clinician speaking with two people beside the Phontus Clinical Kit in an exam room."),
  education: scene("school-conversation", "A school staff member meeting with a parent and child around a Phontus Interpreting Kit."),
  hospitality: scene("hotel-conversation", "A hotel receptionist welcoming a family with a Phontus Interpreting Kit on the counter."),
};
