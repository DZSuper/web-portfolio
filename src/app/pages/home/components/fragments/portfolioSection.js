import PortfolioCard from "../elements/portfolioSection/portfolioCard";
import PortfolioPageLink from "../elements/portfolioSection/portfolioPageLink";
import TitleSection from "../elements/titleSection";

export default function PortfolioSection() {
  return (
    <div id="portfolio" className="flex flex-col items-center">
      <TitleSection value="My Portfolio" />
      <PortfolioCard />
      <PortfolioPageLink />
    </div>
  );
}
