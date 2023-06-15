// apiKey
const fetchSetApiKey = async (newApiKey: string) => {
    return await fetch(`/api/setApiKey?newApiKey=${newApiKey}`, {
        method: "POST",
    });
};

const fetchDelApiKey = async () => {
    return await fetch(`/api/delApiKey?del=true`, {
        method: "POST",
    });
};

// Model
const fetchSetModel = async (newModel: string) => {
    return await fetch(`/api/setModel?newModel=${newModel}`, {
        method: "POST",
    });
};

// temperature
const fetchSetTemp = async (newTemp: string) => {
    return await fetch(`/api/setTemp?newTemp=${newTemp}`, {
        method: "POST",
    });
};

export { fetchDelApiKey, fetchSetApiKey, fetchSetModel, fetchSetTemp };
