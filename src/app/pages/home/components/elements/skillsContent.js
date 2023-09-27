"use client";
import { getStorage } from "@/utils/getStorage";
import SkillImageLogo from "./skillImageLogo";

export default function SkillsContent() {
  const html = getStorage("/logo/html.svg");
  const css = getStorage("/logo/css.svg");
  const sass = getStorage("/logo/sass.svg");
  const bootstrap = getStorage("/logo/bootstrap.svg");
  const tailwind = getStorage("/logo/tailwind.svg");
  const javascript = getStorage("/logo/javascript.svg");
  const jquery = getStorage("/logo/jquery.svg");
  const reactjs = getStorage("/logo/reactjs.svg");
  const nextjs = getStorage("/logo/nextjs.svg");
  const nodejs = getStorage("/logo/nodejs.svg");
  const expressjs = getStorage("/logo/expressjs.svg");
  const php = getStorage("/logo/php.svg");
  const laravel = getStorage("/logo/laravel.svg");
  const codeigniter = getStorage("/logo/codeigniter.svg");
  const mysql = getStorage("/logo/mysql.svg");
  const mongodb = getStorage("/logo/mongodb.svg");
  const git = getStorage("/logo/git.svg");
  const webpack = getStorage("/logo/webpack.svg");

  return (
    <div className="mx-8 grid grid-cols-3 gap-6 md:grid-cols-6 md:mx-28 lg:mx-52">
      <SkillImageLogo value="HTML" data={html} />
      <SkillImageLogo value="CSS" data={css} />
      <SkillImageLogo value="SASS" data={sass} />
      <SkillImageLogo value="BOOTSTRAP" data={bootstrap} />
      <SkillImageLogo value="TAILWIND" data={tailwind} />
      <SkillImageLogo value="JAVASCRIPT" data={javascript} />
      <SkillImageLogo value="JQUERY" data={jquery} />
      <SkillImageLogo value="REACTJS" data={reactjs} />
      <SkillImageLogo value="NEXTJS" data={nextjs} />
      <SkillImageLogo value="NODEJS" data={nodejs} />
      <SkillImageLogo value="EXPRESSJS" data={expressjs} />
      <SkillImageLogo value="PHP" data={php} />
      <SkillImageLogo value="LARAVEL" data={laravel} />
      <SkillImageLogo value="CODEIGNITER" data={codeigniter} />
      <SkillImageLogo value="MYSQL" data={mysql} />
      <SkillImageLogo value="MONGODB" data={mongodb} />
      <SkillImageLogo value="GIT" data={git} />
      <SkillImageLogo value="WEBPACK" data={webpack} />
    </div>
  );
}
