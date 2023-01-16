import { JSX } from "preact";
import {
    StateUpdater,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "preact/hooks";
import Button from "../components/Button.tsx";
import Divider from "../components/Divider.tsx";
import Input from "../components/Input.tsx";
import Loading from "../components/Loading.tsx";
import { ConvoActionType } from "../constants/convo.ts";
import convoArrCtx from "../hooks/ctx/convoArrCtx.ts";
import inputStatusCtx from "../hooks/ctx/inputStatusCtx.ts";
import settingsCtx from "../hooks/ctx/settingsCtx.ts";
import { ISettings } from "../intf/context.ts";
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
    const convoCtx: {
        convoArr: ICardProps[];
        setConvoArr: (action: {
            type: ConvoActionType;
            payload?: ICardProps | undefined;
        }) => void;
    } = useContext(convoArrCtx);
    const setCtx: {
        settings: ISettings;
        setSettings: (action: Partial<ISettings>) => void;
    } = useContext(settingsCtx);
    const inputCtx: {
        inputStatus: boolean;
        setInputStatus: StateUpdater<boolean>;
    } = useContext(inputStatusCtx);

    const [word, setWord] = useState<string>("");
    const [flag, setFlag] = useState<boolean>(false);
    const [convo, setConvo] = useState<string>("");

    const inputWord: (e: Event) => void = (e: Event): void => {
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

        /**  ，
         * 判断模型是否为Codex
         * 1. 如果是仅发送最后一条问句
         * 2. 否则组成A/B对话
         */
        if (setCtx.settings.model.startsWith("code-")) {
            convoCtx.convoArr.forEach((convo: ICardProps): void => {
                if (convo.right) conversation = `${convo.children}`;
            });
        } else if (setCtx.settings.model.startsWith("text-")) {
            convoCtx.convoArr.forEach((convo: ICardProps): void => {
                const talker: string = convo.right ? "A:" : "B:";

                conversation = `${conversation}${talker}${convo.children}\n`;
            });

            conversation = `${conversation}B:`;
        }

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

        const convoLen: number = tokenCalc(convo);

        if (setCtx.settings.maxTokens - convoLen >= 1) {
            convoCtx.setConvoArr({
                type: ConvoActionType.Say,
                payload: {
                    avatar: "/logo.svg",
                    right: false,
                    children: <Loading />,
                },
            });

            const openai: OpenAI = new OpenAI(setCtx.settings.apiKey);

            openai
                .createCompletion({
                    model: setCtx.settings.model,
                    prompt: convo,
                    max_tokens: setCtx.settings.maxTokens - convoLen,
                    temperature: setCtx.settings.temp,
                    stop: setCtx.settings.model.startsWith("code-")
                        ? ""
                        : "\nB:",
                })
                .then((res): void => {
                    convoCtx.setConvoArr({
                        type: ConvoActionType.Pop,
                    });

                    // 返回错误
                    if (res.error) {
                        convoCtx.setConvoArr({
                            type: ConvoActionType.Say,
                            payload: {
                                avatar: "/logo.svg",
                                right: false,
                                children: (
                                    <div class="text-red-500">
                                        {res.error.message}
                                        <Divider />
                                        <ol class="ml-6 list-decimal">
                                            <li>
                                                请检查左侧边栏中"API_KEY"是否正确填写(且无额度已满或被官方封禁等情况)
                                            </li>
                                            <li>请检查是否超出速度限制</li>
                                        </ol>
                                    </div>
                                ),
                            },
                        });

                        inputCtx.setInputStatus(true);
                        setConvo("");
                        setFlag(false);

                        return;
                    }

                    // 返回答句
                    convoCtx.setConvoArr({
                        type: ConvoActionType.Say,
                        payload: {
                            avatar: "/logo.svg",
                            right: false,
                            children: res.choices[0].text.replace(
                                /[A:|B:]/g,
                                ""
                            ),
                        },
                    });
                });
        } else {
            // 返回超字节数限制错误
            convoCtx.setConvoArr({
                type: ConvoActionType.Say,
                payload: {
                    avatar: "/logo.svg",
                    right: false,
                    children: (
                        <div class="text-red-500">
                            对话(含问和答)超出模型最大字节数限制，请点击右上角"刷新"按钮开启新会话。
                        </div>
                    ),
                },
            });

            inputCtx.setInputStatus(true);
        }

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

    /**
     * 监听回车键
     *
     * @param {Event} e
     */
    const enterListener: (e: Event) => void = (e: Event): void => {
        if (e.keyCode === 13) clickSend();
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
                onInput={inputWord}
                placeholder="为什么不问问神奇海螺呢？"
                // maxLength={140}
                autofocus
                disabled={inputCtx.inputStatus}
                onKeyDown={enterListener}
            />
            <Button text="发送" icon="/send.svg" onClick={clickSend} />
        </div>
    );
};

export default TypingArea;
