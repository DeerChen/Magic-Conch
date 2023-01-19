import { JSX } from "preact";
import { IIconProps } from "../intf/props.ts";

/**
 * Icon图标
 *
 * @param {IIconProps} props
 * @return {*}  {JSX.Element}
 * 
 * @example
   <Icon
     class="hidden sm:block"
     src="/logo.svg"
     size={24}
   />
 */
const Icon: (props: IIconProps) => JSX.Element = (
    props: IIconProps
): JSX.Element => {
    const { class: _class, src, size } = props;

    return <img class={`m-1 inline ${_class}`} width={size} src={src} />;
};

export default Icon;
