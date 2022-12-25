import { JSX } from "preact";
import { IBtnProps } from "../intf/props.ts";
import Icon from "./Icon.tsx";

/**
 * Button按钮
 * 1. rounded m-2 px-1 shadow-neu hover:bg-black disabled:(opacity-50 cursor-not-allowed) {active:shadow-neu-inner}
 * 2. icon图标：w-6
 * 3. text文字：m-1 align-middle {hidden sm:inline-block}
 *
 * @param {IBtnProps} props
 * @return {*}  {JSX.Element}
 */
const Button: (
  props: IBtnProps,
) => JSX.Element = (
  props: IBtnProps,
): JSX.Element => {
  const { icon, text, disabled, onClick } = props;

  let className = "active:shadow-neu-inner";
  let textClass = "";

  if (icon) {
    textClass = "hidden sm:inline-block";
  }

  if (disabled) {
    className = "";
  }

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      class={`rounded m-2 px-1 shadow-neu hover:bg-black disabled:(opacity-50 cursor-not-allowed) ${className}`}
    >
      {typeof icon === "string"
        ? <Icon size={24} src={icon as string} />
        : <>{icon}</>}

      {text
        ? (
          <div
            class={`m-1 align-middle ${textClass}`}
          >
            {text}
          </div>
        )
        : ""}
    </button>
  );
};

export default Button;
