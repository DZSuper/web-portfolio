import { retrieveData } from "@/utils/retrieveData";

export default async function AboutContent() {
  const data = await retrieveData("about_content");

  return (
    <div className="flex flex-col gap-4 md:w-2/5">
      {data.map((doc) => (
        <p key={doc.id}>{doc.about}</p>
      ))}
    </div>
  );
}
