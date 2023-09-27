import Image from "next/image";
import Link from "next/link";

export default function PortfolioCardImage({ href, src, value }) {
  return (
    <Link href={href}>
      <Image
        className="rounded-t-lg"
        width={100}
        height={100}
        src={src}
        alt={value}
      />
    </Link>
  );
}
