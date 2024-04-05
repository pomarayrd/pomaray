"use client";

import { Container } from "@/components/container";
import Tiptap from "@/components/editor";
import SubmitButton from "@/components/submit-button";
import { Text } from "@/components/text";
import type { Post } from "@/types/scheme/posts";
import type { User } from "@/types/scheme/user";
import { Image, Input, Tab, Tabs, User as UserUI } from "@nextui-org/react";
import { type ChangeEvent, useState } from "react";

function NewPostsPage() {
	const { user } = {
		user: {
			id: "a-id-hex-example",
			username: "Me Example",
			profile: {
				display_name: "Test",
				photo: "https://dummyimage.com/500x500/23a630/fff.jpg",
			},
			role: "developer",
			sex: "Male",
		},
	} as {
		user: User;
	}; // useSession();
	const [editPost, setEditPost] = useState<Post>({
		title: "Nuevo post!",
		content: "Nuevo post",
		short_description: "",
		banner_url: "https://dummyimage.com/1920x1080/dddddd/000000",
		views: 0,
		last_updated_at: new Date().toISOString(),
		authors: [
			{
				author_id: user.id || "Unknown",
				author_name: user.profile.display_name,
				author_photo_url: user.profile.photo,
				is_creator: true,
			},
		],
	});

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setEditPost((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	return (
		<Container>
			<section className="mt-24">
				<Text size="heading-5" as="h1">
					Crear una nueva noticia
				</Text>
				<form action="">
					<div className="flex flex-col gap-12 py-10">
						<Input
							isRequired
							labelPlacement="outside"
							label="Titulo"
							placeholder="Titulo increíble"
							radius="sm"
							name="title"
							value={editPost.title}
							onChange={handleChange}
						/>

						<Input
							isRequired
							labelPlacement="outside"
							label="Descripción"
							placeholder="Descripción increíble"
							radius="sm"
							name="short_description"
							value={editPost.short_description}
							onChange={handleChange}
						/>

						<Input
							value={editPost.banner_url}
							isRequired
							labelPlacement="outside"
							label="URL del Banner"
							radius="sm"
							name="banner_url"
							onChange={handleChange}
						/>

						<div>
							<Text className="text-primary pb-2">Preview del banner</Text>
							<Image className="aspect-video" src={editPost.banner_url} />
						</div>
					</div>

					<Tabs variant="underlined">
						<Tab key="editor" title="Editor">
							<Tiptap />
						</Tab>
						<Tab key="preview" title="Vista previa" />
					</Tabs>

					<div className="px-2 py-4">
						<SubmitButton fullWidth>Crear noticia</SubmitButton>
					</div>
				</form>
				<div className="flex justify-between items-center gap-6 py-6 px-4">
					<div className="flex flex-center gap-4">
						<small>Creador por:</small>
						<UserUI
							name={user.username}
							description={user.profile.display_name}
							avatarProps={{
								src: user.profile.photo,
							}}
						/>
					</div>
				</div>
			</section>
		</Container>
	);
}

export default NewPostsPage;
