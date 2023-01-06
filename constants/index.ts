import { IModel } from "../intf/index.ts";
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

const TOKEN = "API_Key";

const MODEL: IModel = {
  "text-davinci-003": {
    desc:
      "最有能力，可以完成其他模型所能完成的任务，能够理解复杂意图和因果关系。",
    "max-token": 4000,
  },
  "text-curie-001": {
    desc:
      "能力稍逊于text-davinci-003，擅长文本情感、复杂分类、语言翻译及问答，且速度更快。",
    "max-token": 2048,
  },
  "text-babbage-001": {
    desc: "可以速度非常快地完成简单任务。",
    "max-token": 2048,
  },
  "text-ada-001": {
    desc: "可以完成非常简单的任务，速度最快。",
    "max-token": 2048,
  },
  "code-davinci-002": {
    desc: "尤为擅长将自然语言翻译成代码。",
    "max-token": 8000,
  },
  "code-cushman-001": {
    desc: "能力稍逊于code-davinci-002，但速度更快。",
    "max-token": 2048,
  },
};

export { MENU, MODEL, TOKEN };
