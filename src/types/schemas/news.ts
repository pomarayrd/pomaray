import { NewsShortBy } from "@/lib/constants";
import { createEnumScheme, createOptionalStringScheme } from "@/lib/utils";
import { z } from "zod";

const ShortByEnumScheme = createEnumScheme(
	"Organizar por",
	Object.keys(NewsShortBy),
);

export const NewsSchema = z.object({
	_id: createOptionalStringScheme(),
	title: z.string().min(2).max(256),
	short_description: z.string(),
	content: z.string().max(6000),
	short_by: ShortByEnumScheme,
	post_by: z.string(),
	created_at: z.date(),
});

export type News = z.infer<typeof NewsSchema>;
