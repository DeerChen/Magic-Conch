import { JSX } from "preact";
import { useContext } from "preact/hooks";
import Button from "../components/Button.tsx";
import Input from "../components/Input.tsx";
import { PasswdInputActionType } from "../constants/dialog.ts";
import dialogStatusCtx from "../hooks/ctx/dialogStatusCtx.ts";
import settingsCtx from "../hooks/ctx/settingsCtx.ts";
import { IDialog, ISettings } from "../intf/context.ts";

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

    const inputKey: (e: Event) => void = (e: Event): void => {
        setCtx.setSettings({
            apiKey: e.target!.value,
        });

        localStorage.setItem("apiKey", e.target!.value);
    };

    const dialogCtx: {
        dialogStatus: IDialog;
        setDialogStatus:
            | ((action: { type: PasswdInputActionType }) => void)
            | (() => never);
    } = useContext(dialogStatusCtx);

    const useBuiltInKey: () => void = (): void => {
        dialogCtx.setDialogStatus({
            type: PasswdInputActionType.Popup,
        });
    };

    const clearKey: () => void = (): void => {
        setCtx.setSettings({
            apiKey: "",
        });

        localStorage.removeItem("apiKey");
    };

    return (
        <div class="m-2 p-2 rounded shadow-sider-inner text-center">
            <Input
                class="mb-1 w-48 shadow-sider-inner bg-sider"
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
