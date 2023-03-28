FROM debian:latest

WORKDIR /app
SHELL ["/bin/bash", "-c"]

COPY ./sources.list /etc/apt/

RUN apt update && \
    apt install wget gzip -y && \
    wget --no-check-certificate -q https://github.com/Dreamacro/clash/releases/download/v1.14.0/clash-linux-amd64-v1.14.0.gz && \
    gzip -d clash-linux-amd64-v1.14.0.gz -N && \
    chmod +x /app/clash-linux-amd64 && \
    mkdir clash

EXPOSE 7890

ENTRYPOINT [ "/app/clash-linux-amd64", "-d", "/app/clash", "-f", "/app/clash/config.yaml" ]