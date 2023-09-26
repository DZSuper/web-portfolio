"use client";
import NavbarList from "../fragments/navbarList";
import Title from "../elements/title";
import HamburgerMenu from "../elements/hamburgerMenu";
import { useState } from "react";

export default function Layouts() {
  const [slider, setSlider] = useState(false);
  const handleSlider = () => {
    setSlider(!slider);
  };
  const displayNav = slider ? "right-0 flex" : "-right-1/2 hidden";

  return (
    <div className="flex justify-between items-center px-8 py-2 bg-slate-900 shadow-md shadow-indigo-500/50 md:px-10 lg:px-16">
      <Title />
      <NavbarList slider={displayNav} />
      <HamburgerMenu onSlider={handleSlider} />
    </div>
  );
}
