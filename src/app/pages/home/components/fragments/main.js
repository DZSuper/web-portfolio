import HeroImage from "../elements/heroImage";
import MainContent from "../elements/mainContent";

export default function Main() {
  return (
    <div
      id="home"
      className="flex flex-col items-center justify-center text-center mx-5 h-screen md:flex-row md:text-start md:justify-around"
    >
      <HeroImage />
      <MainContent />
    </div>
  );
}
