import Cta from "@/components/cta/Cta";
import HeroSection from "@/components/hero-section/HeroSection";
import InvestmentDetailSection from "@/components/investment-detail-section/InvestmentDetailSection";
import ProductSection from "@/components/product-section/ProductSection";
import Image from "next/image";


export default function Home() {
  return (
    <div>
      <HeroSection/>
      <ProductSection/>
      <InvestmentDetailSection/>
      <Cta/>
    </div>
  );
}
