# blurhash cloudflare workers
This is a simple cloudflare worker that uses blurhash to generate a placeholder image for a given image url.

## Build wasm with rust

docker build image
```shell
docker build -t rust-wasm .
```

build wasm
```shell
docker run --rm -v $(pwd):/usr/src/app rust-wasm
```

## Run server

```shell
cd worker && yarn dev
```
