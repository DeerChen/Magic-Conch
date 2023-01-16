type ICreateCompletionConfig = {
    model: string;
    prompt: string;
    max_tokens: number;
    temperature: number;
    stop: string;
};

export type { ICreateCompletionConfig };
