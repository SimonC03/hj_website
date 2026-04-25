export type PricingCategoryId =
  | "all"
  | "family"
  | "housing"
  | "business"
  | "disputes";

export type PricingCategory = {
  id: PricingCategoryId;
  title: string;
  description: string;
  icon: "layers" | "users" | "home" | "briefcase" | "scale";
};

export type PricingService = {
  title: string;
  price: string;
  category: Exclude<PricingCategoryId, "all">;
  summary: string;
  includes: string[];
  note?: string;
};

export const pricingCategories: PricingCategory[] = [
  {
    id: "all",
    title: "Alla priser",
    description: "Samlad översikt över fasta från-priser.",
    icon: "layers",
  },
  {
    id: "family",
    title: "Privat & familj",
    description: "Avtal och handlingar för familj, relation och arv.",
    icon: "users",
  },
  {
    id: "housing",
    title: "Bostad & avtal",
    description: "Juridik kring hyra, köp och bostadsrelaterade dokument.",
    icon: "home",
  },
  {
    id: "business",
    title: "Företag",
    description: "Avtal, arbetsrätt och löpande stöd för verksamheter.",
    icon: "briefcase",
  },
  {
    id: "disputes",
    title: "Tvist & myndighet",
    description: "Rättsutredningar, överklaganden och processnära stöd.",
    icon: "scale",
  },
];

export const pricingServices: PricingService[] = [
  {
    title: "Samboavtal",
    price: "från 2 999 SEK",
    category: "family",
    summary:
      "Ett tydligt samboavtal anpassat efter er situation och de tillgångar avtalet ska reglera.",
    includes: [
      "Inledande genomgång",
      "Löpande kontakt",
      "Rättslig bedömning",
      "Upprättande av samboavtal",
      "Avslutande genomgång",
    ],
  },
  {
    title: "Äktenskapsförord",
    price: "från 3 999 SEK",
    category: "family",
    summary:
      "Upprättande av äktenskapsförord med fokus på tydliga villkor och praktisk användbarhet.",
    includes: [
      "Inledande möte",
      "Genomgång av önskad egendomsfördelning",
      "Rättslig utredning",
      "Upprättande av äktenskapsförord",
      "Avslutande möte",
    ],
  },
  {
    title: "Testamente",
    price: "från 2 999 SEK",
    category: "family",
    summary:
      "Testamente utformat efter dina önskemål, familjeförhållanden och formkraven.",
    includes: [
      "Möte",
      "Löpande kontakt",
      "Rättslig utredning",
      "Upprättande av testamente",
      "Avslutande samtal",
    ],
  },
  {
    title: "Bodelningsavtal",
    price: "från 7 499 SEK",
    category: "family",
    summary:
      "Stöd med att strukturera och dokumentera en bodelning mellan makar eller sambor.",
    includes: [
      "Inledande möte",
      "Genomgång av underlag",
      "Rättsliga överväganden",
      "Upprättande av bodelningsavtal",
      "Avslutande möte eller samtal",
    ],
  },
  {
    title: "Hyresavtal",
    price: "från 4 704 SEK",
    category: "housing",
    summary:
      "Hyresavtal för bostad eller lokal med villkor som är tydliga från start.",
    includes: [
      "Inledande möte",
      "Löpande kontakter",
      "Rättslig utredning",
      "Upprättande av hyresavtal",
      "Avslutande möte",
    ],
  },
  {
    title: "Andrahandsavtal",
    price: "från 4 704 SEK",
    category: "housing",
    summary:
      "Avtal för andrahandsuthyrning med genomgång av rättigheter, ansvar och villkor.",
    includes: [
      "Inledande möte",
      "Löpande kontakter",
      "Rättslig utredning",
      "Upprättande av avtal",
      "Avslutande möte",
    ],
  },
  {
    title: "Köpeavtal bostadsrätt",
    price: "från 9 800 SEK",
    category: "housing",
    summary:
      "Köpeavtal och genomgång av handlingar vid överlåtelse av bostadsrätt.",
    includes: [
      "Inledande möte",
      "Löpande kontakt",
      "Rättslig utredning",
      "Upprättande av köpeavtal",
      "Avslutande möte",
    ],
  },
  {
    title: "Juridisk analys inför bostadsköp",
    price: "från 7 056 SEK",
    category: "housing",
    summary:
      "Genomgång av avtalsvillkor, risker och dokument inför ett bostadsköp.",
    includes: [
      "Inledande möte",
      "Genomgång av handlingar",
      "Juridisk analys",
      "Rekommendationer inför beslut",
      "Avslutande möte",
    ],
  },
  {
    title: "Dokumentgranskning",
    price: "från 1 960 SEK",
    category: "disputes",
    summary:
      "Snabb och konkret granskning av dokument där du vill förstå risker och nästa steg.",
    includes: [
      "Inledande möte",
      "Genomgång av dokument",
      "Kommentarer och rekommendationer",
      "Avslutande möte",
    ],
  },
  {
    title: "Rättsutredning",
    price: "från 5 495 SEK",
    category: "disputes",
    summary:
      "En strukturerad rättsutredning när frågan kräver mer än en snabb bedömning.",
    includes: [
      "Inledande möte",
      "Löpande kontakt",
      "Genomgång av handlingar",
      "Rättsutredning",
      "Avslutande möte",
    ],
    note:
      "Priset kan variera beroende på ärendets omfattning, komplexitet och tidsåtgång.",
  },
  {
    title: "Överklagan",
    price: "från 9 995 SEK",
    category: "disputes",
    summary:
      "Upprättande av överklagande med genomgång av beslut, tidsfrister och argumentation.",
    includes: [
      "Inledande möte",
      "Genomgång av beslut och handlingar",
      "Rättsliga överväganden",
      "Upprättande och avsändande",
      "Genomgång av svar eller beslut",
    ],
    note:
      "Från-priset utgår från ett nytt ärende där vi behöver läsa in materialet från början.",
  },
  {
    title: "Anställningsavtal",
    price: "från 9 408 SEK",
    category: "business",
    summary:
      "Anställningsavtal anpassat efter roll, villkor och verksamhetens behov.",
    includes: [
      "Inledande möte",
      "Löpande kontakter",
      "Rättslig utredning",
      "Upprättande av anställningsavtal",
      "Avslutande möte",
    ],
  },
  {
    title: "Uppsägningshandling",
    price: "från 4 312 SEK",
    category: "business",
    summary:
      "Stöd med uppsägningshandling och de formella krav som behöver hanteras.",
    includes: [
      "Inledande möte",
      "Genomgång av handlingar",
      "Upprättande av uppsägningshandling",
      "Avslutande kontakt",
    ],
  },
  {
    title: "Uppsägning av anställd",
    price: "från 21 560 SEK",
    category: "business",
    summary:
      "Rådgivning och praktiskt stöd genom en mer omfattande uppsägningsprocess.",
    includes: [
      "Inledande möte",
      "Genomgång av anställningsunderlag",
      "Rättsliga överväganden",
      "Stöd vid förhandling",
      "Avslutande avtal och åtgärder",
    ],
  },
  {
    title: "Kommersiellt avtal",
    price: "från 6 900 SEK",
    category: "business",
    summary:
      "Avtal för samarbeten, leveranser eller andra affärsrelationer där villkoren behöver sitta.",
    includes: [
      "Behovsgenomgång",
      "Risk- och villkorsanalys",
      "Upprättande eller revidering",
      "Genomgång med klient",
    ],
  },
];
