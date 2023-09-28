import PortfolioCard from "../elements/portfolio/portfolioCard";
import PortfolioPageLink from "../elements/portfolio/portfolioPageLink";
import Title from "../elements/title";

export default function Portfolio() {
  return (
    <div id="portfolio" className="flex flex-col items-center">
      <Title value="My Portfolio" />
      <PortfolioCard />
      <PortfolioPageLink />
    </div>
  );
}
