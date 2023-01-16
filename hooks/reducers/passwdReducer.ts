import { PasswdActionType } from "../../constants/passwd.ts";
import { IPasswd } from "../../intf/context.ts";

const passwdReducer: (
    state: IPasswd,
    action: { type: PasswdActionType; payload?: Partial<IPasswd> }
) => IPasswd = (
    state: IPasswd,
    action: { type: PasswdActionType; payload?: Partial<IPasswd> }
): IPasswd => {
    switch (action.type) {
        case PasswdActionType.Input: {
            return {
                ...state,
                ...action.payload,
            };
        }
        case PasswdActionType.Popup:
            return {
                ...state,
                openDialog: true,
            };
        case PasswdActionType.Cancel:
            return {
                ...state,
                openDialog: false,
            };
        default:
            return state;
    }
};

export default passwdReducer;
