import { formatDate, formatFileSize } from "@/lib/format";
import type { FilesResponse, FileUploadResponse } from "@/types/actions";
import type { DownloadFile } from "@/types/scheme/download";
import { put, list } from "@vercel/blob";

export async function uploadFile(
	fileName: string,
	file: File,
): Promise<FileUploadResponse> {
	const { url } = await put(fileName, file, { access: "public" });
	return { url };
}

export async function getFiles(): Promise<FilesResponse> {
	try {
		const cursor = await list({
			limit: 100,
		});

		const files: DownloadFile[] = cursor.blobs.map((result) => {
			return {
				name: result.pathname.split("/").pop() as string,
				path: result.pathname,
				type: result.pathname.split("/").at(2) as string,
				date: formatDate(result.uploadedAt),
				size: formatFileSize(result.size),
			};
		});

		console.log(cursor);

		return { files, isError: false };
	} catch (err) {
		console.error(err);

		return {
			files: [],
			isError: true,
		};
	}
}
