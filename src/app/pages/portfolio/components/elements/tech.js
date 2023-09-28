export default function Tech({ tech }) {
  return (
    <>
      {tech ? (
        <p className="text-sm tracking-normal text-gray-400">
          Tech Stack : <span className="font-medium">{tech}</span>
        </p>
      ) : (
        <>
          <div className="animate-pulse h-4 w-40 bg-slate-600 rounded-md"></div>
        </>
      )}
    </>
  );
}
