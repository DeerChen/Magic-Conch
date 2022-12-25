import IconRefresh from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/refresh.tsx";
import { JSX } from "preact";
import Button from "../components/Button.tsx";
import SubTitle from "../components/SubTitle.tsx";
import Title from "../components/Title.tsx";

/**
 * Header头部
 * 1. flex justify-between items-center mb-2 px-2 py-1 sm:(px-4 py-2) md:(px-8 py-4)
 * 2. 0px 4px 8px #bebebe
 *
 * @return {*}  {JSX.Element}
 */
const Header: () => JSX.Element = (): JSX.Element => {
  const clickRefresh: () => void = (): void => {
    // Todo: 刷新会话
  };

  return (
    <div class="flex justify-between items-center mb-2 px-2 py-1 sm:(px-4 py-2) md:(px-8 py-4) shadow-neu-bottom">
      <Title
        logo="/logo.svg"
        mainTitle="Chatbot"
        subTitle={<SubTitle />}
        resVisible="title"
      />
      <Button
        icon={<IconRefresh class="w-6 m-0.5 inline" />}
        text="刷新"
        onClick={clickRefresh}
      />
    </div>
  );
};

export default Header;
