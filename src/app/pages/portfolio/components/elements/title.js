import Link from "next/link";

export default function Title({ href, title }) {
  return (
    <>
      {title ? (
        <Link className="text-xl font-semibold" href={href}>
          {title}
        </Link>
      ) : (
        <div className="animate-pulse h-4 w-40 bg-slate-600 rounded-md"></div>
      )}
    </>
  );
}
