import { Context, createContext } from "preact";
import { PasswdActionType } from "../../constants/passwd.ts";
import { IPasswd } from "../../intf/context.ts";

const passwdDialogCtx: Context<{
    passwdDialog: IPasswd;
    setPasswdDialog:
        | ((action: {
              type: PasswdActionType;
              payload?: Partial<IPasswd>;
          }) => void)
        | (() => never);
}> = createContext({
    passwdDialog: {},
    setPasswdDialog: (): never => {
        throw new Error("未定义passwdDialogCtx");
    },
});

export default passwdDialogCtx;
