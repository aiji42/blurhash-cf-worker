import { encode_image } from './blurhash';

interface Env {}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const url = new URL(request.url);
		const imageUrl = url.searchParams.get('img');
		if (!imageUrl) {
			return new Response('img query parameter is required', { status: 400 });
		}

		const response = await fetch(imageUrl);
		const buffer = await response.arrayBuffer();
		const image = new Uint8Array(buffer);
		const hash = encode_image(image, 6, 6);

		return new Response(hash, {
			status: 200,
			headers: {
				'Access-Control-Allow-Origin': '*',
			},
		});
	},
};
