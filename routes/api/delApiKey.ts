import { Handlers } from "$fresh/server.ts";
import { delApiKey } from "../../utils/kv.ts";

const handler: Handlers = {
    async POST(req) {
        const del = await new URL(req.url).searchParams.get("del");

        if (del === "") return new Response(null, { status: 400 });

        await delApiKey();
        return new Response();
    },
};

export { handler };
