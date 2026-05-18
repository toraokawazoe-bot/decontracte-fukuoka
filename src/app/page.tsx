import { Catalog } from "@/components/Catalog";
import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { Items } from "@/components/Items";
import { OrderFlow } from "@/components/OrderFlow";
import { Price } from "@/components/Price";
import { Why } from "@/components/Why";
import { Works } from "@/components/Works";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Why />
      <Price />
      <Items />
      <Catalog />
      <Works />
      <OrderFlow />
      <Faq />
      <Contact />
    </>
  );
}
