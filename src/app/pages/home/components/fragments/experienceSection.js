import ExperienceContent from "../elements/experienceSection/experienceContent";
import TitleSection from "../elements/titleSection";

export default function ExperienceSection() {
  return (
    <div id="experience" className="flex flex-col items-center gap-4">
      <TitleSection value="My Experience" />
      <ExperienceContent />
    </div>
  );
}
