export default function PortfolioDesc({ desc }) {
  return (
    <>
      {desc ? (
        <p className="text-sm tracking-normal text-gray-400">{desc}</p>
      ) : (
        <>
          <div className="animate-pulse h-4 w-full bg-slate-600 rounded-md"></div>
          <div className="animate-pulse h-4 w-40 bg-slate-600 rounded-md"></div>
          <div className="animate-pulse h-4 w-28 bg-slate-600 rounded-md"></div>
        </>
      )}
    </>
  );
}
