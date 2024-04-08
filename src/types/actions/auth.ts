export type LoginResponse = {
	error?:
		| string
		| {
				username?: string[];
				password?: string[];
		  };
};
