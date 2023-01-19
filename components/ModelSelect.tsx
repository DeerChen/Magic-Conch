import { JSX } from "preact";
import { useContext } from "preact/hooks";
import { MODEL } from "../constants/settings.ts";
import settingsCtx from "../hooks/ctx/settingsCtx.ts";
import { ISettings } from "../intf/context.ts";

/**
 * ModelSelect模型选择
 *
 * @return {*}  {JSX.Element}
 * 
 * @example
   <ModelSelect />
 */
const ModelSelect: () => JSX.Element = (): JSX.Element => {
    const setCtx: {
        settings: ISettings;
        setSettings: (action: Partial<ISettings>) => void;
    } = useContext(settingsCtx);

    const selectOpt: (e: Event) => void = (e: Event): void => {
        const model: string = e.target!.value;

        setCtx.setSettings({
            model,
            maxTokens: MODEL[model]["max-tokens"],
        });

        localStorage.setItem("model", model);
    };

    return (
        <div class="m-2 p-2 w-60 rounded shadow-sider-inner text-center">
            <label for="model">选择模型</label>
            <select
                id="model"
                class="m-1 bg-sider"
                required
                onChange={selectOpt}
            >
                <optgroup label="GPT-3">
                    <option
                        value="text-davinci-003"
                        selected={setCtx.settings.model === "text-davinci-003"}
                    >
                        text-davinci-003
                    </option>
                    <option
                        value="text-curie-001"
                        selected={setCtx.settings.model === "text-curie-001"}
                    >
                        text-curie-001
                    </option>
                    <option
                        value="text-babbage-001"
                        selected={setCtx.settings.model === "text-babbage-001"}
                    >
                        text-babbage-001
                    </option>
                    <option
                        value="text-ada-001"
                        selected={setCtx.settings.model === "text-ada-001"}
                    >
                        text-ada-001
                    </option>
                </optgroup>

                <optgroup label="Codex">
                    <option
                        value="code-davinci-002"
                        selected={setCtx.settings.model === "code-davinci-002"}
                    >
                        code-davinci-002
                    </option>
                    <option
                        value="code-cushman-001"
                        selected={setCtx.settings.model === "code-cushman-001"}
                    >
                        code-cushman-001
                    </option>
                </optgroup>
            </select>

            <div class="text-left mt-1 p-2 rounded shadow-sider-inner ">
                <ul class="list-disc ml-6">
                    <li>模型描述：{MODEL[setCtx.settings.model].desc}</li>
                    <li>
                        最大支持字节数：
                        {MODEL[setCtx.settings.model]["max-tokens"]}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ModelSelect;
