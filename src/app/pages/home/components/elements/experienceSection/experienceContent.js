import { retrieveData } from "@/utils/retrieveData";
import ExperienceDescription from "./experienceDesc";
import ExperienceTime from "./experienceTime";

export default async function ExperienceContent() {
  const data = await retrieveData("experience_content");

  return (
    <>
      {data.map((doc) => (
        <div
          key={doc.id}
          className="max-w-md p-6 border bg-gray-800 border-gray-700 rounded-lg shadow mx-6"
        >
          <ExperienceTime value={doc.time} />
          <ExperienceDescription value={doc.description} />
        </div>
      ))}
    </>
  );
}
