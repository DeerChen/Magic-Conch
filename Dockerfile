FROM denoland/deno:latest

EXPOSE 8000

WORKDIR /app

COPY . /app

RUN deno cache main.ts

CMD ["run", "--allow-net", "-A", "--watch=static/,routes/", "dev.ts", "--apiKey=内置密钥", "--passwd=密码"]