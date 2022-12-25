import { JSX } from "preact";
import Copyright from "../components/Copyright.tsx";
import Divider from "../components/Divider.tsx";
import Link from "../components/Link.tsx";
import SubTitle from "../components/SubTitle.tsx";
import Title from "../components/Title.tsx";
import { MENU } from "../constants/index.ts";
import { IMenuItem, ISubItem } from "../intf/menu.ts";

/**
 * Footer页脚
 * 1. text-xs mt-2 px-8 py-4 gap-0 flex flex-col md:(flex-row gap-8)
 * 3. 项目名及版权：m-1 flex-1
 * 4. 链接目录：mt-4
 * 5. 目录名：font-bold
 * 6. 子项名：list-circle
 * 7. 子项链接：m-3
 *
 * @return {*}  {JSX.Element}
 */
const Footer: () => JSX.Element = (): JSX.Element => {
  return (
    <div class="text-xs mt-2 px-8 py-4 gap-0 flex flex-col md:(flex-row gap-8) shadow-neu-top">
      <div class="m-1 flex-1">
        <Title
          logo="/logo.svg"
          mainTitle="Chatbot"
          subTitle={<SubTitle />}
          resVisible="subTitle"
        />

        <Divider>
          <Copyright
            start={2022}
            author="Senkita"
            href="https://github.com/Senkita"
          />
        </Divider>
      </div>

      {MENU.map(({ title, children }: IMenuItem): JSX.Element => (
        <div class="mt-4" key={title}>
          <div class="font-bold">{title}</div>

          <ul class="list-circle">
            {children.map(({ name, href }: ISubItem): JSX.Element => (
              <li class="m-3" key={name}>
                <Link href={href}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Footer;
