import { JSX } from "preact";
import { IDividerProps } from "../intf/props.ts";

/**
 * Divider分割线
 *
 * @param {IDividerProps} props
 * @return {*}  {JSX.Element}
 * 
 * @example
   <Divider vertical={false}>分割线</Divider>
 */
const Divider: (props: IDividerProps) => JSX.Element = (
    props: IDividerProps
): JSX.Element => {
    const { children, vertical = false } = props;

    let className = "";
    let lineClass = "w-full h-0";
    if (vertical) {
        className = "inline-block";
        lineClass = "w-0 h-full";
    }

    return (
        <div class={`flex-center m-1 ${className}`}>
            <div
                class={`rounded inline border border-light-gray ${lineClass}`}
            />

            {vertical ? (
                ""
            ) : (
                <>
                    {typeof children === "string" ? (
                        <div class="inline min-w-fit">{children}</div>
                    ) : (
                        <div class="whitespace-nowrap">{children}</div>
                    )}

                    <div
                        class={`rounded inline border border-light-gray ${lineClass}`}
                    />
                </>
            )}
        </div>
    );
};

export default Divider;
