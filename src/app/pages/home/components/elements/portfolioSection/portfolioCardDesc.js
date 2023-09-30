import Link from "next/link";

export default function PortfolioCardDesc({
  href,
  title,
  desc,
  tech,
  sourceCode,
}) {
  return (
    <div className="p-4 h-[57%] flex flex-col justify-between gap-2">
      {title ? (
        <Link className="text-xl font-semibold" href={href}>
          {title}
        </Link>
      ) : (
        <div className="animate-pulse h-4 w-40 bg-slate-600 rounded-md"></div>
      )}

      {desc ? (
        <p className="text-sm tracking-normal text-gray-400">{desc}</p>
      ) : (
        <>
          <div className="animate-pulse h-4 w-full bg-slate-600 rounded-md"></div>
          <div className="animate-pulse h-4 w-40 bg-slate-600 rounded-md"></div>
          <div className="animate-pulse h-4 w-28 bg-slate-600 rounded-md"></div>
        </>
      )}

      {tech ? (
        <p className="text-sm tracking-normal text-gray-400">
          Tech Stack : <span className="font-medium">{tech}</span>
        </p>
      ) : (
        <>
          <div className="animate-pulse h-4 w-40 bg-slate-600 rounded-md"></div>
        </>
      )}

      <div className="flex justify-between items-center">
        <Link
          target="_blank"
          href={href}
          className="flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 transition w-max"
        >
          VISIT SITE »
        </Link>
        <Link
          target="_blank"
          className="text-xs border font-medium border-blue-700 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          href={sourceCode}
        >
          SOURCE CODE
        </Link>
      </div>
    </div>
  );
}
