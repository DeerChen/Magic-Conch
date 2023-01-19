import IconRefresh from "icons/tsx/refresh.tsx";
import { JSX } from "preact";
import { StateUpdater, useContext } from "preact/hooks";
import Button from "../components/Button.tsx";
import Title from "../components/Title.tsx";
import { ConvoActionType } from "../constants/convo.ts";
import convoArrCtx from "../hooks/ctx/convoArrCtx.ts";
import inputStatusCtx from "../hooks/ctx/inputStatusCtx.ts";
import siderStatusCtx from "../hooks/ctx/siderStatusCtx.ts";
import { ICardProps } from "../intf/props.ts";

/**
 * Header头部
 *
 * @return {*}  {JSX.Element}
 * 
 * @example
   <Header />
 */
const Header: () => JSX.Element = (): JSX.Element => {
    const convoCtx: {
        convoArr: Array<ICardProps>;
        setConvoArr: (action: { type: string; payload?: ICardProps }) => void;
    } = useContext(convoArrCtx);
    const inputCtx: {
        inputStatus: boolean;
        setInputStatus: StateUpdater<boolean>;
    } = useContext(inputStatusCtx);
    const siderCtx: {
        siderStatus: boolean;
        setSiderStatus: StateUpdater<boolean>;
    } = useContext(siderStatusCtx);

    const toggleSiderStatus: () => void = (): void => {
        siderCtx.setSiderStatus(!siderCtx.siderStatus);
    };

    const clickRefresh: () => void = (): void => {
        convoCtx.setConvoArr({ type: ConvoActionType.Refresh });
        inputCtx.setInputStatus(false);
    };

    return (
        <div class="flex-sper mb-2 px-2 py-1 sm:(px-4 py-2) md:(px-8 py-4) shadow-neu-bottom">
            <div class="cursor-pointer" onClick={toggleSiderStatus}>
                <Title
                    logo="/logo.svg"
                    mainTitle="Magic Conch 🐚"
                    resVisible="title"
                />
            </div>

            <Button
                icon={<IconRefresh class="w-6 m-0.5 inline" />}
                text="刷新"
                onClick={clickRefresh}
            />
        </div>
    );
};

export default Header;
