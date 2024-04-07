"use client";

import { savePost } from "@/app/_actions/posts";
import ConfirmModal from "@/components/confirm-modal";
import { Container } from "@/components/container";
import Editor from "@/components/editor";
import { Message } from "@/components/message";
import { Text } from "@/components/text";
import type { SavePostResponse } from "@/types/actions/posts";
import type { Post } from "@/types/scheme/posts";
import type { User } from "@/types/scheme/user";
import { Image, Input, Modal, ModalContent, Textarea, User as UserUI } from "@nextui-org/react";
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

	const [response, setResponse] = useState<SavePostResponse>()
	const [editPost, setEditPost] = useState<Post>({
		title: "Una noticia!",
		content: "**Cuerpo de la noticia***",
		short_description: "",
		banner_url: "https://dummyimage.com/1920x1080/dddddd/000000",
		views: 0,
		last_updated_at: new Date(),
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

	const handleEditorChange = (value: string) => setEditPost((prevState) => ({
		...prevState,
		content: value,
	}));

	const handleConfirm = async () => {
		const response = await savePost(editPost)
		setResponse(response)
	}

	return (
		<Container>
			<section className="mt-24">
				<Text size="heading-5" as="h1">
					Crear una nueva noticia
				</Text>



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
						errorMessage={response?.errors?.title}
					/>

					<Textarea
						isRequired
						labelPlacement="outside"
						label="Descripción"
						placeholder="Descripción increíble"
						radius="sm"
						name="short_description"
						value={editPost.short_description}
						onChange={handleChange}
						errorMessage={response?.errors?.short_description}
					/>

					<Input
						value={editPost.banner_url}
						isRequired
						labelPlacement="outside"
						label="URL del Banner"
						description="La resolución recomendada es 1920x1080"
						radius="sm"
						name="banner_url"
						onChange={handleChange}
						errorMessage={response?.errors?.banner_url}
					/>

					<div>
						<Text className="b-2">Preview del banner</Text>
						<Image className="aspect-video" src={editPost.banner_url} />
					</div>
				</div>

				<div>
					<Text size="paragraph-sm">Editor</Text>
					{response?.errors?.content &&
						<Message className="min-w-full text-xs" color="danger">{response?.errors?.content}</Message>}

					<div className="pt-4">
						<Editor value={editPost.content} onChange={handleEditorChange} />
					</div>

				</div>
				<div className="py-4">
					<ConfirmModal intensity="hard" title="Publicar una nueva noticia" onConfirm={handleConfirm} >
						<Text>Estas seguro que desea publicar esta noticia a todo el publico.</Text>
						<Text as="small" size="label-xs">Puede ser editada después de su publicación.</Text>
					</ConfirmModal>
				</div>
				<div className="flex justify-between items-center gap-6 py-6">
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
		</Container >
	);
}

export default NewPostsPage;
