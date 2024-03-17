export type MessageResponse = {
	message: string;
	code: number;
};

export interface ResultResponse<T> extends MessageResponse {
	results?: T;
}
