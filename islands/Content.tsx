import { JSX } from "preact";
import Convo from "../components/Convo.tsx";
import SiderBtn from "../components/SiderBtn.tsx";
import TypingArea from "../components/TypingArea.tsx";

/**
 * Content主体内容
 *
 * @return {*}  {JSX.Element}
 * 
 * @example
   <Content />
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
