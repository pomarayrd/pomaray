"use client";

import { login } from "@/app/_actions/auth";
import { Container } from "@/components/container";
import { Message } from "@/components/message";
import SubmitButton from "@/components/submit-button";
import { Text } from "@/components/text";
import type { LoginResponse } from "@/types/actions/auth";
import { Input, Link } from "@nextui-org/react";
import { useState } from "react";

export default function Login() {
	const [usernameError, setUsernameError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const resetState = () => {
		setPasswordError("");
		setUsernameError("");
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
		event.target.name === "password"
			? setPasswordError("")
			: setUsernameError("");

	const setErrorsState = (response: LoginResponse) => {
		const error = response.error;

		if (typeof error === "string") {
			setErrorMessage(error);
			return;
		}

		if (error.username) {
			setUsernameError(error.username.at(0) ?? "");
		}
		if (error.password) {
			setPasswordError(error.password.at(0) ?? "");
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
							setErrorsState(await login(data));
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
							{errorMessage && <Message color="danger">{errorMessage}</Message>}
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
