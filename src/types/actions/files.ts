import type { DownloadFile } from "@/types/scheme/download";

export type FilesResponse = {
	isNotFound: boolean;
	isError: boolean;
	files: DownloadFile[];
};
