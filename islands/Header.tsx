import IconRefresh from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/refresh.tsx";
import { JSX } from "preact";
import { useContext } from "preact/hooks";
import Button from "../components/Button.tsx";
import Title from "../components/Title.tsx";
import { ConvoActionType } from "../constants/convo.ts";
import convoArrCtx from "../hooks/ctx/convoArrCtx.ts";
import { ICardProps } from "../intf/props.ts";

/**
 * Header头部
 * 1. flex-sper mb-2 px-2 py-1 sm:(px-4 py-2) md:(px-8 py-4)
 * 2. 0px 4px 8px #bebebe
 *
 * @return {*}  {JSX.Element}
 */
const Header: () => JSX.Element = (): JSX.Element => {
    const convoCtx: {
        convoArr: Array<ICardProps>;
        setConvoArr: (action: { type: string; payload?: ICardProps }) => void;
    } = useContext(convoArrCtx);

    const clickRefresh: () => void = (): void => {
        convoCtx.setConvoArr({ type: ConvoActionType.Refresh });
    };

    return (
        <div class="flex-sper mb-2 px-2 py-1 sm:(px-4 py-2) md:(px-8 py-4) shadow-neu-bottom">
            <Title
                logo="/logo.svg"
                mainTitle="Magic Conch 🐚"
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
