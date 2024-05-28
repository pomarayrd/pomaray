import type { LoginRequest } from "@/types/scheme/auth";
import type { DownloadFile } from "@/types/scheme/download";
import type { Post } from "@/types/scheme/posts";
import type { PutBlobResult } from "@vercel/blob";

export type LoginResponse = {
	errors?:
		| {
				[key in keyof LoginRequest]?: string;
		  }
		| string;
};

export type FilesResponse = {
	files: DownloadFile[];
	isError: boolean;
};

export type FileUploadResponse = {
	blob?: PutBlobResult;
	error?: string;
};

export type SavePostResponse = {
	errors?: {
		[key in keyof Post]?: string;
	};
	success?: boolean;
};
