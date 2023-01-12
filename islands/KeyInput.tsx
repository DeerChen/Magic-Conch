import { JSX } from "preact";
import { useContext } from "preact/hooks";
import Button from "../components/Button.tsx";
import Input from "../components/Input.tsx";
import { API_KEY } from "../constants/settings.ts";
import settingsCtx from "../hooks/ctx/settingsCtx.ts";
import { ISettings } from "../intf/context.ts";

/**
 * KeyInput密钥输入框
 * 1. m-2 p-2 w-60 rounded shadow-sider-inner text-center
 * 2. mb-1 shadow-sider-inner bg-sider
 * 3. flex-evenly mt-1
 * 4. shadow-sider active:shadow-sider-inner
 *
 * @return {*}  {JSX.Element}
 */
const KeyInput: () => JSX.Element = (): JSX.Element => {
    const setCtx: {
        settings: ISettings;
        setSettings: (action: Partial<ISettings>) => void;
    } = useContext(settingsCtx);

    const inputKey: (e: JSX.TargetedEvent<HTMLInputElement, Event>) => void = (
        e: JSX.TargetedEvent<HTMLInputElement, Event>
    ): void => {
        setCtx.setSettings({
            apiKey: e.target!.value,
        });

        localStorage.setItem("apiKey", e.target!.value);
    };

    const useBuiltInKey: () => void = (): void => {
        setCtx.setSettings({
            apiKey: API_KEY,
        });

        localStorage.setItem("apiKey", API_KEY);
    };

    const clearKey: () => void = (): void => {
        setCtx.setSettings({
            apiKey: "",
        });

        localStorage.removeItem("apiKey");
    };

    return (
        <div class="m-2 p-2 w-60 rounded shadow-sider-inner text-center">
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
