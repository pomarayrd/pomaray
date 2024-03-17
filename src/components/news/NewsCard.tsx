import { Text } from "@/components/text";
import { cn } from "@/lib/utils";
import { AvatarGroup, Image } from "@nextui-org/react";
import UserAvatar from "../user/User";

export interface NewsProps {
	src?: string;
	className?: string;

	title?: React.ReactNode;
	description?: React.ReactNode;

	authors?: string[];
}

export default function News({
	src,
	className,

	title,
	description,

	authors,
}: NewsProps) {
	return (
		<div className={cn("grid grid-cols-4 justify-between w-full", className)}>
			<div className="flex gap-4 col-span-3">
				<div>
					<Image src={src} width={300} />
				</div>
				<div>
					<Text as="h3" size="paragraph-xl" className="font-bold text-3xl">
						{title}
					</Text>
					<Text>{description}</Text>
				</div>
			</div>
			<div className="h-full w-full flex items-end">
				{authors && (
					<AvatarGroup size="sm" max={3} total={authors.length}>
						{authors.map((author) => (
							<UserAvatar userId={author} />
						))}
					</AvatarGroup>
				)}
			</div>
		</div>
	);
}
