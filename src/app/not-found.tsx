import { Container } from "@/components/container";
import { Text } from "@/components/text";
import locale from "@/locales/not-found.json";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function NotFound() {
	return (
		<Container className="flex-center">
			<div className="relative flex flex-col flex-center gap-6 py-10">
				<Text as="h1" align="center" size="heading-6">
					{locale.TITLE}
				</Text>
				<Text className="max-w-[60ch]" size="paragraph-lg" align="center">
					{locale.DESCRIPTION}
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
				<Button as={Link} href="/" className="min-w-[200px]" color="primary">
					{locale.GO_HOME}
				</Button>
				<Button
					as={"a"}
					target="_blank"
					referrerPolicy="no-referrer"
					href="https://instagram.com/"
					color="danger"
					variant="faded"
				>
					{locale.VIEW_INSTAGRAM}
				</Button>
			</div>
		</Container>
	);
}
