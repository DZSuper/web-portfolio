import ExperienceContent from "../elements/experience/experienceContent";
import Title from "../elements/title";

export default function Experience() {
  return (
    <div id="experience" className="flex flex-col items-center gap-4">
      <Title value="My Experience" />
      <ExperienceContent />
    </div>
  );
}
