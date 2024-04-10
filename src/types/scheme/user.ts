import { Sex } from "@/lib/constants";
import { createEnumScheme, createRegexScheme } from "@/lib/schemes-creator";
import { z } from "zod";
import ObjectIdScheme from "./objectid";

export const UsernameScheme = createRegexScheme("El nombre de usuario");
export const PasswordScheme = createRegexScheme("La contraseña", {
	min_length: 8,
	max_length: 50,
});
export const SexScheme = createEnumScheme("Sexo", Object.keys(Sex));

export const User = z.object({
	id: ObjectIdScheme,
	username: UsernameScheme,
	photo_url: z.string().url(),
	display_name: createRegexScheme("El nombre a mostrar"),
	role: z.number(),
	sex: SexScheme,
});

export type User = z.infer<typeof User>;
