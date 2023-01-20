import { Context, createContext } from "preact";
import {
    PasswdInputActionType,
    WrongPopupActionType,
} from "../../constants/dialog.ts";
import { IDialog } from "../../intf/context.ts";

const dialogStatusCtx: Context<{
    dialogStatus: IDialog;
    setDialogStatus:
        | ((action: {
              type: PasswdInputActionType | WrongPopupActionType;
          }) => void)
        | (() => never);
}> = createContext({
    dialogStatus: {},
    setDialogStatus: (): never => {
        throw new Error("未定义dialogStatusCtx");
    },
});

export default dialogStatusCtx;
