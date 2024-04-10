import { createStringScheme } from "@/lib/schemes-creator";
import { z } from "zod";
import ObjectIdScheme from "./objectid";

export const PostAuthorScheme = z.object({
	author_id: ObjectIdScheme,
	author_name: z.string().min(1).max(256),
	author_photo_url: z.string(),
	is_creator: z.boolean().optional(),
});

export const PostScheme = z.object({
	id: ObjectIdScheme,
	title: createStringScheme("El titulo", {
		min_length: 16,
		max_length: 128,
	}),
	short_description: createStringScheme("La descripción", {
		min_length: 16,
		max_length: 500,
	}),
	banner_url: z.string().url({
		message: "La URL del Banner debe ser una url valida.",
	}),
	content: createStringScheme("El contenido", {
		min_length: 100,
		max_length: 6000,
	}),
	authors: z.array(PostAuthorScheme).min(1, {
		message: "Una noticia debe tener un mínimo de 1 creador.",
	}),
	views: z.number(),
	last_updated_at: z.date(),
	created_at: z.date().optional(),
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
