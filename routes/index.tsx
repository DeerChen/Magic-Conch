import { Head } from "$fresh/runtime.ts";
import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import { JSX } from "preact";
import { MODEL } from "../constants/settings.ts";
import { IArgs } from "../intf/args.ts";
import { ISettings } from "../intf/context.ts";
import Layout from "../islands/Layout.tsx";
import encrypt from "../utils/encrypt.ts";
import { getApiKey, getModel, getTemperature } from "../utils/kv.ts";

const handler: Handlers = {
    GET: async (_: Request, ctx: HandlerContext): Promise<Response> => {
        // const args = parse(Deno.args);
        // const { apiKey, passwd } = args;
        const apiKey = Deno.env.get("apiKey");
        const passwd = Deno.env.get("passwd");

        const apiKeyCache = await getApiKey();
        const modelCache = await getModel();
        const tempCache = await getTemperature();

        const initSettingsState: ISettings = {
            apiKey: apiKeyCache ? apiKeyCache : "",
            model: modelCache ? modelCache : "text-davinci-003",
            maxTokens: modelCache
                ? MODEL[modelCache]["max-tokens"]
                : MODEL["text-davinci-003"]["max-tokens"],
            temp: tempCache ? parseFloat(tempCache) : 0,
        };

        return encrypt(passwd!)
            .then((res: string) =>
                ctx.render({
                    apiKey,
                    passwd: res,
                    initSettingsState,
                })
            )
            .catch((_err) => ctx.render(null));
    },
};

/**
 * Index首页
 *
 * @param {PageProps<IArgs>} {
 *     data,
 * }
 * @return {*}  {JSX.Element}
 */
const Index: ({ data }: PageProps<IArgs>) => JSX.Element = ({
    data,
}: PageProps<IArgs>): JSX.Element => {
    if (data && data.apiKey && data.passwd && data.initSettingsState) {
        const encryptedPasswd: string = data.passwd;

        return (
            <>
                <Head>
                    <title>神奇海螺 🐚</title>
                </Head>
                <Layout
                    apiKey={data.apiKey}
                    encryptedPasswd={encryptedPasswd}
                    initSettingsState={data.initSettingsState}
                />
            </>
        );
    }

    return (
        <>
            <div>The command line arguments are incomplete.</div>
            <div>命令行参数不完整。</div>
        </>
    );
};

export default Index;
export { handler };
