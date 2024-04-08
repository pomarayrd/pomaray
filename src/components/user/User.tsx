
import { Role } from "@/lib/constants";
import type { User } from "@/types/scheme/user";
import { User as NextUser } from "@nextui-org/react";

export interface UserAvatarProps {
	user?: User;
}

function UserAvatar({ user }: UserAvatarProps) {

	return (
		<NextUser
			avatarProps={{ radius: "sm", src: user?.photo_url }}
			name={user?.display_name}
			description={(
				<div className="flex flex-center gap-2">
					<span>
						{user?.username}
					</span>
					{" - "}
					<span>
						{Role[user?.role as keyof typeof Role]}
					</span>
				</div>
			)}
		>

		</NextUser>
	);
}

export default UserAvatar;
