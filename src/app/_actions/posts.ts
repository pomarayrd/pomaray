"use sever";

import { CONNECTION_ERROR } from "@/lib/constants";
import { buildUrl, fastFetch, objectToUrlParams } from "@/lib/utils";
import type { GetPostsAction } from "@/types/actions/posts";
import type { GetPostsRequest, Post } from "@/types/scheme/posts";
import { GetPostsRequestSchema } from "@/types/scheme/posts";

export async function getPosts(
	request: GetPostsRequest,
): Promise<GetPostsAction> {
	try {
		const validatedFields = GetPostsRequestSchema.safeParse(request);
		if (!validatedFields.success) {
			return {
				error: validatedFields.error.flatten().fieldErrors,
			};
		}

		const params = objectToUrlParams(request);

		const response = await fastFetch(buildUrl("/posts/search", params), "GET");
		if (!response.ok) {
			return {
				status: response.status,
			};
		}

		const { posts, total } = (await response.json()) as {
			posts: Post[];
			total: number;
		};

		return {
			results: posts,
			totalPages: total,
		};
	} catch (error) {
		console.log(error);
		return {
			error: error instanceof Error ? error.message : CONNECTION_ERROR,
		};
	}
}
