export type ServerResponse = {
	message?: string;
	status?: number;
};

export type APIMethod = "GET" | "POST" | "DELETE" | "HEAD" | "OPTIONS" | "PUT";

export type ResultResponse<T> = ServerResponse & T;
