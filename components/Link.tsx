import { JSX } from "preact";
import { ILinkProps } from "../intf/props.ts";

/**
 * HyperLink超链接
 * 1. rounded m-1 p-1 text-green-400 shadow-neu-inner-sm text-center
 *
 * @param {ILinkProps} props
 * @return {*}  {JSX.Element}
 */
const Link: (props: ILinkProps) => JSX.Element = (
  props: ILinkProps,
): JSX.Element => {
  const { href, children } = props;

  return (
    <a
      class={"rounded m-1 p-1 text-green-400 shadow-neu-inner-sm text-center"}
      href={href}
      target="_blank"
    >
      {children}
    </a>
  );
};

export default Link;
