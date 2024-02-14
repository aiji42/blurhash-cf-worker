import * as imports from '../../pkg/blurhash_wasm_bg';
import WASM from '../../pkg/blurhash_wasm_bg.wasm';

const instance = new WebAssembly.Instance(WASM, { './blurhash_wasm_bg.js': imports });
imports.__wbg_set_wasm(instance.exports);

export * from '../../pkg/blurhash_wasm_bg';
