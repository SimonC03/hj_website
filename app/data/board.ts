export type BoardMember = {
  name: string;
  role: string;
  description: string;
};

export const boardMembers: BoardMember[] = [
  {
    name: "Christoffer Thorell",
    role: "Styrelseordförande",
    description:
      "Christoffer är tidigare VD på HandelsJuristerna och han läser nu sin sista termin på juristprogrammet.",
  },
  {
    name: "Peter Björnram",
    role: "Styrelseledamot",
    description:
      "Peter har tidigare varit VD på Ackordscentralen och ett riskkapitalbolag. Idag jobbar han som advokat på Dnovo.",
  },
  {
    name: "Minna Skyman",
    role: "Styrelseledamot",
    description:
      "Idag jobbar Minna som VD på Setterwalls i Göteborg och har tidigare haft andra styrelseuppdrag.",
  },
  {
    name: "Björn Nicolai",
    role: "Styrelseledamot",
    description:
      "Björn har suttit med alla år i HandelsJuristernas styrelse. Idag är Björn advokat och partner på advokatfirman Vinge.",
  },
  {
    name: "Robin Olsen",
    role: "Styrelseledamot",
    description:
      "Robin arbetar som konsult inom digital marknadsföring i sitt egna bolag Olsen Marketing.",
  },
];
