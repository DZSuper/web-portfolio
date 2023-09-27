"use client";
import { getStorage } from "@/utils/getStorage";
import Image from "next/image";

export default function HeroImage() {
  const data = getStorage("hero.png");

  return (
    <div className="md:order-1">
      {data ? (
        <Image src={data} width={275} height={275} alt="Hero Image" />
      ) : (
        <div className="animate-pulse h-64 w-64 bg-slate-600 rounded-md"></div>
      )}
    </div>
  );
}
