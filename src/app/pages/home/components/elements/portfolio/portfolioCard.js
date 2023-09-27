import PortfolioCardImage from "./portfolioCardImage";
import PortfolioCardDesc from "./portfolioCardDesc";

export default function PortfolioCard() {
  return (
    <div className="max-w-sm border rounded-lg shadow bg-gray-800 border-gray-700">
      <PortfolioCardImage href="/" src="" value="" />
      <PortfolioCardDesc />
    </div>
  );
}
