"use client";

import { Avatar } from "@nextui-org/react";
import { AvatarIcon } from "@nextui-org/shared-icons";
import { useEffect, useState } from "react";

export interface UserProps {
	userId: string;
}

function UserAvatar({ userId }: UserProps) {
	const [user, setUser] = useState();

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const getUser = async () => {
			const { results } = { results: undefined };
			setUser(results);
		};

		getUser();
	}, [userId]);

	return (
		<Avatar
			size="sm"
			className="text-neutral-500"
			/* name={user?.username}
			fallback={<AvatarIcon className="size-4 animate-pulse" />}
			src={user?.profile?.photo} */
		/>
	);
}

export default UserAvatar;
