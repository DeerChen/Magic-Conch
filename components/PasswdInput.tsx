import { JSX } from "preact";
import { useContext, useEffect, useState } from "preact/hooks";
import { PasswdActionType } from "../constants/passwd.ts";
import passwdDialogCtx from "../hooks/ctx/passwdDialogCtx.ts";
import settingsCtx from "../hooks/ctx/settingsCtx.ts";
import { IPasswd, ISettings } from "../intf/context.ts";
import { IPasswdInputProps } from "../intf/props.ts";
import encrypt from "../utils/encrypt.ts";
import { infDebug } from "../utils/forbidDebugger.ts";
import Button from "./Button.tsx";
import Input from "./Input.tsx";
import Modal from "./Modal.tsx";

const PasswdInput: (props: IPasswdInputProps) => JSX.Element = (
    props: IPasswdInputProps
): JSX.Element => {
    const { open, apiKey, encryptedPasswd } = props;
    const [passwd, setPasswd] = useState<string>("");

    const passwdCtx: {
        passwdDialog: IPasswd;
        setPasswdDialog: (action: {
            type: PasswdActionType;
            payload?: Partial<IPasswd> | undefined;
        }) => void;
    } = useContext(passwdDialogCtx);
    const setCtx: {
        settings: ISettings;
        setSettings: (action: Partial<ISettings>) => void;
    } = useContext(settingsCtx);

    useEffect((): void => {
        infDebug();
    }, []);

    const inputPasswd: (e: Event) => void = (e: Event): void => {
        setPasswd(e.target!.value);
    };

    const clickCancel: () => void = (): void => {
        passwdCtx.setPasswdDialog({
            type: PasswdActionType.Cancel,
        });

        setPasswd("");
    };

    const clickSubmit: () => void = (): void => {
        passwdCtx.setPasswdDialog({
            type: PasswdActionType.Input,
            payload: {
                openDialog: false,
                passwd: "",
            },
        });

        encrypt(passwd).then((res) => {
            if (res === encryptedPasswd) {
                setCtx.setSettings({
                    apiKey,
                });

                localStorage.setItem("apiKey", apiKey);
            }
        });

        setPasswd("");
    };

    const keyListener: (e: Event) => void = (e: Event): void => {
        if (e.keyCode === 13) clickSubmit(); // 回车键
        else if (e.keyCode === 27) clickCancel(); // Esc键
    };

    return (
        <Modal open={open}>
            <>
                <Input
                    type="password"
                    placeholder="请输入密码"
                    onInput={inputPasswd}
                    value={passwd}
                    onKeyDown={keyListener}
                />

                <div class="flex-evenly">
                    <Button text="取消" onClick={clickCancel} />
                    <Button text="确定" onClick={clickSubmit} />
                </div>
            </>
        </Modal>
    );
};

export default PasswdInput;
