import path from "node:path";
import type { APIMethod } from "@/types/api";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

type fastFetchOptions = {
	headers?: HeadersInit;
	body?: object;
};

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const buildUrl = (path: string, searchParams?: URLSearchParams) => {
	if (!searchParams) return path;
	const queryString = searchParams.toString();
	return `${path}?${queryString}`;
};

export function objectToUrlParams(obj: {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	[key: string]: any;
}): URLSearchParams {
	const params = new URLSearchParams();
	for (const key in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, key)) {
			params.append(key, obj[key]);
		}
	}
	return params;
}

export function fastFetch(
	endpoint: string,
	method: APIMethod,
	opts?: fastFetchOptions,
) {
	return fetch(endpoint, {
		method: method,
		headers: {
			"Content-Type": "application/json",
			...opts?.headers,
		},
		body: opts?.body ? JSON.stringify(opts.body) : undefined,
	});
}

export async function getStatusError(file: string, status: number) {
	const locale = (await import(`@/locales/${file}`)) as {
		readonly ERRORS: { DEFAULT: string; [key: string]: string };
	};
	const statusError = locale.ERRORS[status.toString()];
	if (statusError) {
		return statusError;
	}

	return locale.ERRORS.DEFAULT;
}
