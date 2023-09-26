import { retrieveData } from "@/utils/retrieveData";
import MainTypewriter from "./mainTypewriter";

export default async function MainContent() {
  const mainContent = await retrieveData("main_content");

  return (
    <div>
      <h1>{mainContent[0].name}</h1>
      <MainTypewriter />
      <p>{mainContent[0].short_about}</p>
    </div>
  );
}
