import { Text } from "@/components/text";
import { UserAvatar } from "@/components/user";
import { cn } from "@/lib/utils";
import { AvatarGroup, Image, Skeleton } from "@nextui-org/react";

export interface NewsProps {
	src?: string;
	className?: string;

	title?: React.ReactNode;
	description?: React.ReactNode;
	authors?: string[];

	isLoaded?: boolean;
}

export default function News({
	src,
	className,

	title,
	description,
	authors,

	isLoaded = false
}: NewsProps) {
	return (
		<div className={cn("grid grid-cols-4 justify-between w-full", className)}>
			<div className="flex gap-4 col-span-3">
				<div>
					<Image isLoading={!isLoaded} loading={"lazy"} src={src} width={400} className="aspect-video" />
				</div>
				<div className="flex flex-col gap-2">
					<Skeleton className="rounded-xl" isLoaded={isLoaded}>
						<Text as="h3" size="paragraph-xl" className="font-bold text-3xl">
							{title}
						</Text>
					</Skeleton>
					<Skeleton className="rounded-xl" isLoaded={isLoaded}>
						<Text>{description}</Text>
					</Skeleton>
				</div>
			</div>
			<div className="h-full w-full flex items-end">
				{(isLoaded && authors) && (
					<AvatarGroup className="text-foreground/50" size="sm" max={3} total={authors.length}>
						{authors.map((author) => (
							<UserAvatar key={author} userId={author} />
						))}
					</AvatarGroup>
				)}
			</div>
		</div>
	);
}
