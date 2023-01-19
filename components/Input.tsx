import { JSX } from "preact";

/**
 * Input输入框
 *
 * @param {JSX.HTMLAttributes<HTMLInputElement>} props
 * @return {*}  {JSX.Element}
 * 
 * @example
   <Input />
 */
const Input: (props: JSX.HTMLAttributes<HTMLInputElement>) => JSX.Element = (
    props: JSX.HTMLAttributes<HTMLInputElement>
): JSX.Element => {
    const { class: _class } = props;

    return (
        <input
            {...props}
            class={`m-1 px-2 py-1 rounded shadow-neu-inner bg-neu focus:border-2 ${_class}`}
            style={{
                outline: "2px solid transparent",
                borderColor: "#34d399",
            }}
        />
    );
};

export default Input;
