import { JSX } from "preact";
import { ITitleProps } from "../intf/props.ts";
import Icon from "./Icon.tsx";

/**
 * Title题头
 *
 * @param {ITitleProps} props
 * @return {*}  {JSX.Element}
 * 
 * @example
   <Title
     class="hidden sm:block"
     logo="/logo.svg"
     mainTitle="标题"
     subTitle="副标题"
     resVisible=“title"
   />
 */
const Title: (props: ITitleProps) => JSX.Element = (
    props: ITitleProps
): JSX.Element => {
    const { class: _class, logo, mainTitle, subTitle, resVisible } = props;

    let titleClass = "";
    let subTitleClass = "";

    switch (resVisible) {
        case "title":
            titleClass = "hidden sm:block";
            break;
        case "subTitle":
            subTitleClass = "hidden sm:block";
    }

    return (
        <div class={`m-1 px-1 flex-center ${_class}`}>
            {logo ? <Icon src={logo} size={48} /> : ""}

            <div class={`${titleClass}`}>
                <div class="font-bold text-xl">{mainTitle}</div>
                <div class={`inline text-sm ${subTitleClass}`}>{subTitle}</div>
            </div>
        </div>
    );
};

export default Title;
