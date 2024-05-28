"use server";

import { formatDate, formatFileSize } from "@/lib/format";
import type { FilesResponse } from "@/types/actions";
import type { DownloadFile } from "@/types/scheme/download";
import { put, list, type PutBlobResult } from "@vercel/blob";
import { revalidatePath } from "next/cache";

export async function uploadFile(
	fileName: string,
	file: File
): Promise<PutBlobResult> {
	const blob = await put(fileName, file, {
		access: "public",
	});
	revalidatePath("/");
	return blob;
}

export async function getFiles(): Promise<FilesResponse> {
	try {
		const cursor = await list({
			limit: 100,
		});

		const files: DownloadFile[] = cursor.blobs.map((result) => {
			return {
				name: result.pathname.split(".").at(0) as string,
				path: result.pathname,
				type: `.${result.pathname.split(".").at(1)}` as string,
				date: formatDate(result.uploadedAt),
				size: formatFileSize(result.size),
			};
		});
		return { files, isError: false };
	} catch (err) {
		return {
			files: [],
			isError: true,
		};
	}
}
