import { retrieveData } from "@/utils/retrieveData";
import MainTypewriter from "./mainTypewriter";
import Cta from "./cta";

export default async function MainContent() {
  const mainContent = await retrieveData("main_content");

  return (
    <div className="flex flex-col gap-4 md:w-2/5">
      <h1 className="text-xl font-medium">{mainContent[0].name}</h1>
      <MainTypewriter />
      <p>{mainContent[0].short_about}</p>
      <Cta />
    </div>
  );
}
