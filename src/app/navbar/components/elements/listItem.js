import Link from "next/link";

export default function ListItem({ value, href }) {
  return (
    <li className="hover:text-slate-400 transition">
      <Link href={href}>{value}</Link>
    </li>
  );
}
