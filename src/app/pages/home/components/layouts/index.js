import Navbar from "@/app/navbar";
import MainSection from "../fragments/mainSection";
import AboutSection from "../fragments/aboutSection";
import SkillsSection from "../fragments/skillsSection";
import ExperienceSection from "../fragments/experienceSection";
import PortfolioSection from "../fragments/portfolioSection";
import ContactSection from "../fragments/contactSection";

export default function HomeLayouts() {
  return (
    <>
      <Navbar />
      <MainSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <PortfolioSection />
      <ContactSection />
    </>
  );
}
