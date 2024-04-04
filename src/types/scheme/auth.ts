import { z } from "zod";
import { PasswordScheme, UsernameScheme } from "./user";

export const LoginTokenScheme = z.object({
	username: UsernameScheme,
	password: PasswordScheme,
});

export type LoginTokenRequest = z.infer<typeof LoginTokenScheme>;
