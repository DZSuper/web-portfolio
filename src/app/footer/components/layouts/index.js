import FooterCopyright from "../elements/footerCopyright";
import FooterEmail from "../elements/footerEmail";
import FooterGithub from "../elements/footerGithub";

export default function FooterLayouts() {
  return (
    <div className="text-center font-light mt-20 mb-4 pt-4 tracking-normal border-t-2 border-t-slate-600 text-slate-500 flex flex-col gap-1 md:flex-row md:justify-around">
      <FooterGithub />
      <FooterEmail />
      <FooterCopyright />
    </div>
  );
}
