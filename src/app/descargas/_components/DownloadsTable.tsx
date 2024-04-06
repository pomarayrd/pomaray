import { getFiles } from "@/app/_actions/file";
import { FILE_ICONS } from "@/app/descargas/_components/FileIcons";
import { TableEmpty } from "@/components/table/TableEmpty";
import DownloadIcon from "@/icons/downloads/download";
import i18n from "@/locales/download.json";
import type { File } from "@/types/general";
import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "@nextui-org/react";
import { cloneElement, useCallback, useEffect, useState } from "react";

function handleDownload(filePath: string) {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = filePath.split("/").pop() as string;
    link.click();
}

export function DownloadsTable() {
    const [isError, setIsError] = useState(false);
    const [isNotFound, setIsNotFound] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [files, setFiles] = useState<File[]>([]);

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        setIsError(false);
        setIsNotFound(false);
        try {
            const filesData = await getFiles();
            setFiles(filesData.files);
            setIsNotFound(filesData.isNotFound);
        } catch (error) {
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const renderCell = useCallback((file: File, columnKey: string) => {
        const cellValue = file[columnKey];
        const defaultFileIcon = FILE_ICONS.find(
            (icon) => Object.keys(icon)[0] === "default",
        )?.default as { icon: JSX.Element; color: string };

        switch (columnKey) {
            case "type": {
                const iconElement =
                    FILE_ICONS.find((icon) => Object.keys(icon)[0] === cellValue)?.[
                    cellValue as string
                    ] || defaultFileIcon;

                return (
                    <div
                        className={`bg-${iconElement.color} w-fit p-1 flex items-center justify-center rounded-lg text-white`}
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
                        className="group hover:opacity-100 opacity-70 transition-opacity"
                        onClick={() => {
                            console.log(file.path);
                            handleDownload(file.path);
                        }}
                    >
                        <DownloadIcon />
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
                    <span className="font-bold capitalize sm:text-lg text-md opacity-90 text-nowrap">
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
                wrapper: "min-h-screen bg-transparent px-0",
                thead: "[&>tr]:first:shadow-sm",
            }}
        >
            <TableHeader className="bg-blue-600">
                <TableCell>{i18n.TABLE.COLUMNS.FILE_TYPE}</TableCell>
                <TableCell>{i18n.TABLE.COLUMNS.FILE_NAME}</TableCell>
                <TableCell>{i18n.TABLE.COLUMNS.FILE_SIZE}</TableCell>
                <TableCell>{i18n.TABLE.COLUMNS.DOWNLOAD_FILE}</TableCell>
            </TableHeader>

            <TableBody
                emptyContent={
                    <TableEmpty
                        isError={isError}
                        isLoading={isLoading}
                        isNotFound={isNotFound}
                        onTry={fetchData}
                    />
                }
                items={files}
            >
                {(file) => (
                    <TableRow key={file.name}>
                        {(columnKey) => (
                            <TableCell>{renderCell(file, columnKey.toString())}</TableCell>
                        )}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}
