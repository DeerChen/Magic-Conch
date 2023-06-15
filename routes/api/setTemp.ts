import { Handlers } from "$fresh/server.ts";
import { setTemperature } from "../../utils/kv.ts";

const handler: Handlers = {
    async POST(req) {
        const newTemp = await new URL(req.url).searchParams.get("newTemp");

        if (isNaN(Number(newTemp))) return new Response(null, { status: 400 });

        await setTemperature(Number(newTemp));
        return new Response();
    },
};

export { handler };
