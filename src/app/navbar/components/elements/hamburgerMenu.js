"use client";
import SkeletonLoading from "@/components/skeletonLoading";
import { retrieveStorage } from "@/utils/retrieveStorage";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HamburgerMenu({ onSlider }) {
  const [menu, setMenu] = useState();

  const handleSlider = () => {
    onSlider();
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await retrieveStorage("menu.svg");
        setMenu(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  if (!menu) {
    return <SkeletonLoading size="7" />;
  }

  return (
    <Image
      className="cursor-pointer md:hidden"
      onClick={handleSlider}
      src={menu}
      width={30}
      height={30}
      alt="menu"
    />
  );
}
