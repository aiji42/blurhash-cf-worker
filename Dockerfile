FROM rust:latest

RUN curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh

WORKDIR /usr/src/app

COPY . .

CMD ["wasm-pack", "build"]