import { JSX } from "preact";
import { useState } from "preact/hooks";
import Button from "../components/Button.tsx";
import Input from "../components/Input.tsx";

/**
 * TypingArea输入区
 * 1. mt-1 flex-center
 *    {gridArea: "bottomHalf"}
 * 2. 输入框：w-2/3
 *
 * @return {*}  {JSX.Element}
 */
const TypingArea: () => JSX.Element = (): JSX.Element => {
  const [word, setWord] = useState<string>("");
  const clickSend: () => void = (): void => {
    // Todo: 发送
  };

  return (
    <div
      class="mt-1 flex-center"
      style={{
        gridArea: "bottomHalf",
      }}
    >
      <Input
        class="w-2/3"
        value={word}
        onInput={(e: JSX.TargetedEvent<HTMLInputElement, Event>): void =>
          setWord(e.target!.value)}
        placeholder="你想问些什么？"
        maxLength={140}
      />
      <Button text="发送" icon="/send.svg" onClick={clickSend} />
    </div>
  );
};

export default TypingArea;
