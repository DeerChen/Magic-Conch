import { JSX } from "preact";
import { useReducer, useState } from "preact/hooks";
import PasswdInput from "../components/PasswdInput.tsx";
import { initPasswdState } from "../constants/passwd.ts";
import { initSettingsState } from "../constants/settings.ts";
import convoCtx from "../hooks/ctx/convoArrCtx.ts";
import inputStatusCtx from "../hooks/ctx/inputStatusCtx.ts";
import passwdDialogCtx from "../hooks/ctx/passwdDialogCtx.ts";
import settingsCtx from "../hooks/ctx/settingsCtx.ts";
import siderStatusCtx from "../hooks/ctx/siderStatusCtx.ts";
import convoReducer from "../hooks/reducers/convoReducer.ts";
import passwdReducer from "../hooks/reducers/passwdReducer.ts";
import settingsReducer from "../hooks/reducers/settingsReducer.ts";
import { ILayoutProps } from "../intf/props.ts";
import Content from "./Content.tsx";
import Footer from "./Footer.tsx";
import Header from "./Header.tsx";
import Sider from "./Sider.tsx";

/**
 * Layout布局
 * 1. bg-neu min-w-fit min-h-screen grid
 *    {gridTemplateRows: "auto 1fr auto"}
 *
 * @param {ILayoutProps} props
 * @return {*}  {JSX.Element}
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
    const [passwdDialog, setPasswdDialog] = useReducer(
        passwdReducer,
        initPasswdState
    );

    return (
        <siderStatusCtx.Provider value={{ siderStatus, setSiderStatus }}>
            <inputStatusCtx.Provider value={{ inputStatus, setInputStatus }}>
                <settingsCtx.Provider value={{ settings, setSettings }}>
                    <convoCtx.Provider value={{ convoArr, setConvoArr }}>
                        <passwdDialogCtx.Provider
                            value={{ passwdDialog, setPasswdDialog }}
                        >
                            <div
                                class="grid"
                                style={{
                                    gridTemplateColumns: "auto 1fr",
                                }}
                            >
                                <Sider />
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
                                    open={passwdDialog.openDialog}
                                    apiKey={apiKey}
                                    encryptedPasswd={encryptedPasswd}
                                />
                            </div>
                        </passwdDialogCtx.Provider>
                    </convoCtx.Provider>
                </settingsCtx.Provider>
            </inputStatusCtx.Provider>
        </siderStatusCtx.Provider>
    );
};

export default Layout;
