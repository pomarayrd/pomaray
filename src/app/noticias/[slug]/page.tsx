import { Container } from "@/components/container";
import { Text } from "@/components/text";
import { API } from "@/lib/constants";
import { cn, numberParser } from "@/lib/utils";
import type { Post } from "@/types/scheme/posts";
import {
	Avatar,
	AvatarGroup,
	Divider,
	Image,
	Link,
	Tooltip,
} from "@nextui-org/react";
import { EyeIcon } from "@nextui-org/shared-icons";
import { MDXRemote } from "next-mdx-remote/rsc";
import NextLink from "next/link";
import { notFound } from "next/navigation";
import TitleSkeleton from "./_components/TitleSkeleton";

export default async function RemoteMdxPage({
	params,
}: { params: { slug: string } }) {
	const res = await fetch(API.getEndpoint(`/posts/${params.slug}`));

	if (!res.ok) {
		notFound();
	}

	const post = (await res.json()) as Post;

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
				<div className="flex justify-between items-center py-10">
					<div className="opacity-55 w-full">
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
					<div className="flex gap-4 items-center">
						<Text size="label-base" className="sm:block hidden">
							Autores de esta noticia:
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
			<article className="flex flex-col gap-4">
				<MDXRemote
					source={post.content}
					components={{
						h1: ({ children, className, ...props }) => (
							<Text
								as="h1"
								className={cn("text-primary", className)}
								size="heading-4"
								{...props}
							>
								{children}
							</Text>
						),
						h2: ({ children, ...props }) => (
							<>
								<Text as="h2" size="heading-3" {...props}>
									{children}
								</Text>
								<Divider className="bg-primary" style={{ height: "1.3px" }} />
							</>
						),
						h3: ({ children, className, ...props }) => (
							<Text
								as="h3"
								className={cn("font-bold", className)}
								size="paragraph-base"
								{...props}
							>
								{children}
							</Text>
						),
						h5: ({ children, className, ...props }) => (
							<Text
								as="h5"
								className={cn("font-bold lea", className)}
								size="paragraph-lg"
								{...props}
							>
								{children}
							</Text>
						),
						h4: ({ children, ...props }) => (
							<Text as="h3" size="heading-3" {...props}>
								{children}
							</Text>
						),
						p: ({ children, ...props }) => {
							if (typeof children !== "string") {
								return children;
							}
							return <Text {...props}>{children}</Text>;
						},
						a: ({ children, className, href }) => (
							<Link
								as={NextLink}
								href={href}
								className={className}
								isExternal
								showAnchorIcon
							>
								{children}
							</Link>
						),
						blockquote: ({ children }) => (
							<Text
								as={"blockquote"}
								style={{
									margin: 0,
									padding: 10,
									backgroundColor: "#f9f9f9",
									borderLeftWidth: 5,
									borderLeftColor: "#ccc",
									fontStyle: "italic",
									opacity: 0.2,
								}}
								size="label-xs"
							>
								{children}
							</Text>
						),
						img: ({ src, width, height, className, alt }) => (
							<Image
								className={cn("aspect-video max-w-sm w-full", className)}
								width={width}
								height={height}
								src={src}
								alt={alt}
							/>
						),
					}}
				/>
			</article>
		</Container>
	);
}
