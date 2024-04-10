import type { PomarayComponent } from "@/components/types";

export interface ConfirmModalProps extends PomarayComponent {
	buttonLabel?: string;
	title: string;
	isOpen: boolean;
	onOpenChange: (isOpen?: boolean) => void;
	onConfirm: () => void;
}
