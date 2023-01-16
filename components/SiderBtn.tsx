import { JSX } from "preact";
import { StateUpdater, useContext } from "preact/hooks";
import Icon from "../components/Icon.tsx";
import siderStatusCtx from "../hooks/ctx/siderStatusCtx.ts";

/**
 * SiderBtn左侧边栏按钮
 * 1. mr-2 cursor-pointer hover:animate-pulse hidden md:block
 *
 * @return {*}  {JSX.Element}
 */
const SiderBtn: () => JSX.Element = (): JSX.Element => {
    const siderCtx: {
        siderStatus: boolean;
        setSiderStatus: StateUpdater<boolean>;
    } = useContext(siderStatusCtx);
    const toggleSiderStatus: () => void = (): void => {
        siderCtx.setSiderStatus(!siderCtx.siderStatus);
    };

    return (
        <div
            class="mr-2 cursor-pointer hover:animate-pulse hidden md:block"
            onClick={toggleSiderStatus}
        >
            {siderCtx.siderStatus ? (
                <Icon src="/left.svg" size={20} />
            ) : (
                <Icon src="/right.svg" size={20} />
            )}
        </div>
    );
};

export default SiderBtn;
