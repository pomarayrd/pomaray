"use client";

import { login } from "@/app/actions/auth";
import { Container } from "@/components/container";
import { Message } from "@/components/message";
import { Text } from "@/components/text";
import { Button, Input, Link } from "@nextui-org/react";
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
			Acceder
		</Button>
	);
}

export default function Login() {
	const router = useRouter();
	const [usernameError, setUsernameError] = useState("");
	const [passwordError, setPasswordError] = useState("");

	const resetState = () => {
		setPasswordError("");
		setUsernameError("");
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
		event.target.name === "password"
			? setPasswordError("")
			: setUsernameError("");

	const setErrorsState = (error: string) => {
		const errorsMessage = JSON.parse(error);
		if (errorsMessage.username) {
			setUsernameError(errorsMessage.username);
		}
		if (errorsMessage.password) {
			setPasswordError(errorsMessage.password);
		}
	};

	return (
		<Container className="flex-center">
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
							resetState();
							const { error, results } = await login(data);
							if (results) {
								router.push("/admin");
								return;
							}

							if (error) setErrorsState(error);
						}}
					>
						<div className="flex flex-col gap-6 py-4">
							<Input
								isRequired
								size="sm"
								name="username"
								label="Nombre de usuario"
								onChange={handleChange}
								errorMessage={usernameError}
							/>
							<Input
								errorMessage={passwordError}
								isRequired
								size="sm"
								name="password"
								onChange={handleChange}
								label="Contraseña"
							/>
							<SubmitButton />
						</div>
					</form>
					<Text size="paragraph-sm" align="center">
						Ya he realizado este paso.{" "}
						<Link
							underline="hover"
							href="/admin"
							showAnchorIcon
							className="cursor-pointer"
						>
							Ir al panel administrativo.
						</Link>
					</Text>
				</div>
			</section>
		</Container>
	);
}
