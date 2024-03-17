"use server";

import { API } from "@/lib/constants";
import type { ErrorResponse } from "@/types/api";
import type { User } from "@/types/schemas/user";

export async function getUserById(
	userId: string,
): Promise<ErrorResponse<User>> {
	try {
		return {
			error: "User not found",
		};
		const endPoint = `/auth/users/${userId}`;
		const response = (await fetch(API.getEndpoint(endPoint))).json();
		console.log(response);
	} catch (err) {
		return {
			error: "User not found",
		};
	}
}
