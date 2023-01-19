import { JSX } from "preact";
import { useContext } from "preact/hooks";
import settingsCtx from "../hooks/ctx/settingsCtx.ts";
import { ISettings } from "../intf/context.ts";

/**
 * InputRange程度选择
 *
 * @return {*}  {JSX.Element}
 * 
 * @example
   <InputRange />
 */
const InputRange: () => JSX.Element = (): JSX.Element => {
    const setCtx: {
        settings: ISettings;
        setSettings: (action: Partial<ISettings>) => void;
    } = useContext(settingsCtx);

    const handleSlide: (e: Event) => void = (e: Event): void => {
        setCtx.setSettings({
            temp: parseFloat(e.target!.value),
        });

        localStorage.setItem("temperature", e.target!.value);
    };

    return (
        <div class="m-2 p-2 w-60 rounded shadow-sider-inner text-center">
            <div class="flex-sper">
                <div>中规中矩</div>
                <div>天马行空</div>
            </div>

            <input
                class="cursor-pointer w-48"
                type="range"
                min={0}
                max={1}
                value={setCtx.settings.temp}
                step={0.1}
                onInput={handleSlide}
            />
        </div>
    );
};

export default InputRange;
