import { JSX } from "preact";
import { ICardProps } from "../intf/props.ts";
import Avatar from "./Avatar.tsx";

/**
 * Card卡片
 * 1. m-2 flex clear-both max-w-xl {float-right | float-left}
 * 2. children子组件：m-2 px-1 rounded shadow-neu break-words
 *    {minHeight: "2rem"}
 * 3. avatar头像：smaller
 *
 * @param {ICardProps} props
 * @return {*}  {JSX.Element}
 */
const Card: (props: ICardProps) => JSX.Element = (
  props: ICardProps,
): JSX.Element => {
  const { avatar, children, right = false } = props;

  let className = "float-right";
  if (!right) {
    className = "float-left";
  }

  return (
    <div class={`m-2 flex clear-both max-w-xl ${className}`}>
      {avatar && !right ? <Avatar src={avatar} size="smaller" circle /> : ""}

      <div
        class="m-2 px-1 rounded shadow-neu break-words"
        style={{
          minHeight: "2rem",
        }}
      >
        {children}
      </div>

      {avatar && right ? <Avatar src={avatar} size="smaller" circle /> : ""}
    </div>
  );
};

export default Card;
