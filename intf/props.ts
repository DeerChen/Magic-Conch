import { JSX } from "preact";

type IBtnProps = {
  icon?: string | JSX.Element; // 图标
  text?: string; // 文字
  disabled?: boolean; // 禁用
  onClick: JSX.MouseEventHandler<HTMLButtonElement>; // 点击方法
};

type IIconProps = {
  src: string; // 图片资源路径
  size?: string | number; // 尺寸
};

type ILinkProps = {
  href: string; // 超链接
  children: string | JSX.Element; // 子组件
};

type ITitleProps = {
  logo?: string; // logo
  mainTitle: string | JSX.Element; // 主标题
  subTitle?: string | JSX.Element; // 副标题
  resVisible?: "title" | "subTitle"; // 响应式显隐标题
};

type ICopyrightProps = {
  start: number; // 起始年份
  author: string; // 作者
  href: string; // 超链接
  isGithub?: boolean; // 是否Github页面
};

type IDividerProps = {
  vertical?: boolean; // 垂直与否
  children?: string | JSX.Element; // 中间文本
};

export type {
  IBtnProps,
  ICopyrightProps,
  IDividerProps,
  IIconProps,
  ILinkProps,
  ITitleProps,
};
