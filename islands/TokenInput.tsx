import { JSX } from "preact";
import { useContext } from "preact/hooks";
import Button from "../components/Button.tsx";
import Input from "../components/Input.tsx";
import { TOKEN } from "../constants/index.ts";
import settingsCtx from "../hooks/ctx/settingsCtx.ts";
import { ISettings } from "../intf/context.ts";

/**
 * TokenInput密钥输入框
 * 1. m-2 p-2 w-60 rounded shadow-sider-inner text-center
 * 2. mb-1 shadow-sider-inner bg-sider
 * 3. flex-evenly mt-1
 * 4. shadow-sider active:shadow-sider-inner
 *
 * @return {*}  {JSX.Element}
 */
const TokenInput: () => JSX.Element = (): JSX.Element => {
  const setCtx: {
    settings: ISettings;
    setSettings: (action: Partial<ISettings>) => void;
  } = useContext(settingsCtx);

  const inputToken: (e) => void = (e): void => {
    setCtx.setSettings({
      token: e.target.value,
    });
  };

  const useBuiltInKey: () => void = (): void => {
    setCtx.setSettings({
      token: TOKEN,
    });
  };

  const clearToken: () => void = (): void => {
    setCtx.setSettings({
      token: "",
    });
  };

  return (
    <div class="m-2 p-2 w-60 rounded shadow-sider-inner text-center">
      <Input
        class="mb-1 shadow-sider-inner bg-sider"
        type="password"
        placeholder="API Key"
        value={setCtx.settings.token}
        onInput={inputToken}
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
          onClick={clearToken}
        />
      </div>
    </div>
  );
};

export default TokenInput;
