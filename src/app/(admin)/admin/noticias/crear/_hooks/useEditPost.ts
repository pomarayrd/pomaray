import useSession from "@/hooks/custom/useSessions";
import type { Post } from "@/types/scheme/posts";
import { type Dispatch, type SetStateAction, useState } from "react";

const useEditPost = (): [Post, Dispatch<SetStateAction<Post>>] => {
	const { user } = useSession();

	const defaultEditData = {
		title: "Una noticia!",
		content: "**Cuerpo de la noticia***",
		short_description: "",
		banner_url: "https://dummyimage.com/1920x1080/dddddd/000000",
		views: 0,
		last_updated_at: new Date(),
	};
	const defaultUserData = "Unknown";

	const [editPost, setEditPost] = useState<Post>({
		...defaultEditData,
		authors: [
			{
				author_id: user?.id ?? defaultUserData,
				author_name: user?.display_name ?? defaultUserData,
				author_photo_url: user?.photo_url ?? defaultUserData,
				is_creator: true,
			},
		],
	});

	return [editPost, setEditPost];
};

export default useEditPost;
