import { JSX } from "preact";
import { IAvatarProps } from "../intf/props.ts";

/**
 * Avatar头像
 * 1. 外层：inline-block m-2 p-0.5 shadow-neu {rounded-full | rounded} {w-8 h-8 | w-10 h-10 | w-12 h-12}
 * 2. 里层：p-0.5 flex-center shadow-neu-inner-sm overflow-hidden {rounded-full | rounded} {w-8 h-8 | w-10 h-10 | w-12 h-12}
 *
 * @param {IAvatarProps} props
 * @return {*}  {JSX.Element}
 */
const Avatar: (props: IAvatarProps) => JSX.Element = (
  props: IAvatarProps,
): JSX.Element => {
  const { src, circle = false, size = "normal" } = props;

  let className = "w-10 h-10";
  let innerClass = "w-9 h-9";

  switch (size) {
    case "smaller":
      className = "w-8 h-8";
      innerClass = "w-7 h-7";
      break;
    case "larger":
      className = "w-12 h-12";
      innerClass = "w-11 h-11";
      break;
  }
  if (circle) {
    className = `rounded-full ${className}`;
    innerClass = `rounded-full ${innerClass}`;
  } else {
    className = `rounded ${className}`;
    innerClass = `rounded ${innerClass}`;
  }

  return (
    <div
      class={`inline-block m-2 p-0.5 shadow-neu ${className}`}
    >
      <div
        class={`p-0.5 flex-center shadow-neu-inner-sm overflow-hidden ${innerClass}`}
      >
        <img src={src} />
      </div>
    </div>
  );
};

export default Avatar;
