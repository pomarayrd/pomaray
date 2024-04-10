import type { PomarayComponent } from "@/components/types";

export interface ConfirmModalProps extends PomarayComponent {
	buttonLabel?: string;
	title: string;
	triggerVariants?: ButtonVariantProps;
	intensity?: "medium" | "hard";
	onConfirm: (() => void) | (() => Promise<void>);
}
