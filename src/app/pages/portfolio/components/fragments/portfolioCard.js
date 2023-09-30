import { retrieveData } from "@/utils/retrieveData";
import PortfolioImageCard from "../elements/portfolioImageCard";
import PortfolioTitle from "../elements/portfolioTitle";
import PortfolioDesc from "../elements/portfolioDesc";
import PortfolioTechStack from "../elements/portfolioTechStack";
import PortfolioCta from "../elements/portfolioCta";

export default async function PortfolioCard() {
  const response = await retrieveData("portfolio_content");

  return (
    <div className="px-6 py-20 justify-center flex gap-4 flex-wrap">
      {response.map((doc) => (
        <div
          key={doc.id}
          className="max-w-sm h-[500px] border rounded-lg shadow bg-gray-800 border-gray-700"
        >
          <PortfolioImageCard
            src={doc.image}
            href={doc.link}
            value={doc.title}
          />
          <div className="p-4 h-[57%] flex flex-col justify-between gap-2">
            <PortfolioTitle href={doc.link} title={doc.title} />
            <PortfolioDesc desc={doc.desc} />
            <PortfolioTechStack tech={doc.tech} />
            <PortfolioCta href={doc.link} sourceCode={doc.source_code} />
          </div>
        </div>
      ))}
    </div>
  );
}
