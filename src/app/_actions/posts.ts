"use server";

import { API } from "@/lib/constants";
import { fastFetch } from "@/lib/utils";
import type { SavePostResponse } from "@/types/actions/posts";
import { type Post, PostScheme } from "@/types/scheme/posts";

export async function savePost(post: Post): Promise<SavePostResponse> {
	try {
		console.log("Entramos en la funcion");

		const validation = PostScheme.safeParse(post);
		if (!validation.success) {
			const validationErrors = validation.error.flatten().fieldErrors;
			console.log(
				`Hubo otro error: ${JSON.stringify(
					validationErrors,
				)} , ${JSON.stringify(post)}`,
			);
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
		const url = API.getEndpoint("/posts");
		const response = await fastFetch(url, "POST", {
			body: Object(post),
		});

		if (!response.ok) {
			console.log("No se subio");
			return {
				isSuccess: false,
			};
		}

		console.log("Se subio un post");

		return {
			isSuccess: true,
		};
	} catch (err) {
		console.log(err);

		return {
			isSuccess: false,
		};
	}
}
