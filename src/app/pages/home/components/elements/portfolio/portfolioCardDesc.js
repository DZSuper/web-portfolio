import Link from "next/link";

export default function PortfolioCardDesc() {
  return (
    <div className="p-5">
      <Link className="mb-2 text-xl font-semibold" href="#">
        Noteworthy technology acquisitions 2021
      </Link>
      <p className="mb-3 text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
      <Link
        href="#"
        className="flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 transition w-max"
      >
        Read more »
      </Link>
    </div>
  );
}
