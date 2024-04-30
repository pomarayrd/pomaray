"use client";

import { Container } from "@/components/container";
import { Text } from "@/components/text";
import locale from "@/locales/error-page.json";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function ErrorPage() {
	const router = useRouter();
	return (
		<Container className="flex-center">
			<div className="relative flex flex-col flex-center gap-6 py-10">
				<Text as="h1" align="center" size="heading-6">
					{locale.TITLE}
				</Text>
			</div>
			<div className="flex justify-center gap-4">
				<Button as={Link} href="/" className="min-w-[200px]" color="primary">
					{locale.GO_HOME}
				</Button>
				<Button
					as="a"
					href="/"
					onPress={() => {
						router.back();
					}}
					variant="flat"
				>
					{locale.GO_BACk}
				</Button>
			</div>
		</Container>
	);
}

export default ErrorPage;
