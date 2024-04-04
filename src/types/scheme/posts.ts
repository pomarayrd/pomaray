import { z } from "zod";

export const PostAuthorScheme = z.object({
	author_id: z.string(),
	author_name: z.string().min(1).max(256),
	author_photo_url: z.string(),
	is_creator: z.boolean().optional(),
});

export const PostScheme = z.object({
	id: z.string().optional(),
	title: z.string().min(16).max(128),
	short_description: z.string().min(16).max(500),
	banner_url: z.string(),
	content: z.string().min(100).max(6000),
	authors: z.array(PostAuthorScheme).min(1),
	views: z.number(),
	last_updated_at: z.string().optional(),
});

export const PostShortEnum = z.enum(["views", "created_at"]);

export const SearchPostsRequestSchema = z.object({
	text: z.string().max(128),
	skip: z.number(),
	limit: z.number(),
	short_by: PostShortEnum.optional(),
});

export type PostShort = z.infer<typeof PostShortEnum>;
export type SearchPostsRequest = z.infer<typeof SearchPostsRequestSchema>;
export type Post = z.infer<typeof PostScheme>;
