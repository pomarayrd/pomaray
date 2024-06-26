"use server";

import { API, cookiesKeys } from "@/lib/constants";
import { fastFetch, getStatusError } from "@/lib/utils";
import type { LoginResponse } from "@/types/actions";
import { LoginScheme } from "@/types/scheme/auth";
import type { User } from "@/types/scheme/user";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { UAParser } from "ua-parser-js";

const localeFile = "auth";

function getBearer(token: string) {
	return `Bearer ${token}`;
}

export async function login(
	formData: FormData
): Promise<LoginResponse | undefined> {
	try {
		const ip = (headers().get("x-forwarded-for") ?? "127.0.0.1").split(",")[0];
		const ua = headers().get("User-Agent");

		const parser = new UAParser();
		const userAgentInfo = parser.setUA(ua as string).getResult();

		const rawFormData = {
			username: formData.get("username"),
			password: formData.get("password"),
		};
		const validatedFields = LoginScheme.safeParse(rawFormData);

		if (!validatedFields.success) {
			return {
				errors: {
					password: validatedFields.error.flatten().fieldErrors.password?.at(0),
					username: validatedFields.error.flatten().fieldErrors.username?.at(0),
				},
			};
		}

		const url = API.getEndpoint("/auth/login");
		const response = await fastFetch(url, "POST", {
			body: {
				ip: ip,
				device: `${userAgentInfo.browser}, ${userAgentInfo.os.name}`,
				...rawFormData,
			},
		});

		if (!response.ok) {
			const status = response.status;
			return {
				errors: await getStatusError(localeFile, status),
			};
		}

		const responseBody = await response.json();

		if (!responseBody.token) {
			return {
				errors: "No se pudo obtener el token, por favor inténtelo de nuevo.",
			};
		}

		cookies().set(cookiesKeys.token.key, responseBody.token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			maxAge: cookiesKeys.token.time,
		});
	} catch (err) {
		return {
			errors: "Hubo un error, por favor inténtelo de nuevo.",
		};
	}
}

export async function logout() {
	const token = cookies().get(cookiesKeys.token.key);
	if (!token) {
		return;
	}

	try {
		const url = API.getEndpoint("/auth/logout");
		const response = await fastFetch(url, "DELETE", {
			headers: {
				authorization: getBearer(token.value),
			},
		});

		if (!response.ok) {
			console.error(`Felid to logout: ${response.json()}`);
		}
	} catch (err) {
	} finally {
		cookies().delete(cookiesKeys.token.key);
		redirect("/acceder");
	}
}

export async function getTokenUserSafe(): Promise<User | undefined> {
	const token = cookies().get(cookiesKeys.token.key);
	if (!token?.value) {
		return;
	}

	try {
		const url = API.getEndpoint("/auth");

		const response = await fastFetch(url, "GET", {
			headers: {
				authorization: getBearer(token.value),
			},
		});

		const body = await response.json();

		return body.user as User;
	} catch (err) {
		return;
	}
}

export async function getTokenUser(): Promise<User | undefined> {
	const token = cookies().get(cookiesKeys.token.key);
	if (!token?.value) {
		redirect("/acceder");
	}

	try {
		const url = API.getEndpoint("/auth");
		const response = await fastFetch(url, "GET", {
			headers: {
				authorization: getBearer(token.value),
			},
		});

		const body = await response.json();

		return body.user as User;
	} catch (err) {
		redirect("/acceder");
	}
}

export async function getToken(): Promise<string | undefined> {
	const token = cookies().get(cookiesKeys.token.key);
	if (!token) {
		return;
	}

	return token.value;
}
