type ISettings = {
    model: string; // 模型
    apiKey: string; // API密钥
    temp: number; // 发散程度
    maxTokens: number; // 最大字节数
};

type IDialog = {
    passwdInputStatus: boolean; // 密码输入弹出框
    wrongPopupStatus: boolean; // 密码错误提示框
};

export type { ISettings, IDialog };
