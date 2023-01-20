import { JSX } from "preact";
import { useContext } from "preact/hooks";
import { WrongPopupActionType } from "../constants/dialog.ts";
import dialogStatusCtx from "../hooks/ctx/dialogStatusCtx.ts";
import { IDialog } from "../intf/context.ts";
import { IWrongPopupProps } from "../intf/props.ts";
import Button from "./Button.tsx";
import Modal from "./Modal.tsx";

/**
 * WrongPopup密码错误提示框
 *
 * @param {IWrongPopupProps} props
 * @return {*}  {JSX.Element}
 * 
 * @example
   <WrongPopup open />
 */
const WrongPopup: (props: IWrongPopupProps) => JSX.Element = (
    props: IWrongPopupProps
): JSX.Element => {
    const { open } = props;
    const dialogCtx: {
        dialogStatus: IDialog;
        setDialogStatus: (action: { type: WrongPopupActionType }) => void;
    } = useContext(dialogStatusCtx);

    const clickConfirm: () => void = (): void =>
        dialogCtx.setDialogStatus({
            type: WrongPopupActionType.Close,
        });

    return (
        <Modal open={open}>
            <div class="text-center">
                <div>密码错误，请重试！</div>
                <Button text="知道了" onClick={clickConfirm} />
            </div>
        </Modal>
    );
};

export default WrongPopup;
