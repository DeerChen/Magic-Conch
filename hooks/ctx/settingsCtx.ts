import { Context, createContext } from "preact";
import { ISettings } from "../../intf/context.ts";

const settingsCtx: Context<
  {
    settings: ISettings;
    setSettings: ((action: Partial<ISettings>) => void) | (() => never);
  }
> = createContext({
  settings: {},
  setSettings: (): never => {
    throw new Error("未定义settingsCtx");
  },
});

export default settingsCtx;
