import MainContent from "../elements/mainSection/mainContent";
import MainImage from "../elements/mainSection/mainImage";

export default function MainSection() {
  return (
    <div
      id="home"
      className="flex flex-col items-center justify-center text-center mx-5 h-screen md:flex-row md:text-start md:justify-around"
    >
      <MainImage />
      <MainContent />
    </div>
  );
}
