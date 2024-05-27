import { z } from "zod";
import { PasswordScheme, UsernameScheme } from "./user";

export const LoginScheme = z.object({
	username: UsernameScheme,
	password: PasswordScheme,
});

export type LoginRequest = z.infer<typeof LoginScheme>;
