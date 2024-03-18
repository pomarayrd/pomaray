export type ServerResponse = {
	message?: string;
	error?: string;
	code: number;
};

export interface ResultResponse<T> extends ServerResponse {
	results?: T;
}
