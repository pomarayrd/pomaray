"use server";

export const fetchFromServer = async <T>(
	path: string | URL,
	init: RequestInit,
) => {
	return await fetch(path, init);
};
