import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import ServicesGrid from "@/components/ServicesGrid";
import Team from "@/components/Team";
import LogoMarquee from "@/components/LogoMarquee";
import Pricing from "@/components/Pricing";
import BlogSection from "@/components/BlogSection";
import AreaOfOperation from "@/components/AreaOfOperation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ValueProps />
        <ServicesGrid />
        <Team />
        <LogoMarquee />
        <Pricing />
        <BlogSection />
        <AreaOfOperation />
      </main>
      <Footer />
    </>
  );
}
