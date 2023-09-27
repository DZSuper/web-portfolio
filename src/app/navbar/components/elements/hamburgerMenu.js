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

  return (
    <>
      {menu ? (
        <Image
          className="cursor-pointer z-20 md:hidden"
          onClick={handleSlider}
          src={menu}
          width={30}
          height={30}
          alt="menu"
        />
      ) : (
        <SkeletonLoading size="7" />
      )}
    </>
  );
}
