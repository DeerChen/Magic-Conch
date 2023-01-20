import { JSX } from "preact";
import InputRange from "../components/InputRange.tsx";
import KeyInput from "../components/KeyInput.tsx";
import ModelSelect from "../components/ModelSelect.tsx";
import Title from "../components/Title.tsx";

/**
 * Sider侧边栏
 *
 * @return {*}  {JSX.Element}
 * 
 * @example
   <Sider />
 */
const Sider: () => JSX.Element = (): JSX.Element => (
    <div class="bg-sider transition-all flex-col w-auto">
        <Title class="m-2" mainTitle="设置" />

        <KeyInput />
        <InputRange />
        <ModelSelect />
    </div>
);

export default Sider;
