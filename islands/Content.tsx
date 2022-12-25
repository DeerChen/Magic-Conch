import { JSX } from "preact";
import Convo from "./Convo.tsx";
import TypingArea from "./TypingArea.tsx";

/**
 * Content主体内容
 * 1. rounded shadow-neu w-full max-w-screen-md mx-auto my-2 px-1 grid
 *    {gridTemplateRows: "1fr auto", gridTemplateAreas: "'topHalf' 'bottomHalf'"}
 *
 * @return {*}  {JSX.Element}
 */
const Content: () => JSX.Element = (): JSX.Element => {
  return (
    <main
      class="rounded shadow-neu w-full max-w-screen-md mx-auto my-2 p-2 grid"
      style={{
        gridTemplateRows: "1fr auto",
        gridTemplateAreas: "'topHalf' 'bottomHalf'",
      }}
    >
      <Convo />
      <TypingArea />
    </main>
  );
};

export default Content;
