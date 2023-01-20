import { JSX } from "preact";

/**
 * TextArea输入框
 *
 * @param {JSX.HTMLAttributes<HTMLInputElement>} props
 * @return {*}  {JSX.Element}
 * 
 * @example
   <TextArea />
 */
const TextArea: (
    props: JSX.HTMLAttributes<HTMLTextAreaElement>
) => JSX.Element = (
    props: JSX.HTMLAttributes<HTMLTextAreaElement>
): JSX.Element => {
    const { class: _class } = props;

    return (
        <textarea
            {...props}
            rows={1}
            class={`m-1 px-2 py-1 rounded shadow-neu-inner bg-neu focus:border-2 ${_class}`}
            style={{
                outline: "2px solid transparent",
                borderColor: "#34d399",
            }}
        />
    );
};

export default TextArea;
