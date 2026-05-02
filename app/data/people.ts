export type EmployeeProfile = {
  name: string;
  title: string;
  email: string;
  phone: string;
  profileImage: string;
  office?: string;
  about?: string;
  specialAreas?: string[];
  education?: string[];
  experience?: string[];
  projects?: string[];
  languages?: string[];
};

export type EmployeeSection = {
  id: "leadership" | "consultants";
  label: string;
  people: EmployeeProfile[];
};

export const employeeSections: EmployeeSection[] = [
  {
    id: "leadership",
    label: "Ledningsgrupp",
    people: [
      {
        name: "Dino Sljivo",
        title: "VD",
        email: "dino.sljivo@handelsjuristerna.se",
        phone: "0762 – 09 44 20",
        profileImage: "/people/dino-sljivo.png",
        languages: ["Svenska", "Engelska"],
        education: ["Juristexamen, Stockholms universitet"],
        experience: [
          "VD, Handelsjuristerna (2020–nuvarande)",
          "Affärsområdesansvarig, Handelsjuristerna (2018–2020)",
          "Juridisk konsult, Handelsjuristerna (2015–2018)",
        ],
        specialAreas: ["Kommersiell avtalsrätt", "Bolagsrätt", "Tvistelösning"],
      },
      {
        name: "Patricia Chantino Tellin",
        title: "Vice VD",
        email: "patricia.chantino@handelsjuristerna.se",
        phone: "0708 – 53 13 89",
        profileImage: "/people/patricia-chantino-tellin.png",
      },
      {
        name: "Robin Bozrgpour",
        title: "Ekonomiansvarig",
        email: "robin.bozrgpour@handelsjuristerna.se",
        phone: "0722 – 36 20 02",
        profileImage: "/people/robin-bozrgpour.png",
      },
      {
        name: "Evelina Regius",
        title: "Affärsområdesansvarig",
        email: "evelina.regius@handelsjuristerna.se",
        phone: "0722 – 37 71 20",
        profileImage: "/people/evelina-regius.png",
      },
      {
        name: "Rima El-Dawi",
        title: "Personalansvarig",
        email: "rima.eldawi@handelsjuristerna.se",
        phone: "0739 – 61 62 19",
        profileImage: "/people/rima-el-dawi.png",
      },
      {
        name: "Adam Svensson",
        title: "Key Account Manager",
        email: "adam.svensson@handelsjuristerna.se",
        phone: "0723 – 96 48 44",
        profileImage: "/people/adam-svensson.png",
      },
      {
        name: "Olivia Krantz",
        title: "Marknadsföringsansvarig",
        email: "olivia.krantz@handelsjuristerna.se",
        phone: "0728 – 40 00 06",
        profileImage: "/people/olivia-krantz.png",
      },
    ],
  },
  {
    id: "consultants",
    label: "Konsulter",
    people: [
      {
        name: "Elin Andersson",
        title: "Juridisk konsult",
        email: "elin.strandberg@handelsjuristerna.se",
        phone: "0705 – 78 38 28",
        profileImage: "/people/elin-andersson.png",
      },
      {
        name: "Ebba Billström",
        title: "Juridisk konsult",
        email: "ebba.billstrom@handelsjuristerna.se",
        phone: "0725 – 51 76 49",
        profileImage: "/people/ebba-billstrom.png",
      },
      {
        name: "Lorin Cicek",
        title: "Juridisk konsult",
        email: "lorin.cicek@handelsjuristerna.se",
        phone: "0725 – 20 86 46",
        profileImage: "/people/lorin-cicek.png",
      },
      {
        name: "Lara Dias",
        title: "Juridisk konsult",
        email: "lara.dias@handelsjuristerna.se",
        phone: "0763 – 45 70 26",
        profileImage: "/people/lara-dias.png",
      },
      {
        name: "Malin Eliasson",
        title: "Juridisk konsult",
        email: "malin.eliasson@handelsjuristerna.se",
        phone: "0727 – 13 57 79",
        profileImage: "/people/malin-eliasson.png",
      },
      {
        name: "Lisa Garnbratt",
        title: "Juridisk konsult",
        email: "lisa.garnbratt@handelsjuristerna.se",
        phone: "0722 – 52 70 00",
        profileImage: "/people/lisa-garnbratt.png",
      },
      {
        name: "Erik Hakopian",
        title: "Juridisk konsult",
        email: "erik.hakopian@handelsjuristerna.se",
        phone: "0737 – 49 29 95",
        profileImage: "/people/erik-hakopian.png",
      },
      {
        name: "Alexander Jonemark",
        title: "Juridisk konsult",
        email: "alexander.jonemark@handelsjuristerna.se",
        phone: "0764 – 28 06 38",
        profileImage: "/people/alexander-jonemark.png",
      },
      {
        name: "Ishak Kenjar",
        title: "Juridisk konsult",
        email: "ishak.kenjar@handelsjuristerna.se",
        phone: "0761 – 70 88 60",
        profileImage: "/people/ishak-kenjar.png",
      },
      {
        name: "Max Lokrantz",
        title: "Juridisk konsult",
        email: "max.lokrantz@handelsjuristerna.se",
        phone: "0736 – 78 74 79",
        profileImage: "/people/max-lokrantz.png",
      },
      {
        name: "Eduart Meta",
        title: "Juridisk konsult",
        email: "eduart.meta@handelsjuristerna.se",
        phone: "0735 – 58 93 87",
        profileImage: "/people/eduart-meta.png",
      },
      {
        name: "Else Nordlander",
        title: "Juridisk konsult",
        email: "else.nordlander@handelsjuristerna.se",
        phone: "0705 – 64 66 15",
        profileImage: "/people/else-nordlander.png",
      },
      {
        name: "Aldijana Olevic",
        title: "Juridisk konsult",
        email: "aldijana.olevic@handelsjuristerna.se",
        phone: "0709 – 38 18 78",
        profileImage: "/people/aldijana-olevic.png",
      },
      {
        name: "Gabriel Omari",
        title: "Senior juridisk konsult",
        email: "gabriel.omari@handelsjuristerna.se",
        phone: "0736 – 40 27 87",
        profileImage: "/people/gabriel-omari.png",
      },
      {
        name: "Marta Pawlowska",
        title: "Juridisk konsult",
        email: "marta.pawlowska@handelsjuristerna.se",
        phone: "0704 – 34 82 63",
        profileImage: "/people/marta-pawlowska.png",
      },
      {
        name: "Jasmin Sadek",
        title: "Juridisk konsult",
        email: "jasmin.sadek@handelsjuristerna.se",
        phone: "0739 – 38 39 30",
        profileImage: "/people/jasmin-sadek.png",
      },
      {
        name: "Mahan Safar",
        title: "Juridisk konsult",
        email: "mahan.safar@handelsjuristerna.se",
        phone: "0765 – 59 98 66",
        profileImage: "/people/mahan-safar.png",
      },
      {
        name: "Emelie Söderman",
        title: "Juridisk konsult",
        email: "emelie.soderman@handelsjuristerna.se",
        phone: "0720 – 09 55 06",
        profileImage: "/people/emelie-soderman.png",
      },
      {
        name: "Isa Yildiz",
        title: "Juridisk konsult",
        email: "isa.yildiz@handelsjuristerna.se",
        phone: "0735 – 35 42 29",
        profileImage: "/people/isa-yildiz.png",
      },
      {
        name: "Sonya Öhlin",
        title: "Juridisk konsult",
        email: "sonya.ohlin@handelsjuristerna.se",
        phone: "0702 – 01 06 24",
        profileImage: "/people/sonya-ohlin.png",
      },
    ],
  },
];

export const employees = employeeSections.flatMap((section) => section.people);

export function getEmployeeId(person: Pick<EmployeeProfile, "name">) {
  return person.name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function findEmployeeById(id: string) {
  return employees.find((person) => getEmployeeId(person) === id);
}
