## Dev

docker build image
```shell
docker build -t rust-wasm .
```

build wasm
```shell
docker run --rm -v $(pwd):/usr/src/app rust-wasm
```

run sample server
```shell
npx http-server
```