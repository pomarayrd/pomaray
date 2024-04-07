import { Text } from "@/components/text";
import { truncateText } from "@/lib/format";
import type { Post } from "@/types/scheme/posts";
import { Avatar, AvatarGroup, Image, Tooltip } from "@nextui-org/react";

function PostCard({ post }: { post: Post }) {
	const title = truncateText(post.title, 12);
	const description = truncateText(post.short_description, 30);

	return (
		<a
			href={`/noticias/${post.id}`}
			className="relative flex md:flex-row flex-col gap-4 md:hover:opacity-50 transition-opacity ease-linear md:h-[200px]"
			title="Ver mas detalles"
		>
			<div className="flex flex-start md:w-fit w-full">
				<Image
					src={post.banner_url}
					alt={post.title}
					loading="lazy"
					className="aspect-video w-full md:max-w-72"
					classNames={{
						wrapper: "w-full h-full",
						img: "w-full h-full object-cover",
					}}
				/>
			</div>
			<div className="flex flex-col gap-4 pt-2 lg:p-6 p-2 md:w-3/5 max-h-full">
				<Text
					className="capitalize text-foreground sm:text-2xl text-lg font-bold text-pretty"
					as={"h3"}
				>
					{title}
				</Text>
				<Text className="text-ellipsis sm:text-pretty lg:text-xl text-sm">
					{description}
				</Text>
				<AvatarGroup
					className="md:absolute place-self-start bottom-0 right-36"
					isBordered
					size="sm"
					max={3}
				>
					{post.authors.map((author) => (
						<Tooltip
							key={author.author_id}
							disableAnimation
							showArrow
							content={author.author_name}
						>
							<Avatar
								key={author.author_id}
								alt={author.author_name}
								src={author.author_photo_url}
								isFocusable={false}
							/>
						</Tooltip>
					))}
				</AvatarGroup>
			</div>
		</a>
	);
}

export default PostCard;
