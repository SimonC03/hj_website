import type { Metadata } from "next";
import { PageIntro } from "@/app/components/page-intro";
import { PriceList } from "./price-list";

export const metadata: Metadata = {
  title: "Priser",
  description:
    "Prislista med fasta från-priser för juridiska tjänster hos Handelsjuristerna.",
};

export default function PricingPage() {
  return (
    <>
      <PageIntro eyebrow="Priser" title="Tydliga från-priser för vanliga juridiska ärenden.">
        <p>
          Här kan du filtrera på område, öppna varje tjänst och se vad som ingår.
          Listan är byggd så att nya kategorier och prisrader kan läggas till löpande.
        </p>
      </PageIntro>

      <PriceList />
    </>
  );
}
