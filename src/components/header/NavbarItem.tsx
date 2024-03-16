import { cn } from "@/lib/utils";
import { NavbarItem as NextNavbarItem } from "@nextui-org/navbar";
import { forwardRef } from "react";
import type { NavbarItemProps } from "./types.d";

const NavbarItem = forwardRef<HTMLDivElement, NavbarItemProps>(
	({ className, children, isImportant, ...rest }, _) => {
		return (
			<NextNavbarItem
				className={cn(
					"flex flex-cols gap-1 justify-center items-center text-foreground font-medium cursor-pointer",
					className,
				)}
				{...rest}
			>
				{children}
				{isImportant && (
					<span className="size-1.5 bg-primary-500 rounded-full" />
				)}
			</NextNavbarItem>
		);
	},
);

NavbarItem.displayName = "Pomaray.NavbarItem";

export default NavbarItem;
