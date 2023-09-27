import PortfolioCard from "../elements/portfolio/portfolioCard";
import Title from "../elements/title";

export default function Portfolio() {
  return (
    <div className="flex flex-col items-center">
      <Title value="My Portfolio" />
      <PortfolioCard />
    </div>
  );
}
