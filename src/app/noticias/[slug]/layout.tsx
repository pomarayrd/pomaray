import type { Metadata } from "next";
import type { Post } from "@/types/scheme/posts";
import { API } from "@/lib/constants";

export async function generateMetadata({
	params: { slug },
}: {
	params: {
		slug: string;
	};
}): Promise<Metadata> {
	const res = await fetch(API.getEndpoint(`/posts/${slug}`));

	if (!res.ok) {
		return {};
	}

	const post = (await res.json()) as Post;
	return {
		title: `${post.title} - Pomaray`,
		description: post.short_description,
		authors: post.authors.map((author) => {
			return {
				url: author.author_photo_url,
				name: author.author_name,
			};
		}),
		openGraph: {
			title: `${post.title} - Pomaray`,
			description: post.short_description,
			images: post.banner_url,
			creators: post.authors.map((author) => author.author_name),
			modifiedTime: post.last_updated_at.toString(),
		},
	};
}

export default function NewsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
