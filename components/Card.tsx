import { JSX } from "preact";
import { ICardProps } from "../intf/props.ts";
import Avatar from "./Avatar.tsx";

/**
 * Card卡片
 * 1. my-0.5 mx-2 flex clear-both max-w-xl {float-right | float-left}
 * 2. children子组件：m-2 p-2 rounded shadow-neu break-words whitespace-pre-wrap max-w-full
 *    {minHeight: "2rem"}
 * 3. avatar头像：smaller
 *
 * @param {ICardProps} props
 * @return {*}  {JSX.Element}
 */
const Card: (props: ICardProps) => JSX.Element = (
    props: ICardProps
): JSX.Element => {
    const { avatar, children, right = false, noAvatar = false } = props;

    let className = "float-right";
    if (!right) {
        className = "float-left";
    }

    return (
        <div class={`my-0.5 mx-2 flex clear-both max-w-xl ${className}`}>
            {!noAvatar && !right ? (
                <Avatar src={avatar!} size="smaller" circle />
            ) : (
                ""
            )}

            <div
                class="m-2 p-2 rounded shadow-neu break-words whitespace-pre-wrap max-w-full"
                style={{
                    minHeight: "2rem",
                }}
                dangerouslySetInnerHTML={{
                    __html: (children as string)
                        .trim()
                        .replace(/\n/g, "<br />"),
                }}
            >
                {children as JSX.Element}
            </div>

            {!noAvatar && right ? (
                <Avatar src={avatar!} size="smaller" circle />
            ) : (
                ""
            )}
        </div>
    );
};

export default Card;
