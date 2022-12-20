type ISubItem = {
  name: string; // 名称
  href: string; // 指向
};

type IMenuItem = {
  title: string; // 目录名
  children: Array<ISubItem>; // 目录子项
};

export type { IMenuItem, ISubItem };
