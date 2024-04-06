import PdfIcon from "@/icons/downloads/pdf";

export type FileIcon = {
	[key: string]: {
		icon: JSX.Element;
		color: string;
	};
};

export const FILE_ICONS: FileIcon[] = [
	{ ".pdf": { icon: <PdfIcon />, color: "danger" } },
];
