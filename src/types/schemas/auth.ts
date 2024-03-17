import { z } from "zod";
import { PasswordScheme, UsernameSchema } from "./user";

export const LoginTokenSchema = z.object({
	username: UsernameSchema,
	password: PasswordScheme,
});

export type LoginTokenRequest = z.infer<typeof LoginTokenSchema>;
