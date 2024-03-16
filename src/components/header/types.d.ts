import type { PomarayComponent } from "@/components/types.d";
import type { NavbarItemProps as NextNavbarItemProps } from "@nextui-org/navbar";

export interface NavbarProps extends PomarayComponent {
	notify?: React.ReactNode;
}

export interface NavbarItemProps extends NextNavbarItemProps {
	isImportant?: boolean;
}

export interface NavbarNotifyProps extends PomarayComponent {}
