import Link from "next/link";

export default function Cta({ href, sourceCode }) {
  return (
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
  );
}
