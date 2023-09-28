"use client";
import { getStorage } from "@/utils/getStorage";
import Image from "next/image";
import Link from "next/link";

export default function ImageCard({ src, href, value }) {
  const image = getStorage(`/portfolio/${src}`);

  return (
    <Link href={href}>
      {image ? (
        <Image
          className="rounded-t-lg w-auto"
          width={100}
          height={100}
          src={image}
          alt={value}
        />
      ) : (
        <div className="animate-pulse h-56 w-full bg-slate-600 rounded-md"></div>
      )}
    </Link>
  );
}
