import { JSX } from "preact";
import { useCallback, useContext, useEffect, useState } from "preact/hooks";
import Button from "../components/Button.tsx";
import Input from "../components/Input.tsx";
import { ConvoActionType } from "../constants/convo.ts";
import convoArrCtx from "../hooks/ctx/convoArrCtx.ts";
import settingsCtx from "../hooks/ctx/settingsCtx.ts";
import { ICardProps } from "../intf/props.ts";
import OpenAI from "../utils/openai.ts";
import tokenCalc from "../utils/tokenCalc.ts";

/**
 * TypingArea输入区
 * 1. mt-1 flex-center
 *    {gridArea: "bottomHalf"}
 * 2. 输入框：w-2/3
 *
 * @return {*}  {JSX.Element}
 */
const TypingArea: () => JSX.Element = (): JSX.Element => {
    const convoCtx = useContext(convoArrCtx);
    const setCtx = useContext(settingsCtx);

    const [word, setWord] = useState<string>("");
    const [flag, setFlag] = useState<boolean>(false);
    const [convo, setConvo] = useState<string>("");

    const inputWord: (e: JSX.TargetedEvent<HTMLInputElement, Event>) => void = (
        e: JSX.TargetedEvent<HTMLInputElement, Event>
    ): void => {
        setWord(e.target!.value);
    };

    useEffect((): void => {
        /**
         * 1. 监听flag变化，如果flag倒下，则不操作
         * 2. 将对话组织成字符串，传递给convo
         */
        if (!flag) {
            return;
        }

        let conversation = "";

        convoCtx.convoArr.forEach((convo: ICardProps): void => {
            if (convo.right) {
                conversation = `${conversation}A:${convo.children}\n`;
            } else {
                conversation = `${conversation}B:${convo.children}\n`;
            }
        });

        conversation = `${conversation}B:`;
        setConvo(conversation);
    }, [flag]);

    useEffect((): void => {
        /**
         * 1. 接收到convo变化，如果convo是个空数组，则不操作
         * 2. 发送请求给OpenAI API，并把flag放倒
         */

        if (convo === "") {
            return;
        }

        const convoLen = tokenCalc(convo);

        const openai = new OpenAI(setCtx.settings.apiKey);

        openai
            .createCompletion({
                model: setCtx.settings.model,
                prompt: convo,
                max_tokens: setCtx.settings.maxTokens - convoLen,
                temperature: setCtx.settings.temp,
            })
            .then((res): void => {
                if (res.error) {
                    const result = res.error;
                    console.error(result.message);
                    return;
                }

                convoCtx.setConvoArr({
                    type: ConvoActionType.Say,
                    payload: {
                        avatar: "/logo.svg",
                        right: false,
                        children: res.choices[0].text,
                    },
                });
            });

        setConvo("");

        setFlag(false);
    }, [convo]);

    const clickSend: () => void = useCallback((): void => {
        /**
         * 1. 如果输入框为空，则不操作
         * 2. 在对话中添加己方对话
         */
        if (word === "") {
            return;
        }

        convoCtx.setConvoArr({
            type: ConvoActionType.Say,
            payload: {
                avatar: "/lemon.svg",
                right: true,
                children: word,
            },
        });

        setFlag(true);

        setWord("");
    }, [word]);

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
                onInput={inputWord}
                placeholder="为什么不问问神奇海螺呢？"
                maxLength={140}
                autofocus
            />
            <Button text="发送" icon="/send.svg" onClick={clickSend} />
        </div>
    );
};

export default TypingArea;
