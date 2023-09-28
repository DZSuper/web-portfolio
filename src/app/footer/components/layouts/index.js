import Copyright from "../elements/copyright";
import Email from "../elements/email";
import Github from "../elements/github";

export default function Layouts() {
  return (
    <div className="text-center font-light mt-20 mb-4 pt-4 tracking-normal border-t-2 border-t-slate-600 text-slate-500 flex flex-col gap-1 md:flex-row md:justify-around">
      <Github />
      <Email />
      <Copyright />
    </div>
  );
}
