"use client";
import storage from "@/utils/firebase";
import { getDownloadURL, ref } from "firebase/storage";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HamburgerMenu({ onSlider }) {
  const [menu, setMenu] = useState();

  const handleSlider = () => {
    onSlider();
  };

  useEffect(() => {
    getDownloadURL(ref(storage, "menu.svg"))
      .then((url) => {
        fetch(url)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.blob();
          })
          .then((blob) => setMenu(URL.createObjectURL(blob)))
          .catch((error) => {
            console.error("Fetch Error:", error);
          });
      })
      .catch((error) => {
        console.error("Firebase Storage Error:", error);
      });
  }, []);

  if (!menu) {
    return <span>...</span>;
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
