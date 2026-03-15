import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import ServicesGrid from "@/components/ServicesGrid";
import LogoMarquee from "@/components/LogoMarquee";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
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
        <LogoMarquee />
        <Testimonials />
        <Pricing />
        <AreaOfOperation />
      </main>
      <Footer />
    </>
  );
}
