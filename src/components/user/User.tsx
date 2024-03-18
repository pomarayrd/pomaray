"use client";

import { getUserById } from "@/app/actions/user";
import type { User } from "@/types/schemas/user";
import { Avatar } from "@nextui-org/react";
import { AvatarIcon } from "@nextui-org/shared-icons";
import { useEffect, useState } from "react";

export interface UserProps {
	userId: string;
}

function UserAvatar({ userId }: UserProps) {
	const [user, setUser] = useState<User>();

	useEffect(() => {
		const getUser = async () => {
			const { results } = await getUserById(userId);
			setUser(results);
		};

		getUser();
	}, [userId]);

	return (
		<Avatar
			size="sm"
			className="text-neutral-500"
			name={user?.username}
			fallback={
				<AvatarIcon className="size-4 animate-pulse" />
			}
			src={user?.profile.photo}
		/>
	);
}

export default UserAvatar;
