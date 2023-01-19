import { JSX } from "preact";
import { IBtnProps } from "../intf/props.ts";
import Icon from "./Icon.tsx";

/**
 * Button按钮
 *
 * @param {IBtnProps} props
 * @return {*}  {JSX.Element}
 * 
 * @example
   <Button
     class="shadow active:shadow-inner"
     icon="/logo.svg"
     text="按钮"
     disabled
     onClick={()=>void}
   />
 */
const Button: (props: IBtnProps) => JSX.Element = (
    props: IBtnProps
): JSX.Element => {
    const { class: _class, icon, text, disabled, onClick } = props;

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
            class={`rounded m-2 px-1 shadow-neu hover:bg-black disabled:(opacity-50 cursor-not-allowed) ${className} ${_class}`}
        >
            {typeof icon === "string" ? (
                <Icon size={24} src={icon as string} />
            ) : (
                <>{icon}</>
            )}

            {text ? (
                <div class={`m-1 align-middle ${textClass}`}>{text}</div>
            ) : (
                ""
            )}
        </button>
    );
};

export default Button;
