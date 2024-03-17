import { injectionRegex, numberReplaceCharacter } from "@/lib/constants";
import locale from "@/locales/errors/schemas.json";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";
import { stringReplaceCharacter, valueReplaceCharacter } from "./constants";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const formatMessage = (
	message: string,
	value: string,
	replace?: string,
) => {
	return message.replaceAll(replace ?? stringReplaceCharacter, value);
};

export type createRegexSchemaOptions = {
	min_length?: number;
	max_length?: number;
	regex?: RegExp;
	description?: string;
};

export const createRegexSchema = (
	fieldName: string,
	{
		min_length = 2,
		max_length = 32,
		regex = injectionRegex,
		...opts
	}: Partial<createRegexSchemaOptions> = {},
) =>
	z
		.string({
			description: opts.description,
			invalid_type_error: locale.INVALID_VALUE.replace(
				stringReplaceCharacter,
				fieldName,
			),
			required_error: locale.IS_REQUIRED.replace(
				stringReplaceCharacter,
				fieldName,
			),
		})
		.min(min_length, {
			message: locale.MIN_LENGTH.replace(
				stringReplaceCharacter,
				fieldName,
			).replace(numberReplaceCharacter, min_length.toString()),
		})
		.max(max_length, {
			message: locale.MAX_LENGTH.replace(
				stringReplaceCharacter,
				fieldName,
			).replace(numberReplaceCharacter, max_length.toString()),
		})
		.regex(injectionRegex, {
			message: locale.INJECTION_REGEX.replace(
				stringReplaceCharacter,
				fieldName,
			),
		});

export const createOptionalStringScheme = () => z.string().optional();

export const createEnumScheme = (
	fieldName: string,
	values: string[],
	description?: string,
) => {
	if (values.length < 0) {
		throw new Error("A enum value must be greater than zero");
	}

	return z.enum([values[0], ...values.slice(1)], {
		invalid_type_error: locale.INVALID_ENUM.replace(
			valueReplaceCharacter,
			values.toString(),
		).replace(stringReplaceCharacter, fieldName),
		description,
		required_error: locale.IS_REQUIRED.replace(
			stringReplaceCharacter,
			fieldName,
		),
	});
};
