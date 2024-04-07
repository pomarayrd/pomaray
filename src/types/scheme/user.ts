import { Role, Sex } from "@/lib/constants";
import {
	createEnumScheme,
	createOptionalStringScheme,
	createRegexScheme,
} from "@/lib/schemes-creator";
import { z } from "zod";

export const UsernameScheme = createRegexScheme("El nombre de usuario");
export const PasswordScheme = createRegexScheme("La contraseña", {
	min_length: 8,
	max_length: 50,
});
export const RoleScheme = createEnumScheme("Rol", Object.keys(Role));
export const SexScheme = createEnumScheme("Sexo", Object.keys(Sex));

export const User = z.object({
	id: createOptionalStringScheme(),
	username: UsernameScheme,
	profile: z.object({
		photo: z.string().url(),
		display_name: createRegexScheme("El nombre a mostrar"),
	}),
	password: createOptionalStringScheme(),
	role: RoleScheme,
	sex: SexScheme,
});

export type User = z.infer<typeof User>;
