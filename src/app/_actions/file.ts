"use server";

import fs from "node:fs/promises";
import path from "node:path";
import { formatDate, formatFileSize } from "@/lib/format";
import type { FilesResponse } from "@/types/actions/files";
import type { DownloadFile } from "@/types/scheme/download";

async function getFilesFolder(): Promise<string> {
	const rootFolder = process.cwd();
	const relativeFolderPath = "/public/files";
	return path.join(rootFolder, relativeFolderPath);
}

export async function getFiles(): Promise<FilesResponse> {
	try {
		const absoluteFolderPath = await getFilesFolder();
		const files: string[] = await fs.readdir(absoluteFolderPath);

		const filesInfo: DownloadFile[] = await Promise.all(
			files.map(async (fileName) => {
				const filePath = path.join(absoluteFolderPath, fileName);

				try {
					const fileStats = await fs.stat(filePath);
					const extension = path.extname(fileName);
					return {
						name: fileName.replace(extension, ""),
						type: extension.toLowerCase(),
						size: formatFileSize(fileStats.size),
						date: formatDate(fileStats.mtime, {
							onlyDate: true,
						}),
						path: `/files/${fileName}`,
					};
				} catch (error) {
					console.error(
						`Error processing file ${fileName}: ${
							error instanceof Error && error.message
						}`,
					);
					return {
						name: "unknown",
						type: "unknown",
						size: "unknown",
						date: "unknown",
						path: "unknown",
					} as DownloadFile;
				}
			}),
		);

		return {
			files: filesInfo,
			isError: false,
			isNotFound: filesInfo.length === 0,
		};
	} catch (error) {
		console.error("Error reading files:", error);
		return { isNotFound: false, isError: true, files: [] };
	}
}
