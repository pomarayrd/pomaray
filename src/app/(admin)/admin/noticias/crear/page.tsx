"use client";

import { savePost } from "@/app/_actions/posts";
import Editor from "@/components/editor";
import { Message } from "@/components/message";
import { ActionModal, SuccessModal, useSuccessModal } from "@/components/modal";
import { Text } from "@/components/text";
import useSession from "@/hooks/custom/useSessions";
import type { SavePostResponse } from "@/types/actions/posts";
import type { Post } from "@/types/scheme/posts";
import { Image, Input, Spinner, Textarea, User as UserUI } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { type ChangeEvent, useEffect, useState } from "react";

function NewPostsPage() {
	const router = useRouter()

	const { user } = useSession();
	const { isSuccessOpen, openSuccessModal, openSuccessModalChange } = useSuccessModal();

	const [response, setResponse] = useState<SavePostResponse>()
	const [editPost, setEditPost] = useState({
		title: "Una noticia!",
		content: "**Cuerpo de la noticia***",
		short_description: "",
		banner_url: "https://dummyimage.com/1920x1080/dddddd/000000",
		views: 0,
		last_updated_at: new Date(),
		authors: user
			? [
				{
					author_id: user.id,
					author_name: user.display_name,
					author_photo_url: user.photo_url,
					is_creator: true,
				},
			]
			: [],
	});

	useEffect(() => {
		if (user) {
			setEditPost(prevEditPost => ({
				...prevEditPost,
				authors: [
					{
						author_id: user.id,
						author_name: user.display_name,
						author_photo_url: user.photo_url,
						is_creator: true,
					},
				],
			}));
		}
	}, [user]);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setEditPost((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleContentChange = (value: string) => {
		return setEditPost((prevState) => ({
			...prevState,
			content: value,
		}));
	};

	const handleConfirmButton = async () => {
		const response = await savePost(editPost)
		setResponse(response)
		if (response.isSuccess) {
			openSuccessModal()
		}
	}

	const handleSuccessButton = () => {
		router.push("/noticias")
	}

	if (!user) {
		return <div className="flex flex-center min-h-[80vh]">
			<Spinner label="Cargando formulario" />
		</div>

	}

	return (
		<>
			<section className="py-12">
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
						<Editor value={editPost.content} onChange={handleContentChange} />
					</div>

				</div>
				<div className="py-4">
					<ActionModal intensity="hard" title="Publicar una nueva noticia" onConfirm={handleConfirmButton} >
						<Text>Estas seguro que desea publicar esta noticia a todo el publico.</Text>
						<Text as="small" size="label-xs">Puede ser editada después de su publicación.</Text>
					</ActionModal>
				</div>
				{
					response?.isSuccess === false &&
					<Message
						className="w-full"
						variant="solid"
						color="danger"
					>
						Hubo un error al subir la noticia, por favor inténtelo de nuevo.
					</Message>
				}
				<div className="flex flex-col gap-4 py-6 w-full">
					<div className="flex gap-4">
						<small>Creador {String(response?.isSuccess)}:</small>
						<UserUI
							name={user.username}
							description={user.display_name}
							avatarProps={{
								src: user.photo_url,
							}}
						/>
					</div>
				</div>
			</section>
			<SuccessModal
				isOpen={isSuccessOpen}
				onConfirm={handleSuccessButton}
				onOpenChange={openSuccessModalChange}
				title="Se creo la noticia exitosamente."
				buttonLabel="Ir a noticias."
				children={(
					<>
						<Text>Se ha publicado la noticia correctamente. Disfrute del confetti!</Text>
						<Text size="label-sm">Quiere navegar a la pagina de noticias?</Text>
					</>
				)}
			/>
		</>
	);
}

export default NewPostsPage;
