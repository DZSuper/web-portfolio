import { retrieveData } from "@/utils/retrieveData";
import Cta from "../elements/cta";
import Desc from "../elements/desc";
import ImageCard from "../elements/imageCard";
import Tech from "../elements/tech";
import Title from "../elements/title";

export default async function Card() {
  const response = await retrieveData("portfolio_content");

  return (
    <div className="px-6 py-20 justify-center flex gap-4 flex-wrap">
      {response.map((doc) => (
        <div
          key={doc.id}
          className="max-w-sm h-[500px] border rounded-lg shadow bg-gray-800 border-gray-700"
        >
          <ImageCard src={doc.image} href={doc.link} value={doc.title} />
          <div className="p-4 h-[57%] flex flex-col justify-between gap-2">
            <Title href={doc.link} title={doc.title} />
            <Desc desc={doc.desc} />
            <Tech tech={doc.tech} />
            <Cta href={doc.link} sourceCode={doc.source_code} />
          </div>
        </div>
      ))}
    </div>
  );
}
