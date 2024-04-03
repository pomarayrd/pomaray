import type { API_METHOD } from "@/types/api";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { API, stringReplaceCharacter } from "./constants";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const formatMessage = (
	message: string,
	value: string,
	replace?: string,
) => {
	return message.replaceAll(replace ?? stringReplaceCharacter, value);
};

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

export function fastFetch(endpoint: string, method: API_METHOD) {
	return fetch(API.getEndpoint(endpoint), {
		method: method,
		headers: {
			"Content-Type": "application/json",
		},
	});
}

export function numberParser(value: number) {
	if (value >= 1000000) {
		return `${value / 1000000}M`;
	}
	if (value >= 1000) {
		return `${value / 1000}K`;
	}
	return value;
}

export function truncateText(text: string, maxWords: number) {
	const words = text.split(" ");
	if (words.length > maxWords) {
		return `${words.slice(0, maxWords).join(" ")}...`;
	}
	return text;
}
