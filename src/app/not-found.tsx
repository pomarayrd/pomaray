import { Container } from "@/components/container";
import { Text } from "@/components/text";
import { Button, Link } from "@nextui-org/react";

export default function NotFound() {
	return (
		<Container>
			<div className="relative flex flex-col gap-6 py-10">
				<Text as="h1" align="center" size="heading-6">
					Parece que la pagina que buscas no existe.
				</Text>
				<Text size="paragraph-lg" align="center">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit,
					impedit.
				</Text>
				<img
					className="absolute -top-10 right-0 rotate-12"
					src="/assets/images/not-found.png"
					alt=""
					width={100}
				/>
				<img
					className="absolute -bottom-10 left-5 -rotate-12"
					src="/assets/images/not-found.png"
					alt=""
					width={100}
				/>
			</div>
			<div className="flex justify-center gap-4">
				<Button as={"a"} href="/" className="px-20" color="primary">
					Ir a incio
				</Button>
				<Link
					href="https://instagram.com/"
					color="danger"
					showAnchorIcon
					isExternal
				>
					Ver Instagram
				</Link>
			</div>
		</Container>
	);
}
