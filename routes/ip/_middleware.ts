import { MiddlewareHandlerContext } from "$fresh/server.ts";

const handler: (
    _req: Request,
    ctx: MiddlewareHandlerContext
) => Promise<Response> = async (
    _req: Request,
    ctx: MiddlewareHandlerContext
): Promise<Response> => await ctx.next();

export { handler };
