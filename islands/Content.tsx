import { JSX } from "preact";
import SiderBtn from "../components/SiderBtn.tsx";
import Convo from "./Convo.tsx";
import TypingArea from "./TypingArea.tsx";

/**
 * Content主体内容
 * 1. grid p-2
 *    {gridTemplateRows: "auto 1fr", gridTemplateAreas: "'leftHalf' 'rightHalf'"}
 * 2. 左侧边栏按钮：flex-center
 * 3. 对话窗口：flex-center
 * 4. rounded shadow-neu w-full max-w-screen-md p-2 grid
 *    {gridTemplateRows: "1fr auto", gridTemplateAreas: "'topHalf' 'bottomHalf'"}
 *
 * @return {*}  {JSX.Element}
 */
const Content: () => JSX.Element = (): JSX.Element => {
    return (
        <div
            class="grid p-2"
            style={{
                gridTemplateColumns: "auto 1fr",
                gridTemplateAreas: "'leftHalf' 'rightHalf'",
            }}
        >
            <div class="flex-center">
                <SiderBtn />
            </div>

            <div class="flex-center">
                <main
                    class="rounded shadow-neu w-full max-w-screen-md p-2 grid"
                    style={{
                        gridTemplateRows: "1fr auto",
                        gridTemplateAreas: "'topHalf' 'bottomHalf'",
                    }}
                >
                    <Convo />
                    <TypingArea />
                </main>
            </div>
        </div>
    );
};

export default Content;
