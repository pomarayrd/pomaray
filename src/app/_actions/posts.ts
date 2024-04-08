"use server";

import { API } from "@/lib/constants";
import { fastFetch } from "@/lib/utils";
import type { SavePostResponse } from "@/types/actions/posts";
import { type Post, PostScheme } from "@/types/scheme/posts";

export async function savePost(post: Post): Promise<SavePostResponse> {
	try {
		const validation = PostScheme.safeParse(post);
		if (!validation.success) {
			const validationErrors = validation.error.flatten().fieldErrors;
			return {
				errors: {
					title: validationErrors.title?.at(0),
					banner_url: validationErrors.banner_url?.at(0),
					content: validationErrors.content?.at(0),
					short_description: validationErrors.short_description?.at(0),
				},
			};
		}

		post.created_at = new Date();
		console.log(post);

		const url = API.getEndpoint("/posts");
		const response = await fastFetch(url, "POST", JSON.stringify(post));

		if (!response.ok) {
			return {
				isSuccess: false,
			};
		}

		return {
			isSuccess: true,
		};
	} catch (err) {
		return {
			isSuccess: false,
		};
	}
}