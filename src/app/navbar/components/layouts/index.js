"use client";
import { useState } from "react";
import NavbarTitle from "../elements/navbarTitle";
import NavbarList from "../fragments/navbarList";
import NavbarHamburgerMenu from "../elements/navbarHamburgerMenu";

export default function NavbarLayouts() {
  const [slider, setSlider] = useState(false);
  const handleSlider = () => {
    setSlider(!slider);
  };
  const displayNav = slider ? "right-0 flex" : "-right-1/2 hidden";

  return (
    <div className="fixed w-screen flex justify-between items-center px-8 py-2 bg-slate-900 shadow-md shadow-indigo-500/50 md:px-10 lg:px-16">
      <NavbarTitle />
      <NavbarList slider={displayNav} />
      <NavbarHamburgerMenu onSlider={handleSlider} />
    </div>
  );
}
