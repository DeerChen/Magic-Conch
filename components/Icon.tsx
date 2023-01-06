import { JSX } from "preact";
import { IIconProps } from "../intf/props.ts";

/**
 * Icon图标
 * 1. m-1 inline
 *
 * @param {IIconProps} props
 * @return {*}  {JSX.Element}
 */
const Icon: (props: IIconProps) => JSX.Element = (
  props: IIconProps,
): JSX.Element => {
  const { class: _class, src, size } = props;

  return <img class={`m-1 inline ${_class}`} width={size} src={src} />;
};

export default Icon;
