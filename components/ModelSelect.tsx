import { JSX } from "preact";
import { useContext } from "preact/hooks";
import { MODEL } from "../constants/index.ts";
import settingsCtx from "../hooks/ctx/settingsCtx.ts";
import { ISettings } from "../intf/context.ts";

/**
 * ModelSelect模型选择
 * 1. m-2 p-2 w-60 rounded shadow-sider-inner text-center
 * 2. m-1 bg-sider
 * 3. text-left mt-1 p-2 rounded shadow-sider-inner
 *
 * @return {*}  {JSX.Element}
 */
const ModelSelect: () => JSX.Element = (): JSX.Element => {
  const setCtx: {
    settings: ISettings;
    setSettings: (action: Partial<ISettings>) => void;
  } = useContext(settingsCtx);

  const selectOpt: (e) => void = (e): void => {
    const model: string = e.target.value;

    setCtx.setSettings({
      model,
      maxToken: MODEL[model]["max-token"],
    });
  };

  return (
    <div class="m-2 p-2 w-60 rounded shadow-sider-inner text-center">
      <label for="model">选择模型</label>
      <select id="model" class="m-1 bg-sider" required onChange={selectOpt}>
        <optgroup label="GPT-3">
          <option value="text-davinci-003">text-davinci-003</option>
          <option value="text-curie-001">text-curie-001</option>
          <option value="text-babbage-001">text-babbage-001</option>
          <option value="text-ada-001">text-ada-001</option>
        </optgroup>

        <optgroup label="Codex">
          <option value="code-davinci-002">code-davinci-002</option>
          <option value="code-cushman-001">code-cushman-001</option>
        </optgroup>
      </select>

      <div class="text-left mt-1 p-2 rounded shadow-sider-inner">
        {MODEL[setCtx.settings.model].desc}
      </div>
    </div>
  );
};

export default ModelSelect;
