![Magic-Conch](https://socialify.git.ci/Senkita/Magic-Conch/image?description=1&font=KoHo&forks=1&issues=1&logo=https%3A%2F%2Fraw.githubusercontent.com%2FSenkita%2FMagic-Conch%2Fmain%2Fstatic%2Flogo.svg&name=1&pattern=Formal%20Invitation&pulls=1&stargazers=1&theme=Auto)

## Introduction

> 海绵宝宝："为什么不问问神奇海螺呢？"
>
> 预览：[神奇海螺](https://chat.senkita.cc)

一款基于 GPT-3 的对话机器人。

## Features

1. UI 实现新拟态风格
2. 封装了 OpenAI 的 API，支持免挂代理访问
3. 模拟 A/B 会话场景
4. 支持切换 model 和 temperature 参数
5. 支持内置密钥，方便个人使用

## Installation

> 先决：
>
> 1. 自行更新订阅至`/data/clash/config.yaml`
> 2. 自行修改`Dockerfile`中的配置

```bash
# if you choose docker-compose
docker compose build
docker compose up

# if you choose docker
docker network create --driver=bridge vpn-network

docker build . -f ./clash/Dockerfile -t clash --no-cache
docker run -it -d -p 7890:7890 -v "/data/clash:/app/clash:Z" --restart=always --name="Clash" --net="vpn-network" clash

docker build -f ./Dockerfile -t magic-conch . --no-cache
docker run -d -p 8000:8000 --restart=always --name="Magic-Conch" --net="vpn-network" magic-conch
```

## Usage

> 密钥需自行前往[OpenAI 后台](https://beta.openai.com/account/api-keys)注册申请，密码自定，用于保护内置密钥。

```bash
deno task start --apiKey="内置密钥" --passwd="密码"
```

## Maintainers

<a href="https://github.com/Senkita/Magic-Conch/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Senkita/Magic-Conch" />
</a>

## License

[MIT](LICENSE) &copy; [Senkita](https://github.com/Senkita)
