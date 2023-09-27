"use client";
import SkeletonLoading from "@/components/skeletonLoading";
import { getStorage } from "@/utils/getStorage";
import Image from "next/image";

export default function HeroImage() {
  const data = getStorage("hero.png");

  return (
    <div className="md:order-1">
      {data ? (
        <Image src={data} width={275} height={275} alt="Hero Image" />
      ) : (
        <SkeletonLoading size="64" />
      )}
    </div>
  );
}
