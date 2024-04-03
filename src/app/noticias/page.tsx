"use client";

import { Container } from "@/components/container";
import { Message } from "@/components/message";
import SubmitButton from "@/components/submit-button";
import { Text } from "@/components/text";
import { useDebounce } from "@/hooks/useDebounce";
import { useFetch } from "@/hooks/useFetch";
import { usePagination } from "@/hooks/usePagination";
import { API } from "@/lib/constants";
import type { Post } from "@/types/scheme/posts";
import { Divider, Input, Link, Pagination, Switch } from "@nextui-org/react";
import { type ChangeEvent, useEffect, useState } from "react";
import PostCard from "./_componentes/PostCard";
import PostsSkeleton from "./_componentes/PostsSkeleton";

const INITIAL_PAGE = 1;
const LIMIT = 20;

export default function PostPage() {
	const [text, setText] = useState("");
	const [onlyNews, setOnlyNews] = useState(false);

	const {
		currentPage,
		totalPages,
		skip,
		setTotalPages,
		setCurrentPage,
		handleChangePage,
	} = usePagination(INITIAL_PAGE);

	const debounceText = useDebounce(text, 500);
	const debounceOnlyNews = useDebounce(onlyNews, 500);
	const debounceSkip = useDebounce(skip, 500);

	const { isLoading, error, refetch, results } = useFetch<{
		max_results: number;
		posts: Post[];
	}>(
		API.getEndpoint(
			`/posts/search?limit=${LIMIT}&skip=${debounceSkip}&text=${debounceText}&short_by=${
				debounceOnlyNews ? "created_at" : "views"
			}`,
		),
		{ onFetch },
	);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		setCurrentPage(1);
	}, [debounceText]);

	function onFetch(body: { max_results?: number }) {
		setTotalPages(Math.ceil((body.max_results ?? 1) / LIMIT));
	}

	const handleChangeText = (e: ChangeEvent<HTMLInputElement>) =>
		setText(e.target.value);
	const handleOnlyNews = (isSelected: boolean) => setOnlyNews(isSelected);

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
						refetch();
					}}
					className="grid sm:grid-cols-3 grid-cols-1 gap-4 w-full sm:pb-0 pb-6"
				>
					<Input
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
						isSelected={onlyNews}
						onValueChange={handleOnlyNews}
						name="onlyNews"
						defaultSelected
						size="sm"
					>
						Solo las más recientes.
					</Switch>
				</form>
				{error && (
					<div className="flex flex-center min-h-[50vh]">
						<Message
							variant="solid"
							color={error.status >= 500 ? "danger" : "warning"}
							className="p-10 max-w-[600px]"
						>
							{error.message}{" "}
							<Link
								color={error.status >= 500 ? "danger" : "warning"}
								as={"button"}
								underline="always"
								onClick={() => refetch()}
							>
								Volver a intentarlo.
							</Link>
						</Message>
					</div>
				)}
				{isLoading}
			</section>
			<section className="flex flex-col sm:gap-8 gap-16">
				{isLoading ? (
					<PostsSkeleton />
				) : (
					results?.posts?.map((post) => <PostCard key={post.id} post={post} />)
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
