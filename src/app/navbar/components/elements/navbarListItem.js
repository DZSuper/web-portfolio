import Link from "next/link";

export default function NavbarListItem({ value, href }) {
  return (
    <li className="hover:text-slate-300 text-slate-500 font-medium transition">
      <Link href={href}>{value}</Link>
    </li>
  );
}
