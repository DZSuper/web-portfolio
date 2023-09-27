import Navbar from "@/app/navbar";
import Main from "../fragments/main";
import About from "../fragments/about";
import Skills from "../fragments/skills";
import Experience from "../fragments/experience";

export default function Layouts() {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Experience />
    </>
  );
}
