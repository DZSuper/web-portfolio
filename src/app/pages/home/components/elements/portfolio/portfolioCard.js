import PortfolioCardImage from "./portfolioCardImage";
import PortfolioCardDesc from "./portfolioCardDesc";
import { retrieveData } from "@/utils/retrieveData";

export default async function PortfolioCard() {
  const response = await retrieveData("portfolio_content");

  return (
    <div className="w-11/12 m-auto flex justify-center items-center gap-6 flex-wrap">
      {response.map((doc) => (
        <div
          key={doc.id}
          className="max-w-sm h-[500px] border rounded-lg shadow bg-gray-800 border-gray-700"
        >
          <PortfolioCardImage
            href={doc.link}
            src={doc.image}
            value={doc.image}
          />
          <PortfolioCardDesc
            href={doc.link}
            title={doc.title}
            desc={doc.desc}
            tech={doc.tech}
            sourceCode={doc.source_code}
          />
        </div>
      ))}
    </div>
  );
}
