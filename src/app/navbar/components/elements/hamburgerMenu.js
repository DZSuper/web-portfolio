"use client";
import Image from "next/image";

export default function HamburgerMenu({ onSlider }) {
  const handleSlider = () => {
    onSlider();
  };

  return (
    <Image
      className="cursor-pointer z-20 md:hidden"
      onClick={handleSlider}
      src={"menu.svg"}
      width={30}
      height={30}
      alt="menu"
    />
  );
}
