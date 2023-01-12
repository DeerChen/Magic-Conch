import { JSX } from "preact";
import { useReducer, useState } from "preact/hooks";
import { initSettingsState } from "../constants/settings.ts";
import convoCtx from "../hooks/ctx/convoArrCtx.ts";
import settingsCtx from "../hooks/ctx/settingsCtx.ts";
import siderStatusCtx from "../hooks/ctx/siderStatusCtx.ts";
import convoReducer from "../hooks/reducers/convoReducer.ts";
import settingsReducer from "../hooks/reducers/settingsReducer.ts";
import Content from "./Content.tsx";
import Footer from "./Footer.tsx";
import Header from "./Header.tsx";
import Sider from "./Sider.tsx";

/**
 * Layout布局
 * 1. bg-neu min-w-fit min-h-screen grid
 *    {gridTemplateRows: "auto 1fr auto"}
 *
 * @return {*}  {JSX.Element}
 */
const Layout: () => JSX.Element = (): JSX.Element => {
    const [siderStatus, setSiderStatus] = useState<boolean>(false);
    const [settings, setSettings] = useReducer(
        settingsReducer,
        initSettingsState
    );
    const [convoArr, setConvoArr] = useReducer(convoReducer, []);

    return (
        <siderStatusCtx.Provider value={{ siderStatus, setSiderStatus }}>
            <settingsCtx.Provider value={{ settings, setSettings }}>
                <convoCtx.Provider value={{ convoArr, setConvoArr }}>
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
                    </div>
                </convoCtx.Provider>
            </settingsCtx.Provider>
        </siderStatusCtx.Provider>
    );
};

export default Layout;
