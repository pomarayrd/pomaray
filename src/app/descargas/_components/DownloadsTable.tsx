"use client";

import { TableEmpty } from "@/components/table";
import { useFetch } from "@/hooks/useFetch";
import locale from "@/locales/download.json";
import type { FilesResponse } from "@/types/actions/files";
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
import { type Key, cloneElement, useCallback } from "react";
import { AiOutlineReload } from "react-icons/ai";
import { PiDownloadSimpleFill } from "react-icons/pi";
import { FileIcons } from "./FileIcons";

const columns = locale.TABLE.COLUMNS;

export function DownloadsTable() {
	const {
		results: state,
		isLoading,
		error,
		refetch,
	} = useFetch<FilesResponse>("/api/files");

	function handleDownload(filePath: string) {
		const link = document.createElement("a");
		link.href = filePath;
		link.download = filePath.split("/").pop() as string;
		link.click();
	}

	const renderCell = useCallback((file: DownloadFile, columnKey: Key) => {
		const cellValue = file[columnKey as keyof DownloadFile];
		const defaultFileIcon = FileIcons.find(
			(icon) => Object.keys(icon)[0] === "default",
		)?.default as { icon: JSX.Element; color: string };

		switch (columnKey) {
			case "type": {
				const iconElement =
					FileIcons.find((icon) => Object.keys(icon)[0] === cellValue)?.[
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

			case "download":
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
						<PiDownloadSimpleFill className="group-hover:translate-y-0 -translate-y-0.5 t transition-transform text-lg text-foreground" />
					</Button>
				);
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
	}, []);

	return (
		<Table
			shadow="none"
			className="py-6"
			aria-label="Tabla de descargas."
			classNames={{
				wrapper: "bg-transparent px-0",
				thead: "[&>tr]:first:shadow-sm",
			}}
			bottomContent={
				!isLoading &&
				!error && (
					<div className="flex flex-center w-full">
						<Button
							endContent={<AiOutlineReload />}
							variant="flat"
							isLoading={isLoading}
							onPress={refetch}
							size="sm"
							radius="sm"
						>
							Recargar
						</Button>
					</div>
				)
			}
		>
			<TableHeader columns={columns}>
				{(column) => <TableColumn key={column.KEY}>{column.TEXT}</TableColumn>}
			</TableHeader>
			<TableBody
				emptyContent={
					<TableEmpty
						isLoading={isLoading}
						isNotFound={Boolean(state?.isNotFound)}
						onTry={refetch}
					/>
				}
				items={state?.files ?? []}
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
