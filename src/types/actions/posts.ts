import type { Post } from "@/types/scheme/posts";

export type SavePostResponse = {
	errors?: {
		[key in keyof Post]?: string;
	};
	isSuccess?: boolean;
};
