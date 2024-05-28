import { FaFilePdf } from "react-icons/fa";
import { VscJson } from "react-icons/vsc";
import {
	FaFileZipper,
	FaFileImage,
	FaFile,
	FaFileExcel,
	FaFileWord,
} from "react-icons/fa6";

export type FileIcon = {
	[key: string]: {
		icon: JSX.Element;
		color: string;
	};
};

export const FileIcons: FileIcon[] = [
	{ "application/pdf": { icon: <FaFilePdf />, color: "danger" } },
	{ "application/json": { icon: <VscJson />, color: "warning" } },
	{ "application/zip": { icon: <FaFileZipper />, color: "default" } },
	{ "image/jpeg": { icon: <FaFileImage />, color: "primary" } },
	{ "image/png": { icon: <FaFileImage />, color: "primary" } },
	{
		"application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
			icon: <FaFileWord />,
			color: "blue-600",
		},
	},
	{
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
			icon: <FaFileExcel />,
			color: "success",
		},
	},
	{ default: { icon: <FaFile />, color: "default-200" } },
];

export const FileIcons2: FileIcon[] = [
	{ ".pdf": { icon: <FaFilePdf />, color: "danger" } },
	{ ".docx": { icon: <FaFileWord />, color: "blue-600" } },
	{ ".xlsx": { icon: <FaFileExcel />, color: "success" } },
	{ default: { icon: <FaFile />, color: "default-200" } },
];
