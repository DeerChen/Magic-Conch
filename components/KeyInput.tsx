import { JSX } from "preact";
import { useContext } from "preact/hooks";
import Button from "../components/Button.tsx";
import Input from "../components/Input.tsx";
import { PasswdActionType } from "../constants/passwd.ts";
import passwdDialogCtx from "../hooks/ctx/passwdDialogCtx.ts";
import settingsCtx from "../hooks/ctx/settingsCtx.ts";
import { IPasswd, ISettings } from "../intf/context.ts";
import { fetchDelApiKey, fetchSetApiKey } from "../utils/fetchApi.ts";

/**
 * KeyInput密钥输入框
 *
 * @return {*}  {JSX.Element}
 * 
 * @example
   <KeyInput />
 */
const KeyInput: () => JSX.Element = (): JSX.Element => {
    const setCtx: {
        settings: ISettings;
        setSettings: (action: Partial<ISettings>) => void;
    } = useContext(settingsCtx);

    const inputKey: (e: Event) => Promise<void> = async (
        e: Event
    ): Promise<void> => {
        setCtx.setSettings({
            apiKey: e.target!.value,
        });

        // localStorage.setItem("apiKey", e.target!.value);
        await fetchSetApiKey(e.target!.value);
    };

    const passwdCtx: {
        passwdDialog: IPasswd;
        setPasswdDialog: (action: {
            type: PasswdActionType;
            payload?: Partial<IPasswd> | undefined;
        }) => void;
    } = useContext(passwdDialogCtx);

    const useBuiltInKey: () => void = (): void => {
        passwdCtx.setPasswdDialog({
            type: PasswdActionType.Popup,
        });
    };

    const clearKey: () => Promise<void> = async () => {
        setCtx.setSettings({
            apiKey: "",
        });

        // localStorage.removeItem("apiKey");
        await fetchDelApiKey();
    };

    return (
        <div class="m-2 p-2 rounded shadow-sider-inner text-center">
            <Input
                class="mb-1 shadow-sider-inner bg-sider"
                type="password"
                placeholder="API Key"
                value={setCtx.settings.apiKey}
                onInput={inputKey}
            />

            <div class="flex-evenly mt-1">
                <Button
                    class="shadow-sider active:shadow-sider-inner"
                    text="内置"
                    onClick={useBuiltInKey}
                />
                <Button
                    class="shadow-sider active:shadow-sider-inner"
                    text="清空"
                    onClick={clearKey}
                />
            </div>
        </div>
    );
};

export default KeyInput;
