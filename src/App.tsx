import HeroSection from "./components/HeroSection";
import InformationCard from "./components/InformationCard";
import MenuSection from "./components/Menu";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MenuSection />
      <InformationCard />
    </>
  );
}
