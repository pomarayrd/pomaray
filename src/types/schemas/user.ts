import { Role, Sex } from "@/lib/constants";
import {
	createEnumScheme,
	createOptionalStringScheme,
	createRegexSchema,
} from "@/lib/utils";
import { z } from "zod";

export const UsernameSchema = createRegexSchema("El nombre de usuario");
export const PasswordScheme = createRegexSchema("La contraseña", {
	max_length: 50,
});
export const RoleScheme = createEnumScheme("Rol", Object.keys(Role));
export const SexScheme = createEnumScheme("Sexo", Object.keys(Sex));

export const User = z.object({
	id: createOptionalStringScheme(),
	username: UsernameSchema,
	display_name: createRegexSchema("El nombre a mostrar"),
	password: createOptionalStringScheme(),
	role: RoleScheme,
	sex: SexScheme,
});

export type User = z.infer<typeof User>;
