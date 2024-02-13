use wasm_bindgen::prelude::*;
use blurhash::{encode, decode};
use image::{load_from_memory, EncodableLayout, GenericImageView};

#[wasm_bindgen]
pub fn encode_image(data: &[u8], x_components: u32, y_components: u32) -> Result<String, JsValue> {
    let img = load_from_memory(data).map_err(|e| e.to_string())?;
    let (width, height) = img.dimensions();
    encode(
        x_components,
        y_components,
        width,       
        height,      
        img.to_rgba8().as_bytes(),
    ).map_err(|e| e.to_string().into())
}

#[wasm_bindgen]
pub fn decode_blurhash(blurhash: &str, width: u32, height: u32, punch: f32) -> Result<Vec<u8>, JsValue> {
    decode(blurhash, width, height, punch).map_err(|e| e.to_string().into())
}