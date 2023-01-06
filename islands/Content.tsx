import { JSX } from "preact";
import { StateUpdater, useContext } from "preact/hooks";
import Icon from "../components/Icon.tsx";
import siderStatusCtx from "../hooks/ctx/siderStatusCtx.ts";
import Convo from "./Convo.tsx";
import TypingArea from "./TypingArea.tsx";

/**
 * Content主体内容
 * 1. flex
 * 2. cursor-pointer flex-center hover:animate-pulse
 * 3. rounded shadow-neu w-full max-w-screen-md m-2 p-2 grid sm:(mx-auto my-2)
 *    {gridTemplateRows: "1fr auto", gridTemplateAreas: "'topHalf' 'bottomHalf'"}
 *
 * @return {*}  {JSX.Element}
 */
const Content: () => JSX.Element = (): JSX.Element => {
  const siderCtx: {
    siderStatus: boolean;
    setSiderStatus: StateUpdater<boolean>;
  } = useContext(siderStatusCtx);
  const toggleSiderStatus: () => void = (): void => {
    siderCtx.setSiderStatus(!siderCtx.siderStatus);
  };

  return (
    <div class="flex">
      <div
        class="cursor-pointer flex-center hover:animate-pulse"
        onClick={toggleSiderStatus}
      >
        {siderCtx.siderStatus
          ? <Icon src="/left.svg" size={20} />
          : <Icon src="/right.svg" size={20} />}
      </div>

      <main
        class="rounded shadow-neu w-full max-w-screen-md m-2 p-2 grid sm:(mx-auto my-2)"
        style={{
          gridTemplateRows: "1fr auto",
          gridTemplateAreas: "'topHalf' 'bottomHalf'",
        }}
      >
        <Convo />
        <TypingArea />
      </main>
    </div>
  );
};

export default Content;
