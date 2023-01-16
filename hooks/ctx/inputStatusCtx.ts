import { Context, createContext } from "preact";
import { StateUpdater } from "preact/hooks";

const inputStatusCtx: Context<{
    inputStatus: boolean;
    setInputStatus: (() => never) | StateUpdater<boolean>;
}> = createContext({
    siderStatus: false,
    setSiderStatus: (): never => {
        throw new Error("未定义inputCtx");
    },
});

export default inputStatusCtx;
