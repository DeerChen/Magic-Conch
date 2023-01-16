type ISettings = {
    model: string; // 模型
    apiKey: string; // API密钥
    temp: number; // 发散程度
    maxTokens: number; // 最大字节数
};

type IPasswd = {
    openDialog: boolean;
    passwd: string;
};

export type { ISettings, IPasswd };
