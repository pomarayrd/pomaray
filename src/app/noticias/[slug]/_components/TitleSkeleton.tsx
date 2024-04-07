import { Skeleton } from "@nextui-org/react";

function TitleSkeleton() {
	return (
		<div className="flex flex-col gap-6">
			<Skeleton disableAnimation className="size-full h-20  rounded-lg" />

			<Skeleton disableAnimation className="w-full h-[60vh] rounded-lg" />

			<div className="flex justify-between items-center w-full gap-4">
				<Skeleton className="flex rounded-full w-full h-6" />
				<Skeleton className="flex rounded-full size-12" />
			</div>
		</div>
	);
}

export default TitleSkeleton;
