export type BoardMember = {
  name: string;
  role: string;
  description: string;
};

export const boardMembers: BoardMember[] = [
  {
    name: "Dino Sljivo",
    role: "Ordförande",
    description:
      "Ansvarar för byråns övergripande riktning och långsiktiga utveckling.",
  },
  {
    name: "Patricia Chantino Tellin",
    role: "Vice ordförande",
    description:
      "Bidrar med operativ styrning och utveckling av byråns interna arbete.",
  },
  {
    name: "Robin Bozrgpour",
    role: "Ekonomiansvarig",
    description:
      "Arbetar med ekonomisk uppföljning och struktur i styrelsens beslut.",
  },
  {
    name: "Evelina Regius",
    role: "Ledamot",
    description:
      "Bidrar med fokus på affärsområden, klientarbete och kvalitet.",
  },
  {
    name: "Rima El-Dawi",
    role: "Ledamot",
    description:
      "Arbetar med frågor kopplade till organisation, medarbetare och kultur.",
  },
  {
    name: "Adam Svensson",
    role: "Ledamot",
    description:
      "Bidrar med perspektiv på klientrelationer och externa samarbeten.",
  },
  {
    name: "Olivia Krantz",
    role: "Ledamot",
    description:
      "Arbetar med byråns kommunikation, varumärke och synlighet.",
  },
];
