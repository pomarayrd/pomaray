"use client";

import { login } from "@/app/actions/auth";
import { Container } from "@/components/container";
import { Message } from "@/components/message";
import { Text } from "@/components/text";
import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFormStatus } from "react-dom";

function SubmitButton() {
	const { pending } = useFormStatus();

	return (
		<Button
			color="primary"
			size="md"
			isLoading={pending}
			type="submit"
			aria-disabled={pending}
		>
			Acceder {String(pending)}
		</Button>
	);
}

export default function Login() {
	const router = useRouter();
	const [message, setMessage] = useState("");

	return (
		<Container>
			<section className="max-w-[320px]">
				<div className="flex flex-col flex-center gap-6">
					<Text as="h1" align="center" size="heading-4">
						Pomaray Admin
					</Text>
					<Text align="center" size="label-sm">
						Este formulario es privado, tal vez no puedas acceder.
					</Text>
				</div>
				<div>
					<form
						action={async (data: FormData) => {
							const { message, results } = await login(data);
							if (results) {
								router.push("/admin");
								return;
							}
							setMessage(message);
						}}
					>
						<div className="flex flex-col gap-6 py-4">
							<Input
								isRequired
								size="sm"
								name="username"
								label="Nombre de usuario"
							/>
							<Input isRequired size="sm" name="password" label="Contraseña" />
							<SubmitButton />
						</div>
					</form>
					{message && (
						<Message variant="ghost" color="danger">
							{message}
						</Message>
					)}
				</div>
			</section>
		</Container>
	);
}
