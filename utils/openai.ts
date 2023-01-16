import { ICreateCompletionConfig } from "../intf/openai.ts";

class OpenAI {
    private apiKey;
    public constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    async createCompletion(config: ICreateCompletionConfig): Promise<any> {
        const params = {
            ...config,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        };

        const res: Response = await fetch(
            "https://api.openai.com/v1/completions",
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${this.apiKey}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(params),
            }
        );

        return await res.json();
    }
}

export default OpenAI;
