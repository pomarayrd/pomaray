"use server";

import { API } from "@/lib/constants";
import { fastFetch } from "@/lib/utils";
import type { SavePostResponse } from "@/types/actions";
import { type Post, PostScheme } from "@/types/scheme/posts";

export async function savePost(post: Post): Promise<SavePostResponse> {
	try {
		if (post.authors.length < 1) {
			return {
				errors: {
					authors: "El post parce no tener autores.",
				},
				success: false,
			};
		}

		const validation = PostScheme.safeParse(post);
		if (!validation.success) {
			const validationErrors = validation.error.flatten().fieldErrors;
			return {
				errors: {
					title: validationErrors.title?.at(0),
					banner_url: validationErrors.banner_url?.at(0),
					content: validationErrors.content?.at(0),
					short_description: validationErrors.short_description?.at(0),
					authors: validationErrors.authors?.at(0),
				},
			};
		}

		post.created_at = new Date();
		const url = API.getEndpoint("/posts");
		const response = await fastFetch(url, "POST", {
			body: Object(post),
		});

		if (!response.ok) {
			return {
				success: false,
			};
		}

		return {
			success: true,
		};
	} catch (err) {
		return {
			success: false,
		};
	}
}
