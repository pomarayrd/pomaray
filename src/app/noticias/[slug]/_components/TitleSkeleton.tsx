import { Skeleton } from "@nextui-org/react";

function TitleSkeleton() {
	return (
		<div className="flex sm:flex-row flex-col gap-6">
			<Skeleton disableAnimation className="w-full h-52 rounded-lg">
				<div />
			</Skeleton>
			<div className="space-y-3 w-full">
				<Skeleton disableAnimation className="size-full rounded-lg">
					<div />
				</Skeleton>
				<Skeleton disableAnimation className="w-full h-20 rounded-lg">
					<div />
				</Skeleton>
			</div>
		</div>
	);
}

export default TitleSkeleton;
