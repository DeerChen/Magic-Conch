import { Context, createContext } from "preact";
import { StateUpdater } from "preact/hooks";

const siderStatusCtx: Context<
  {
    siderStatus: boolean;
    setSiderStatus: (() => never) | StateUpdater<boolean>;
  }
> = createContext({
  siderStatus: false,
  setSiderStatus: (): never => {
    throw new Error("未定义siderStatusCtx");
  },
});

export default siderStatusCtx;
