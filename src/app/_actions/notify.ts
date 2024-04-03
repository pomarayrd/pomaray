"use server";

export type Response = {
	value: string;
};

export const getNotify = async (): Promise<Response> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({ value: "Hola mundo" });
		}, 1200);
	});
};
