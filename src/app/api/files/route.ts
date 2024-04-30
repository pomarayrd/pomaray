import fs from "node:fs/promises";
import path from "node:path";
import { FILES_FOLDER } from "@/lib/constants";
import { formatDate, formatFileSize } from "@/lib/format";
import type { FilesResponse } from "@/types/actions/files";
import type { DownloadFile } from "@/types/scheme/download";
import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse<FilesResponse>> {
	try {
		const folder = path.join(process.cwd(), FILES_FOLDER);
		const dir = await fs.readdir(folder, "utf8");
		const files = await Promise.all(
			dir.map(async (file) => {
				const filePath = path.join(process.cwd(), FILES_FOLDER, file);

				try {
					const stat = await fs.stat(filePath);
					const ext = path.extname(file);
					return {
						name: file,
						path: path.join("files", file),
						type: ext,
						size: formatFileSize(stat.size),
						date: formatDate(stat.mtime),
					} as DownloadFile;
				} catch (err) {
					return null;
				}
			}),
		).then((files) => {
			console.log(files);

			return files.filter((file) => file !== null) as DownloadFile[];
		});

		return NextResponse.json({
			files: files,
			isNotFound: files.length <= 0,
			isError: false,
		});
	} catch (err) {
		return NextResponse.json({
			files: [],
			isNotFound: false,
			isError: true,
		});
	}
}
