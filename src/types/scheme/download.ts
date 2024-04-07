import { z } from "zod";

export const DownloadFileScheme = z.object({
	name: z.string(),
	type: z.string(),
	size: z.string(),
	date: z.string(),
	path: z.string(),
});

export type DownloadFile = z.infer<typeof DownloadFileScheme>;
