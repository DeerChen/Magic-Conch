import { JSX } from "preact";

type IBtnProps = {
    class?: string; // 类名
    icon?: string | JSX.Element; // 图标
    text?: string; // 文字
    disabled?: boolean; // 禁用
    onClick: JSX.MouseEventHandler<HTMLButtonElement>; // 点击方法
};

type IIconProps = {
    class?: string; // 类名
    src: string; // 图片资源路径
    size?: string | number; // 尺寸
};

type ILinkProps = {
    href: string; // 超链接
    children: string | JSX.Element; // 子组件
};

type ITitleProps = {
    class?: string; // 类名
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

type IAvatarProps = {
    src: string; // 图片资源路径
    circle?: boolean; // 是否圆形
    size?: "smaller" | "normal" | "larger"; // 尺寸
};

type ICardProps = {
    children: string | JSX.Element; // 子组件
    avatar?: string; // 头像
    right?: boolean; // 右侧悬挂
    style?: JSX.CSSProperties; // 样式
};

type IModalProps = {
    open: boolean; // 开启状态
    children: string | JSX.Element; // 子组件
};

type IPasswdInputProps = {
    open: boolean; // 开启状态
    apiKey: string; // API密钥
    encryptedPasswd: string; // 加密过的密码散列值
};

type ILayoutProps = {
    apiKey: string; // API密钥
    encryptedPasswd: string; // 加密过的密码散列值
};

export type {
    IAvatarProps,
    IBtnProps,
    ICardProps,
    ICopyrightProps,
    IDividerProps,
    IIconProps,
    ILayoutProps,
    ILinkProps,
    IModalProps,
    IPasswdInputProps,
    ITitleProps,
};
