"use client";

import { Container } from "@/components/container";
import News from "@/components/news/NewsCard";
import { Text } from "@/components/text";
import {
	Button,
	Chip,
	Divider,
	Input,
	Pagination,
	Switch,
} from "@nextui-org/react";
import { useEffect, useState } from "react";

const initialFruits = ["Apple", "Banana", "Cherry", "Watermelon", "Orange"];

export default function Noticias() {
	const [fruits, setFruits] = useState(initialFruits);
	const [currentPage, setCurrentPage] = useState(1);
	const [isLoaded, setIsLoaded] = useState(false);

	const handleClose = (fruitToRemove: string) => {
		setFruits(fruits.filter((fruit) => fruit !== fruitToRemove));
		if (fruits.length === 1) {
			setFruits(initialFruits);
		}
	};

	useEffect(() => {
		const fetch = async () => {
			if (currentPage) {
			}
			setIsLoaded(false);
			return new Promise<void>((resolve) => {
				setTimeout(() => {
					setIsLoaded(true);
					resolve();
				}, 900);
			});
		};

		fetch();
	}, [currentPage]);

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const searchPage = Number.parseInt(urlParams.get("page") ?? "1", 10);
		setCurrentPage(searchPage);
	}, []);

	const handleChangePage = (page: number) => {
		setCurrentPage(page);
		const urlParams = new URLSearchParams(window.location.search);
		urlParams.set("page", page.toString());
		const newUrl = `${window.location.pathname}?${urlParams.toString()}`;
		window.history.replaceState({}, "", newUrl);
	};

	return (
		<Container size="container">
			<section className="flex flex-col justify-between">
				<div className="flex flex-col gap-4">
					<Text as="h1" size="heading-4">
						Últimas noticias
					</Text>
					<Divider className="sm:hidden h-0.5 bg-primary" />
				</div>
				<div className="flex flex-col justify-start items-start max-w-[800px] py-8">
					<div className="grid grid-cols-3 gap-4 w-full">
						<Input
							size="sm"
							label="Título de la noticias"
							description="Lorem ipsum dolor sit."
							fullWidth
							className="col-span-2"
						/>
						<Button
							isLoading={!isLoaded}
							className="py-6"
							radius="sm"
							color="primary"
						>
							Buscar
						</Button>
					</div>

					<div className="flex gap-4 w-full">
						<Switch defaultSelected size="sm">
							Solo las mas recientes
						</Switch>
						<div className="flex flex-wrap gap-2 py-6">
							{isLoaded &&
								fruits.map((fruit, i) => (
									<Chip
										color="primary"
										// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
										key={i}
										onClose={() => handleClose(fruit)}
										variant="flat"
									>
										{fruit}
									</Chip>
								))}
						</div>
					</div>
				</div>
			</section>
			<section className="flex flex-col gap-8">
				{Array.from({ length: 20 }).map((_, index) => (
					<News
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={index}
						isLoaded={isLoaded}
						authors={["John", "George", "Linda"]}
						title={`${index} - Lorem ipsum dolor sit.`}
						src="/assets/images/banner/noticias.png"
						description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem architecto ratione consectetur qui quas quam maiores quod quae doloribus fugiat."
					/>
				))}
			</section>

			<Pagination
				onChange={handleChangePage}
				total={10}
				page={currentPage}
				initialPage={1}
				size="sm" /*  */
				showControls
				radius="sm"
				className="mx-auto py-10"
			/>
		</Container>
	);
}
