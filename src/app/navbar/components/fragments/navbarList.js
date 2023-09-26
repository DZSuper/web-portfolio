import ListItem from "../elements/listItem";

export default function NavbarList({ slider }) {
  return (
    <ul
      className={`absolute bg-slate-800 h-screen w-1/2 top-0 bottom-0 flex-col items-center justify-evenly -z-10 ${slider} md:flex md:static md:flex-row md:w-auto md:h-auto md:z-0 md:bg-transparent md:gap-6`}
    >
      <ListItem href={"#home"} value={"Home"} />
      <ListItem href={"#about"} value={"About"} />
      <ListItem href={"#skill"} value={"Skill"} />
      <ListItem href={"#experience"} value={"Experience"} />
      <ListItem href={"/portfolio"} value={"Portfolio"} />
      <ListItem href={"#contact"} value={"Contact"} />
    </ul>
  );
}
