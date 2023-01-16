import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import { JSX } from "preact";
import query from "../../utils/query.ts";

const handler: Handlers = {
    async GET(_: Request, ctx: HandlerContext): Promise<Response> {
        const result = await query("https://api64.ipify.org", 30000, {
            mode: "cors",
        })
            .then((res: Response): Promise<string> => res.text())
            .catch((err): void => {
                console.error(err);
            });

        return ctx.render(result);
    },
};

/**
 * 查询客户端IP
 *
 * @param {PageProps} {
 *     data,
 * }
 * @return {*}  {JSX.Element}
 */
const Ip: ({ data }: PageProps) => JSX.Element = ({
    data,
}: PageProps): JSX.Element => {
    if (!data) return <>Unknown 未知</>;

    return <>{data}</>;
};

export { handler };
export default Ip;
