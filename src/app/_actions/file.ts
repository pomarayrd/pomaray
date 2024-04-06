import type { File } from "@/types/general";
import { AxiosError } from "axios";

const fetchFiles = async (): Promise<File[]> => {
	const response = await fetch("/api/files");
	if (!response.ok) {
		throw new Error("Error fetching files");
	}
	const data = await response.json();
	if (!data || data.length === 0) {
		throw new Error("Files not found");
	}
	return data;
};

export const getFiles = async (): Promise<{
	isError: boolean;
	isNotFound: boolean;
	isLoading: boolean;
	files: File[];
}> => {
	try {
		const files = await fetchFiles();
		return { isError: false, isNotFound: false, isLoading: false, files };
	} catch (error) {
		if (error instanceof AxiosError) {
			console.log("bueno miop hubo un error");
		}
		return { isError: true, isNotFound: false, isLoading: false, files: [] };
	}
};
