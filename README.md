# Magic Conch

## Introduction

> 海绵宝宝："为什么不问问神奇海螺呢？"

<center>
    <img src="./static/logo.svg" width="125px" alt="Magic Conch"/>
</center>

一款基于 ChatGPT 的对话机器人。

## Features

1. UI 实现新拟态风格
2. 封装了 OpenAI 的 API，支持免挂代理访问
3. 模拟 A/B 会话场景
4. 支持切换 model 和 temperature 参数
5. 支持内置密钥，方便个人使用

## Installation

```bash
docker build -f Dockerfile -t magic-conch . --no-cache
docker run -d -p 8000:8000 --restart=always --name "Magic-Conch" magic-conch
```

## Usage

> 密钥需自行前往[OpenAI 后台](https://beta.openai.com/account/api-keys)注册申请，密码自定，用于保护内置密钥。

```bash
deno task start --apiKey="内置密钥" --passwd="密码"
```

## Maintainers

[Senkita](https://github.com/Senkita)

## License

[MIT](LICENSE) &copy; [Senkita](https://github.com/Senkita)
