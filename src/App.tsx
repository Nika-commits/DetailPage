import FooterCta from "./components/Footer";
import HeroSection from "./components/HeroSection";
import InformationCard from "./components/InformationCard";
import MenuSection from "./components/Menu";
import Navbar from "./components/Navbar/Navbar";
import SiteFooter from "./components/SiteFooter";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MenuSection />
      <InformationCard />
      <FooterCta />
      <SiteFooter />
    </>
  );
}
