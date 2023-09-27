"use client";
import { getStorage } from "@/utils/getStorage";
import Image from "next/image";

export default function HamburgerMenu({ onSlider }) {
  const data = getStorage("menu.svg");

  const handleSlider = () => {
    onSlider();
  };

  return (
    <>
      {data ? (
        <Image
          className="cursor-pointer z-20 md:hidden"
          onClick={handleSlider}
          src={data}
          width={30}
          height={30}
          alt="menu"
        />
      ) : (
        <div className="animate-pulse h-7 w-7 bg-slate-600 rounded-md"></div>
      )}
    </>
  );
}
