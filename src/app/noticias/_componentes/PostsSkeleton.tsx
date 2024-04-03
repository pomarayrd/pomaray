import { Skeleton } from "@nextui-org/react";
import React from "react";

function PostsSkeleton() {
	return Array.from({ length: 20 }, (_, index) => {
		return (
			// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
			<div className="flex sm:flex-row flex-col gap-6" key={index}>
				<Skeleton disableAnimation className="rounded-lg">
					<div className="w-80 aspect-video rounded-lg bg-default-300" />
				</Skeleton>
				<div className="space-y-3 w-full">
					<Skeleton disableAnimation className="sm:w-4/5 h-8 rounded-lg">
						<div className="h-3 w-3/5 rounded-lg bg-default-200" />
					</Skeleton>
					<Skeleton disableAnimation className="sm:w-4/5 rounded-lg">
						<div className="sm:h-28 h-16 w-4/5 rounded-lg bg-default-200" />
					</Skeleton>
				</div>
			</div>
		);
	});
}

export default PostsSkeleton;
