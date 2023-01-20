import {
    PasswdInputActionType,
    WrongPopupActionType,
} from "../../constants/dialog.ts";
import { IDialog } from "../../intf/context.ts";

const dialogReducer: (
    state: IDialog,
    action: {
        type: PasswdInputActionType | WrongPopupActionType;
    }
) => IDialog = (
    state: IDialog,
    action: {
        type: PasswdInputActionType | WrongPopupActionType;
    }
): IDialog => {
    switch (action.type) {
        // 密码输入弹出框
        case PasswdInputActionType.Popup:
            return {
                ...state,
                passwdInputStatus: true,
            };
        case PasswdInputActionType.Close:
            return {
                ...state,
                passwdInputStatus: false,
            };

        // 密码错误提示框
        case WrongPopupActionType.Popup:
            return {
                ...state,
                wrongPopupStatus: true,
            };
        case WrongPopupActionType.Close:
            return {
                ...state,
                wrongPopupStatus: false,
            };

        default:
            return state;
    }
};

export default dialogReducer;
