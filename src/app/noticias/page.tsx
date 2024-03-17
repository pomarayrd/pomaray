"use client";
import { Container } from "@/components/container";
import News from "@/components/news/NewsCard";
import { Text } from "@/components/text";
import { Button, Chip, Divider, Input, Switch } from "@nextui-org/react";
import { useState } from "react";

const initialFruits = ["Apple", "Banana", "Cherry", "Watermelon", "Orange"];

export default function Noticias() {
	const [fruits, setFruits] = useState(initialFruits);

	const handleClose = (fruitToRemove: string) => {
		setFruits(fruits.filter((fruit) => fruit !== fruitToRemove));
		if (fruits.length === 1) {
			setFruits(initialFruits);
		}
	};
	return (
		<Container size="container">
			<section className="flex flex-col justify-between mt-20">
				<div className="flex flex-col gap-4">
					<Text as="h1" size="heading-4">
						Ultimas noticias
					</Text>
					<Divider className="sm:hidden h-0.5 bg-primary" />
				</div>
				<div className="flex flex-col justify-start items-start max-w-[800px] py-8">
					<div className="grid grid-cols-3 gap-4 w-full">
						<Input
							size="sm"
							label="Titulo de la noticias"
							description="Lorem ipsum dolor sit."
							fullWidth
							className="col-span-2"
						/>
						<Button className="py-6" radius="sm" color="primary">
							Buscar
						</Button>
					</div>

					<div className="flex gap-4 w-full">
						<Switch defaultSelected size="sm">
							Solo las mas recientes
						</Switch>
						<div className="flex flex-wrap gap-2 py-6">
							{fruits.map((fruit) => (
								<Chip
									color="primary"
									key={fruit}
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
				{Array.from({ length: 20 }, (_, i) => {
					return (
						<News
							authors={["John", "George", "Linda"]}
							description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, ipsa."
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={i}
							title="Lorem ipsum dolor sit."
							src="/assets/images/banner/noticias.png"
						/>
					);
				})}
			</section>
		</Container>
	);
}
