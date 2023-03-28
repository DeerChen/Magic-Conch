import { Head } from "$fresh/runtime.ts";
import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import { JSX } from "preact";
import { parse } from "std/flags/mod.ts";
import { IArgs } from "../intf/args.ts";
import Layout from "../islands/Layout.tsx";
import encrypt from "../utils/encrypt.ts";

const handler: Handlers = {
    GET: (_: Request, ctx: HandlerContext): Promise<Response> => {
        const args = parse(Deno.args);
        const { apiKey, passwd } = args;

        return encrypt(passwd)
            .then((res: string) =>
                ctx.render({
                    apiKey,
                    passwd: res,
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
    if (data && data.apiKey && data.passwd) {
        const encryptedPasswd: string = data.passwd;

        return (
            <>
                <Head>
                    <title>神奇海螺 🐚</title>
                </Head>
                <Layout
                    apiKey={data.apiKey}
                    encryptedPasswd={encryptedPasswd}
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
