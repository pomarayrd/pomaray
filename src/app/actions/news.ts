"use server";

import type { NewsShortBy } from "@/lib/constants";
import type { News } from "@/types/schemas/news";

export async function getNews(
	short_by: keyof typeof NewsShortBy,
): Promise<News[]> {
	try {
	} catch (err) {}
}
