import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { stringReplaceCharacter } from "./constants";

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
