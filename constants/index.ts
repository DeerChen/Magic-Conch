import { IMenuItem } from "../intf/menu.ts";

const MENU: Array<IMenuItem> = [
    {
        title: "✨ 友情链接",
        children: [
            { name: "Senkita", href: "https://Senkita.cc" },
            { name: "鸦巢", href: "https://Karasu.moe" },
            { name: "zLib Searcher", href: "https://zLib.吴磊磊.中国" },
        ],
    },
    {
        title: "🚀 引用",
        children: [
            { name: "OpenAI", href: "https://beta.openai.com" },
            { name: "Neumorphism", href: "https://neumorphism.io" },
            { name: "TailwindCSS", href: "https://www.tailwindcss.cn" },
            { name: "ReactJS", href: "https://zh-hans.reactjs.org" },
        ],
    },
    {
        title: "🚧 框架",
        children: [
            { name: "Fresh", href: "https://fresh.deno.dev" },
            { name: "Deno", href: "https://deno.land" },
            { name: "Twind", href: "https://twind.style" },
            { name: "Preact", href: "https://preactjs.com" },
        ],
    },
];

export { MENU };
