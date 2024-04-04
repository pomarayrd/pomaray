"use server";

import { fastFetch } from "@/lib/utils";

export type GifData = {
	url?: string;
	title?: string;
};

export async function getRandomGif(): Promise<GifData> {
	try {
		const api_key = process.env.GIPHY_API_KEY;
		const url = `https://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=meme&rating=g`;

		const res = await fastFetch(url, "GET");
		if (!res.ok) {
			return {};
		}

		const {
			data: {
				images: {
					original: { webp },
				},
				title,
			},
		} = (await res.json()) as {
			data: {
				images: {
					original: {
						webp: string;
					};
				};
				title: string;
			};
		};

		return { url: webp, title: title };
	} catch (err) {
		return {};
	}
}
