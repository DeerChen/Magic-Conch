import { JSX } from "preact";
import { ITitleProps } from "../intf/props.ts";
import Icon from "./Icon.tsx";

/**
 * Title题头
 * 1. m-1 px-1 flex-center
 * 2. Icon图标：w-12
 * 3. 标题：{hidden sm:block}
 * 4. mainTitle主标题：font-bold text-xl
 * 5. subTitle副标题：inline text-sm {hidden sm:block}
 *
 * @param {ITitleProps} props
 * @return {*}  {JSX.Element}
 */
const Title: (props: ITitleProps) => JSX.Element = (
  props: ITitleProps,
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
        <div class="font-bold text-xl">
          {mainTitle}
        </div>
        <div class={`inline text-sm ${subTitleClass}`}>
          {subTitle}
        </div>
      </div>
    </div>
  );
};

export default Title;
