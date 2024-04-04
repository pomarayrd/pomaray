"use client";

import { Container } from "@/components/container";
import GiphyMeme from "@/components/giphy";
import { Message } from "@/components/message";
import SubmitButton from "@/components/submit-button";
import { Text } from "@/components/text";
import usePostsStore, { INITIAL_PAGE } from "@/hooks/custom/usePosts";
import { useDebounce } from "@/hooks/useDebounce";
import { usePagination } from "@/hooks/usePagination";
import { Divider, Input, Link, Pagination, Switch } from "@nextui-org/react";
import { type ChangeEvent, useEffect, useState } from "react";
import PostCard from "./_componentes/PostCard";
import PostsSkeleton from "./_componentes/PostsSkeleton";

export default function PostPage() {
	const store = usePostsStore();

	const {
		currentPage,
		totalPages,
		skip,
		setTotalPages,
		setCurrentPage,
		handleChangePage,
	} = usePagination(INITIAL_PAGE);

	const debounceText = useDebounce(store.request.text, 500);
	const debounceShortBy = useDebounce(store.request.short_by, 500);
	const debounceSkip = useDebounce(skip, 500);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const fetchEffect = async () => {
			const total = await store.fetchData();
			setTotalPages(total ?? 0);
		};

		fetchEffect();
	}, [debounceText, debounceShortBy, debounceSkip]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		store.setSkip(0);
		setCurrentPage(1);
	}, [store.request.text]);

	const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
		store.setText(e.target.value);
	};
	const handleOnlyNews = (isSelected: boolean) =>
		store.setOnlyNews(Boolean(isSelected));

	return (
		<Container size="container" className="gap-8">
			<section className="flex flex-col justify-between mt-24 gap-6 max-w-[700px]">
				<div className="flex flex-col gap-4">
					<Text as="h1" size="heading-4">
						Últimas noticias
					</Text>
					<Divider className="md:hidden h-0.5 bg-primary" />
				</div>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						store.fetchData();
					}}
					className="grid sm:grid-cols-3 grid-cols-1 gap-4 w-full sm:pb-0 pb-6"
				>
					<Input
						value={store.request.text}
						name="text"
						size="sm"
						label="Título de la noticias"
						description="Lorem ipsum dolor sit."
						fullWidth
						className="sm:col-span-2"
						onChange={handleChangeText}
					/>
					<SubmitButton>Buscar</SubmitButton>

					<Switch
						isSelected={store.request.short_by === "created_at"}
						onValueChange={handleOnlyNews}
						name="onlyNews"
						defaultSelected
						size="sm"
					>
						Solo las más recientes.
					</Switch>
				</form>
				{store.error?.message && (
					<div className="flex flex-col flex-center min-h-[50vh]">
						{store.request.text === ":meme" && <GiphyMeme />}
						<Message variant="ghost" color="danger" className="p-10">
							{store.error.message}
							<Link
								color="danger"
								as={"button"}
								underline="always"
								onClick={() => store.fetchData()}
							>
								Volver a intentarlo.
							</Link>
						</Message>
					</div>
				)}
			</section>
			<section className="flex flex-col sm:gap-8 gap-16">
				{store.isLoading ? (
					<PostsSkeleton />
				) : (
					store?.posts?.map((post) => <PostCard key={post.id} post={post} />)
				)}
			</section>

			{totalPages > 1 && (
				<Pagination
					size="sm"
					radius="sm"
					className="mx-auto py-10"
					onChange={handleChangePage}
					total={totalPages}
					page={currentPage}
					initialPage={INITIAL_PAGE}
					showControls
					loop
				/>
			)}
		</Container>
	);
}
