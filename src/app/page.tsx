import { Catalog } from "@/components/Catalog";
import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { Interlude } from "@/components/Interlude";
import { Items } from "@/components/Items";
import { Marquee } from "@/components/Marquee";
import { OrderFlow } from "@/components/OrderFlow";
import { Price } from "@/components/Price";
import { Why } from "@/components/Why";
import { Works } from "@/components/Works";

const MARQUEE_ITEMS = [
  "EST. FUKUOKA",
  "100% SUBLIMATION",
  "SOCCER · FUTSAL · SOCIETY",
  "MIN 5 PCS",
  "ADD-ON FROM 1",
  "MADE TO ORDER",
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <Marquee items={MARQUEE_ITEMS} tone="madder" />

      <Why />

      <Items />

      <Interlude
        kicker="MANIFESTO · 026"
        lines={[
          "既製じゃない、",
          "“今のチーム” を、",
          "そのまま着る。",
        ]}
        attribution="DÉCONTRACTÉ / FUKUOKA"
        tone="madder"
      />

      <Catalog />

      <Price />

      <OrderFlow />

      <Marquee items={MARQUEE_ITEMS} tone="hazard" />

      <Works />

      <Interlude
        kicker="LETTER · FROM THE STUDIO"
        lines={[
          "完成じゃなく、",
          "“まず叩き台” を、",
          "投げてください。",
        ]}
        attribution="ATELIER, YAKUIN"
        tone="jet"
      />

      <Faq />

      <Contact />
    </>
  );
}
