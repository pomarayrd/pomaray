import path from "path";
import type { File } from "@/types/general";
import type { formatDate, formatSize } from "@/utils/general";
import fs from "fs/promises";
import { NextResponse } from "next/server";

export async function GET() {
	const rootFolder = process.cwd();
	const relativeFolderPath = "/public/files";

	const absoluteFolderPath = path.join(rootFolder, relativeFolderPath);

	try {
		const files: string[] = await fs.readdir(absoluteFolderPath);

		const filesInfo: File[] = await Promise.all(
			files.map(async (fileName) => {
				const filePath = path.join(absoluteFolderPath, fileName);

				try {
					const fileStats = await fs.stat(filePath);
					const extsion = path.extname(fileName);
					return {
						name: fileName.replace(extsion, ""),
						type: extsion.toLowerCase(),
						size: formatSize(fileStats.size),
						date: formatDate(fileStats.mtime),
						path: `/files/${fileName}`,
					} as File;
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
					} as File;
				}
			}),
		);

		return NextResponse.json(filesInfo);
	} catch (error) {
		return NextResponse.json(
			{
				code: "500",
				message:
					error instanceof Error
						? error.message
						: "Error interno del servidor.",
			},
			{
				status: 500,
				statusText: "ERR_INTERNAL_SERVER_ERROR",
			},
		);
	}
}
