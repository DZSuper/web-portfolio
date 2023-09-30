"use client";
import ScrollspyNav from "react-scrollspy-nav";
import NavbarListItem from "../elements/navbarListItem";

export default function NavbarList({ slider }) {
  return (
    <ScrollspyNav
      scrollTargetIds={[
        "home",
        "about",
        "skill",
        "experience",
        "portfolio",
        "contact",
      ]}
      offset={0}
      activeNavClass="text-slate-300"
      scrollDuration="500"
      headerBackground="true"
    >
      <ul
        className={`absolute bg-slate-800 h-screen w-1/2 top-0 bottom-0 flex-col items-center justify-evenly z-10 ${slider} md:flex md:static md:flex-row md:w-auto md:h-auto md:bg-transparent md:gap-6`}
      >
        <NavbarListItem href={"#home"} value={"Home"} />
        <NavbarListItem href={"#about"} value={"About"} />
        <NavbarListItem href={"#skill"} value={"Skill"} />
        <NavbarListItem href={"#experience"} value={"Experience"} />
        <NavbarListItem href={"#portfolio"} value={"Portfolio"} />
        <NavbarListItem href={"#contact"} value={"Contact"} />
      </ul>
    </ScrollspyNav>
  );
}
