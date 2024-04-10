import type { PomarayComponent } from "@/components/types";

export interface TableEmptyProps extends PomarayComponent {
	isLoading: boolean;
	isNotFound: boolean;
	onTry: () => void;
}

export interface RetryButtonProps {
	onTry: () => void;
	color: "default" | "danger";
}
