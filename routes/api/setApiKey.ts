import { Handlers } from "$fresh/server.ts";
import { setApiKey } from "../../utils/kv.ts";

const handler: Handlers = {
    async POST(req) {
        const newApiKey = await new URL(req.url).searchParams.get("newApiKey");

        if (newApiKey === "") return new Response(null, { status: 400 });

        await setApiKey(newApiKey!);
        return new Response();
    },
};

export { handler };
