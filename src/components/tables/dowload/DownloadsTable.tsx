"use client";

import { TableEmpty } from "@/components/tables/dowload";
import locale from "@/locales/download.json";
import type { DownloadFile } from "@/types/scheme/download";
import {
	Button,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
} from "@nextui-org/react";
import {
	type Key,
	cloneElement,
	useCallback,
	useEffect,
	useState,
} from "react";
import { PiDownloadSimpleFill } from "react-icons/pi";
import { FileIcons2 } from "./FileIcons";
import { DeleteIcon } from "@nextui-org/shared-icons";
import { getFiles } from "@/app/_actions/files";

const columns = locale.TABLE.COLUMNS;

interface DownloadsTable {
	withDelete?: boolean;
}

export function DownloadsTable({ withDelete }: DownloadsTable) {
	const [files, setFiles] = useState<DownloadFile[]>();
	const [isNotFound, setIsNotFound] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	function handleDownload(filePath: string) {
		const link = document.createElement("a");
		link.href = filePath;
		link.download = filePath.split("/").pop() as string;
		link.click();
	}

	const fetch = async () => {
		setIsLoading(true);
		const response = await getFiles();
		if (response.files.length <= 0) {
			setIsNotFound(true);
		}
		setFiles(response.files);
		setIsLoading(false);
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		fetch();
	}, []);

	const renderCell = useCallback(
		(file: DownloadFile, columnKey: Key) => {
			const cellValue = file[columnKey as keyof DownloadFile];
			const defaultFileIcon = FileIcons2.find(
				(icon) => Object.keys(icon)[0] === "default",
			)?.default as { icon: JSX.Element; color: string };

			switch (columnKey) {
				case "type": {
					const iconElement =
						FileIcons2.find((icon) => Object.keys(icon)[0] === cellValue)?.[
							cellValue as string
						] || defaultFileIcon;

					return (
						<div
							className={`bg-${iconElement.color} w-fit p-1 flex items-center justify-center rounded-md text-white`}
						>
							{cloneElement(iconElement.icon, {
								size: 20,
							})}
						</div>
					);
				}

				case "download": {
					const buttonClass =
						"group-hover:translate-y-0 -translate-y-0.5 t transition-transform text-lg text-foreground";

					return (
						<Button
							aria-label="Descargar archivo"
							variant="light"
							isIconOnly
							className="group hover:opacity-100 opacity-70 transition-opacity mx-auto"
							onClick={() => {
								handleDownload(file.path);
							}}
						>
							{withDelete ? (
								<DeleteIcon className={buttonClass} />
							) : (
								<PiDownloadSimpleFill className={buttonClass} />
							)}
						</Button>
					);
				}
				case "size":
					return (
						<span className="font-bold sm:text-md text-xs opacity-50 text-nowrap">
							{cellValue}
						</span>
					);
				default:
					return (
						<span className="font font-medium capitalize opacity-90 text-nowrap">
							{cellValue}
						</span>
					);
			}
		},
		[withDelete],
	);

	return (
		<Table
			shadow="none"
			className="py-6"
			aria-label="Tabla de descargas."
			classNames={{
				wrapper: "bg-transparent px-0",
				thead: "[&>tr]:first:shadow-sm",
			}}
		>
			<TableHeader columns={columns}>
				{(column) => <TableColumn key={column.KEY}>{column.TEXT}</TableColumn>}
			</TableHeader>
			<TableBody
				emptyContent={
					<TableEmpty
						isLoading={isLoading}
						isNotFound={isNotFound}
						onTry={fetch}
					/>
				}
				items={files ?? []}
			>
				{(file) => (
					<TableRow key={file.path}>
						{(columnKey) => (
							<TableCell>{renderCell(file, columnKey)}</TableCell>
						)}
					</TableRow>
				)}
			</TableBody>
		</Table>
	);
}
