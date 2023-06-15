const kv = await Deno.openKv();

// temperature
const TEMPERATURE = ["magic-conch", "temperature"];

const getTemperature: () => Promise<any> = async () => {
    const res = await kv.get<number>(TEMPERATURE);
    return res.value;
};

const setTemperature: (newTemperature: number) => Promise<void> = async (
    newTemperature: number
) => {
    await kv.set(TEMPERATURE, newTemperature);
};

// apiKey
const API_KEY = ["magic-conch", "apiKey"];

const getApiKey: () => Promise<any> = async () => {
    const res = await kv.get<string>(API_KEY);
    return res.value;
};

const setApiKey: (newApiKey: string) => Promise<void> = async (
    newApiKey: string
) => {
    await kv.set(API_KEY, newApiKey);
};

const delApiKey: () => Promise<void> = async () => {
    await kv.delete(API_KEY);
};

// model
const MODEL = ["magic-conch", "model"];

const getModel: () => Promise<any> = async () => {
    const res = await kv.get<string>(MODEL);
    return res.value;
};

const setModel: (newModel: string) => Promise<void> = async (
    newModel: string
) => {
    await kv.set(MODEL, newModel);
};

export {
    delApiKey,
    getApiKey,
    getModel,
    getTemperature,
    setApiKey,
    setModel,
    setTemperature,
};
