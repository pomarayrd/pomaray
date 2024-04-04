import { Container } from "@/components/container";
import { Text } from "@/components/text";
import { API } from "@/lib/constants";
import { numberParser } from "@/lib/utils";
import type { Post } from "@/types/scheme/posts";
import { Avatar, AvatarGroup, Image, Tooltip } from "@nextui-org/react";
import { EyeIcon } from "@nextui-org/shared-icons";
import { notFound } from "next/navigation";
import MarkdownArticle from "./_components/MarkdownRender";
import TitleSkeleton from "./_components/TitleSkeleton";

export default async function PostSlugPage({
	params,
}: { params: { slug: string } }) {
	let post: Post;
	try {
		const res = await fetch(API.getEndpoint(`/posts/${params.slug}`));

		if (!res.ok) {
			notFound();
		}

		post = (await res.json()) as Post;
	} catch (err) {
		notFound();
	}

	return (
		<Container>
			<section className="min-h-[50vh] mt-24 pb-10">
				{!post ? (
					<TitleSkeleton />
				) : (
					<div className="flex flex-col gap-8">
						<Text
							as="h1"
							className="capitalize md:text-5xl text-4xl text-balance"
							size="heading-5"
						>
							{post.title}
						</Text>

						<Image
							src={post.banner_url}
							alt={post.title}
							className="aspect-video w-full"
							classNames={{
								wrapper: "w-full h-full",
								img: "w-full h-full object-cover",
							}}
						/>
					</div>
				)}
				<div className="grid grid-cols-3 justify-between items-center py-10">
					{post.last_updated_at && (
						<div className="flex flex-col gap-2 w-full">
							<span className="text-sm opacity-60">Ultima actualización:</span>
							<span>
								{new Intl.DateTimeFormat("es-DO", {
									dateStyle: "medium",
									timeStyle: "short",
									timeZone: "America/Santo_Domingo",
								}).format(new Date(post.last_updated_at))}
							</span>
						</div>
					)}
					<div className="flex flex-center opacity-55 w-full">
						<Tooltip
							disableAnimation
							showArrow
							content={`Visto por ${post.views} personas`}
						>
							<div className="flex gap-2 items-center w-fit">
								<EyeIcon className="text-xl" />
								<Text>{numberParser(post.views)}</Text>
							</div>
						</Tooltip>
					</div>
					<div className="flex gap-4 justify-end items-center w-full">
						<Text size="label-base" className="sm:block hidden">
							Autores:
						</Text>
						<AvatarGroup isBordered>
							{post.authors.map((author) => (
								<Tooltip
									key={author.author_id}
									disableAnimation
									showArrow
									color={author.is_creator ? "primary" : "default"}
									content={
										author.is_creator
											? `Creador ${author.author_name}`
											: author.author_name
									}
								>
									<Avatar
										key={author.author_id}
										alt={author.author_name}
										src={author.author_photo_url}
										isFocusable={false}
										color={author.is_creator ? "primary" : "default"}
									/>
								</Tooltip>
							))}
						</AvatarGroup>
					</div>
				</div>
				<div>
					<Text as="h1" size="paragraph-xl" className="font-bold text-pretty">
						{post.short_description}
					</Text>
				</div>
			</section>

			<MarkdownArticle source={post.content} />
		</Container>
	);
}
