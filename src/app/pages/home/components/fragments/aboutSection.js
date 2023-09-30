import AboutContent from "../elements/aboutSection/aboutContent";
import AboutImage from "../elements/aboutSection/aboutImage";
import TitleSection from "../elements/titleSection";

export default function AboutSection() {
  return (
    <div id="about" className="flex flex-col mx-8 text-center md:text-start">
      <TitleSection value="About Me" />
      <div className="flex flex-col gap-4 md:flex-row md:justify-around">
        <AboutImage />
        <AboutContent />
      </div>
    </div>
  );
}
