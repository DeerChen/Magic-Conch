import { IMenuItem } from "../intf/menu.ts";

const MENU: Array<IMenuItem> = [
  {
    title: "引用",
    children: [
      { name: "OpenAI", href: "https://beta.openai.com" },
      { name: "Neumorphism.io", href: "https://neumorphism.io" },
    ],
  },
  {
    title: "友情链接",
    children: [
      { name: "Senkita", href: "https://Senkita.cc" },
      { name: "鸦巢", href: "https://Karasu.moe" },
      { name: "zLib Searcher", href: "https://zLib.吴磊磊.中国" },
    ],
  },
];

export { MENU };
