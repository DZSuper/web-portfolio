"use client";
import Image from "next/image";
import SkeletonLoading from "@/components/skeletonLoading";
import { getStorage } from "@/utils/getStorage";

export default function AboutImage() {
  const data = getStorage("about.svg");

  return (
    <div className="md:order-1">
      {data ? (
        <Image
          className="w-72 m-auto md:w-96 md:m-0"
          src={data}
          width={50}
          height={50}
          alt="About Image"
        />
      ) : (
        <SkeletonLoading size="60" />
      )}
    </div>
  );
}
