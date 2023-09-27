import AbuotContent from "../elements/about/aboutContent";
import AboutImage from "../elements/about/aboutImage";
import Title from "../elements/title";

export default function About() {
  return (
    <div id="about" className="flex flex-col mx-8 text-center md:text-start">
      <Title value="About Me" />
      <div className="flex flex-col gap-4 md:flex-row md:justify-around">
        <AboutImage />
        <AbuotContent />
      </div>
    </div>
  );
}
