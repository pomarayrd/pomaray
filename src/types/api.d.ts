export type MessageResponse = {
	message: string;
	code: number;
};

export type ErrorResponse<T> = {
	results?: T;
	error?: string;
};

export interface ResultResponse<T> extends MessageResponse {
	results?: T;
}
