import { IDialog } from "../intf/context.ts";

enum PasswdInputActionType {
    Popup = "PasswdInput POPUP",
    Close = "PasswdInput CLOSE",
}

enum WrongPopupActionType {
    Popup = "WrongPopup POPUP",
    Close = "WrongPopup CLOSE",
}

const initDialogStatusState: IDialog = {
    passwdInputStatus: false,
    wrongPopupStatus: false,
};

export { PasswdInputActionType, initDialogStatusState, WrongPopupActionType };
