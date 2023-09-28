import Link from "next/link";

export default function PortfolioPageLink() {
  return (
    <Link
      className="border-2 border-blue-700 transition font-semibold mt-10 py-2 px-3 rounded-lg hover:bg-blue-700"
      href="/pages/portfolio"
    >
      VIEW ALL MY PORTFOLIO »
    </Link>
  );
}
