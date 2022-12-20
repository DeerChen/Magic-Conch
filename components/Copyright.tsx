import BrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/brand-github.tsx";
import { JSX } from "preact";
import { ICopyrightProps } from "../intf/props.ts";
import Divider from "./Divider.tsx";
import Link from "./Link.tsx";

/**
 * Copyright版权
 * 1. m-1 text-center min-w-xs
 *
 * @param {ICopyrightProps} props
 * @return {*}  {JSX.Element}
 */
const Copyright: (props: ICopyrightProps) => JSX.Element = (
  props: ICopyrightProps,
): JSX.Element => {
  const { start, href, author, isGithub = true } = props;

  const year: number = new Date().getFullYear();

  return (
    <div class="m-1 text-center min-w-xs">
      Copyright &copy; {start} - {year}
      <Divider vertical />
      <div class="inline">
        Powered by
        <Link href={href}>
          <>
            {isGithub ? <BrandGithub class="inline" /> : ""}
            {author}
          </>
        </Link>
      </div>
    </div>
  );
};

export default Copyright;
