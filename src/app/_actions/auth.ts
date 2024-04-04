"use server";

import { API, CONNECTION_ERROR, cookiesKeys } from "@/lib/constants";
import type { LoginResponse } from "@/types/actions/auth";
import { LoginTokenScheme } from "@/types/scheme/auth";
import type { User } from "@/types/scheme/user";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { UAParser } from "ua-parser-js";

export async function login(formData: FormData): Promise<LoginResponse> {
	try {
		const ip = headers().get("x-forwarded-for");
		const ua = headers().get("User-Agent");

		const parser = new UAParser();
		const userAgentInfo = parser.setUA(ua as string).getResult();

		const rawFormData = {
			username: formData.get("username"),
			password: formData.get("password"),
		};
		const validatedFields = LoginTokenScheme.safeParse(rawFormData);

		if (!validatedFields.success) {
			return {
				error: validatedFields.error.flatten().fieldErrors,
			};
		}

		const response = await fetch(API.getEndpoint("/auth/login"), {
			method: "POST",
			body: JSON.stringify({
				ip: ip,
				device: `${userAgentInfo.browser}, ${userAgentInfo.os.name}`,
				...rawFormData,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});

		const responseBody = await response.json();
		if (!responseBody.user) {
			return {
				error: "No se pudo obtener el usuario, por favor inténtelo de nuevo.",
			};
		}

		if (!responseBody.token) {
			return {
				error: "No se pudo obtener el token, por favor inténtelo de nuevo.",
			};
		}

		cookies().set(cookiesKeys.token.key, responseBody.token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			maxAge: cookiesKeys.token.time,
		});

		redirect("/admin");
	} catch (err) {
		const msg = err instanceof Error ? err.message : CONNECTION_ERROR;
		return {
			error: msg,
		};
	}
}

export async function getTokenUser(): Promise<User | undefined> {
	const token = cookies().get(cookiesKeys.token.key);
	if (!token) {
		return;
	}

	try {
		const response = await fetch(API.getEndpoint("/auth/token"), {
			headers: {
				authorization: `Bearer ${token.value}`,
			},
		});

		const body = await response.json();
		return body.user as User;
	} catch (err) {
		return;
	}
}
