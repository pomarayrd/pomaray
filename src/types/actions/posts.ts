import type { Post } from "../scheme/posts";

export type GetPostsAction = {
	error?:
		| string
		| {
				text?: string[];
				skip?: string[];
				limit?: string[];
				short_by?: string[];
		  };
	status?: number;
	totalPages?: number;
	results?: Post[];
};
