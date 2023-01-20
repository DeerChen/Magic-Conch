import { JSX } from "preact";
import { useReducer, useState } from "preact/hooks";
import PasswdInput from "../components/PasswdInput.tsx";
import WrongPopup from "../components/WrongPopup.tsx";
import { initDialogStatusState } from "../constants/dialog.ts";
import { initSettingsState } from "../constants/settings.ts";
import convoCtx from "../hooks/ctx/convoArrCtx.ts";
import dialogStatusCtx from "../hooks/ctx/dialogStatusCtx.ts";
import inputStatusCtx from "../hooks/ctx/inputStatusCtx.ts";
import settingsCtx from "../hooks/ctx/settingsCtx.ts";
import siderStatusCtx from "../hooks/ctx/siderStatusCtx.ts";
import convoReducer from "../hooks/reducers/convoReducer.ts";
import dialogReducer from "../hooks/reducers/dialogReducer.ts";
import settingsReducer from "../hooks/reducers/settingsReducer.ts";
import { ILayoutProps } from "../intf/props.ts";
import Content from "./Content.tsx";
import Footer from "./Footer.tsx";
import Header from "./Header.tsx";
import Sider from "./Sider.tsx";

/**
 * Layout布局
 *
 * @param {ILayoutProps} props
 * @return {*}  {JSX.Element}
 * 
 * @example
   <Layout apiKey="内置密钥" encryptedPasswd="密码" />
 */
const Layout: (props: ILayoutProps) => JSX.Element = (
    props: ILayoutProps
): JSX.Element => {
    const { apiKey, encryptedPasswd } = props;

    const [siderStatus, setSiderStatus] = useState<boolean>(false);
    const [inputStatus, setInputStatus] = useState<boolean>(false);
    const [settings, setSettings] = useReducer(
        settingsReducer,
        initSettingsState
    );
    const [convoArr, setConvoArr] = useReducer(convoReducer, []);
    const [dialogStatus, setDialogStatus] = useReducer(
        dialogReducer,
        initDialogStatusState
    );

    return (
        <siderStatusCtx.Provider value={{ siderStatus, setSiderStatus }}>
            <inputStatusCtx.Provider value={{ inputStatus, setInputStatus }}>
                <settingsCtx.Provider value={{ settings, setSettings }}>
                    <convoCtx.Provider value={{ convoArr, setConvoArr }}>
                        <dialogStatusCtx.Provider
                            value={{ dialogStatus, setDialogStatus }}
                        >
                            <div
                                class={siderStatus ? "grid" : ""}
                                style={
                                    siderStatus
                                        ? {
                                              gridTemplateColumns: "15rem auto",
                                          }
                                        : ""
                                }
                            >
                                {siderStatus ? <Sider /> : ""}

                                <div
                                    class="bg-neu min-w-fit min-h-screen grid"
                                    style={{
                                        gridTemplateRows: "auto 1fr auto",
                                    }}
                                >
                                    <Header />
                                    <Content />
                                    <Footer />
                                </div>

                                <PasswdInput
                                    open={dialogStatus.passwdInputStatus}
                                    apiKey={apiKey}
                                    encryptedPasswd={encryptedPasswd}
                                />

                                <WrongPopup
                                    open={dialogStatus.wrongPopupStatus}
                                />
                            </div>
                        </dialogStatusCtx.Provider>
                    </convoCtx.Provider>
                </settingsCtx.Provider>
            </inputStatusCtx.Provider>
        </siderStatusCtx.Provider>
    );
};

export default Layout;
