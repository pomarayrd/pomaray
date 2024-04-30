import { Text } from "@/components/text";
import { cn } from "@/lib/utils";
import locale from "@/locales/empty-table.json";
import { Spinner } from "@nextui-org/spinner";
import { BiErrorAlt } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import RetryButton from "./RetryButton";
import type { TableEmptyProps } from "./types";

function TableEmpty({
	className,
	children,
	isLoading,
	isNotFound,
	onTry,
}: TableEmptyProps) {
	const { NOT_FOUND, ERROR } = locale;
	const baseClassName = "flex flex-col flex-center w-full min-h-[75vh] gap-y-4";
	const iconClassName = "text-3xl";

	if (isLoading) {
		return (
			<div className={cn(className, baseClassName)}>
				<Spinner label="Cargando, por favor espere." />
			</div>
		);
	}

	return (
		<div className={cn(className, baseClassName)}>
			{isNotFound ? (
				<FaSearch className={iconClassName} />
			) : (
				<BiErrorAlt className={cn("text-danger/50", iconClassName)} />
			)}
			<Text
				size="paragraph-sm"
				align="center"
				className={cn("max-w-[30ch]", !isNotFound && "text-danger/50")}
			>
				{isNotFound ? NOT_FOUND : ERROR}
			</Text>
			<RetryButton color={isNotFound ? "default" : "danger"} onTry={onTry} />
			{children}
		</div>
	);
}

export default TableEmpty;
