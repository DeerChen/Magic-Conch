import { IPasswd } from "../intf/context.ts";

enum PasswdActionType {
    Input = "INPUT",
    Popup = "POPUP",
    Cancel = "CANCEL",
}

const initPasswdState: IPasswd = {
    openDialog: false,
    passwd: "",
};

export { PasswdActionType, initPasswdState };
