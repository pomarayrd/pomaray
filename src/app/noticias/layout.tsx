import type { Metadata } from "next";
import locale from "@/locales/posts.json";

export const metadata: Metadata = {
	title: locale.METADATA.NAME,
	description: locale.METADATA.DESCRIPTION,
	openGraph: {
		title: locale.METADATA.NAME,
		description: locale.METADATA.DESCRIPTION,
		images: locale.METADATA.BANNER,
	},
};

export default function NewsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
