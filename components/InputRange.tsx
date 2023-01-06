import { JSX } from "preact";
import { useContext } from "preact/hooks";
import settingsCtx from "../hooks/ctx/settingsCtx.ts";
import { ISettings } from "../intf/context.ts";

/**
 * InputRange程度选择
 * 1. m-2 p-2 w-60 rounded shadow-sider-inner text-center
 * 2. flex-sper
 * 3. cursor-pointer w-48
 *
 * @return {*}  {JSX.Element}
 */
const InputRange: () => JSX.Element = (): JSX.Element => {
  const setCtx: {
    settings: ISettings;
    setSettings: (action: Partial<ISettings>) => void;
  } = useContext(settingsCtx);

  const handleSlide: (e) => void = (e): void => {
    setCtx.setSettings({ temp: e.target!.value });
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