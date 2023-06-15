import { Handlers } from "$fresh/server.ts";
import { setModel } from "../../utils/kv.ts";

const handler: Handlers = {
    async POST(req) {
        const newModel = await new URL(req.url).searchParams.get("newModel");

        if (newModel === "") return new Response(null, { status: 400 });

        await setModel(newModel!);
        return new Response();
    },
};

export { handler };
