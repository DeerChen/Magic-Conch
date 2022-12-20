import { JSX } from "preact";
import { IDividerProps } from "../intf/props.ts";

/**
 * Divider分割线
 * 1. flex justify-center items-center m-1 {inline}
 * 2. 分割线：rounded inline border border-light-gray {w-full h-0} {w-0 h-full}
 * 3. 文本：inline min-w-fit
 *
 * @param {IDividerProps} props
 * @return {*}  {JSX.Element}
 */
const Divider: (props: IDividerProps) => JSX.Element = (
  props: IDividerProps,
): JSX.Element => {
  const { children, vertical = false } = props;

  let className = "";
  let lineClass = "w-full h-0";
  if (vertical) {
    className = "inline";
    lineClass = "w-0 h-full";
  }

  return (
    <div
      class={`flex justify-center items-center m-1 ${className}`}
    >
      <div
        class={`rounded inline border border-light-gray ${lineClass}`}
      />

      {vertical ? "" : (
        <>
          {typeof children === "string"
            ? <div class="inline min-w-fit">{children}</div>
            : <>{children}</>}

          <div
            class={`rounded inline border border-light-gray ${lineClass}`}
          />
        </>
      )}
    </div>
  );
};

export default Divider;
