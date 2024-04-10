import { stringReplaceCharacter } from "./constants";

export function formatFileSize(sizeInBytes: number): string {
	const kiloByte = 1024;
	const megaByte = kiloByte * kiloByte;
	const gigaByte = megaByte * kiloByte;
	const teraByte = gigaByte * kiloByte;

	if (sizeInBytes < kiloByte) {
		return `${sizeInBytes} B`;
	}
	if (sizeInBytes < megaByte) {
		return `${(sizeInBytes / kiloByte).toFixed(2)} KB`;
	}
	if (sizeInBytes < gigaByte) {
		return `${(sizeInBytes / megaByte).toFixed(2)} MB`;
	}
	if (sizeInBytes < teraByte) {
		return `${(sizeInBytes / gigaByte).toFixed(2)} GB`;
	}
	return `${(sizeInBytes / teraByte).toFixed(2)} TB`;
}

export function formatNumber(value: number) {
	if (value >= 1000000) {
		return `${value / 1000000}M`;
	}
	if (value >= 1000) {
		return `${value / 1000}K`;
	}
	return value;
}

export function formatDate(date: Date, options = { onlyDate: false }) {
	return new Intl.DateTimeFormat("es-DO", {
		dateStyle: options.onlyDate ? "medium" : "medium",
		timeStyle: options.onlyDate ? undefined : "short",
		timeZone: "America/Santo_Domingo",
	}).format(date);
}

export const formatString = (
	message: string,
	value: string,
	replace?: string,
) => {
	return message.replaceAll(replace ?? stringReplaceCharacter, value);
};

export function truncateText(text: string, maxWords: number) {
	const words = text.split(" ");
	if (words.length > maxWords) {
		return `${words.slice(0, maxWords).join(" ")}...`;
	}
	return text;
}
