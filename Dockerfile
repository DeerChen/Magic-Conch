FROM denoland/deno:alpine-1.31.0

EXPOSE 8000

WORKDIR /app

COPY . /app

RUN deno cache main.ts

ENV all_proxy=http://clash:7890

CMD ["run", "--allow-net", "-A", "--watch=static/,routes/", "dev.ts", "--apiKey=内置密钥", "--passwd=密码"]
