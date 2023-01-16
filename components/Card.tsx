import { JSX } from "preact";
import { ICardProps } from "../intf/props.ts";
import Avatar from "./Avatar.tsx";

/**
 * Card卡片
 * 1. my-0.5 mx-2 flex clear-both max-w-xl {float-right | float-left}
 * 2. children子组件：m-2 p-1 rounded shadow-neu max-w-screen-sm
 *                  p-2 rounded shadow-neu-inner-sm break-words whitespace-pre-wrap min-h-full
 * 3. avatar头像：smaller
 *
 * @param {ICardProps} props
 * @return {*}  {JSX.Element}
 */
const Card: (props: ICardProps) => JSX.Element = (
    props: ICardProps
): JSX.Element => {
    const { avatar, children, style, right = false } = props;

    let className = "float-right";
    if (!right) {
        className = "float-left";
    }

    return (
        <div class={`my-0.5 mx-2 flex clear-both ${className}`} style={style}>
            {avatar && !right ? (
                <Avatar src={avatar} size="smaller" circle />
            ) : (
                ""
            )}
            <div class="m-2 p-1 rounded shadow-neu max-w-screen-sm">
                <div
                    class="p-2 rounded shadow-neu-inner-sm break-words whitespace-pre-wrap min-h-full"
                    dangerouslySetInnerHTML={
                        typeof children === "string" && !right
                            ? {
                                  __html: (children as string)
                                      .trim()
                                      .replace(/\n/g, "<br />"),
                              }
                            : undefined
                    }
                >
                    {children as JSX.Element}
                </div>
            </div>

            {avatar && right ? (
                <Avatar src={avatar} size="smaller" circle />
            ) : (
                ""
            )}
        </div>
    );
};

export default Card;
