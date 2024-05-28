import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { tv } from "tailwind-variants";

const containerVariant = tv({
	base: "border-1 rounded-lg w-full gap-2 px-2 py-1",
	variants: {
		color: {
			success: "border-success bg-success/20 text-success",
			danger: "border-danger bg-danger/20 text-danger",
			warning: "border-warning bg-warning/20 text-warning",
			default: "border-default bg-default/20 text-default",
			primary: "border-primary bg-primary/20 text-primary",
			secondary: "border-secondary bg-secondary/20 text-secondary",
		},
		variant: {
			bordered: "px-unit-2 py-unit-1",
			ghost: "border-transparent bg-transparent",
			solid: "border-transparent px-unit-2 py-unit-1",
		},
	},
	defaultVariants: {
		color: "default",
		variant: "ghost",
	},
});

export interface MessageProps extends React.HTMLAttributes<HTMLDivElement> {
	color?: keyof typeof containerVariant.variants.color;
	variant?: keyof typeof containerVariant.variants.variant;
	as?: React.ElementType;
}

const Message = forwardRef<HTMLDivElement, MessageProps>(
	({ className, children, color, variant, ...rest }, ref) => {
		const variantClasses = containerVariant({ color, variant });
		return (
			<span
				ref={ref as React.RefObject<HTMLDivElement>}
				className={cn(variantClasses, className)}
				{...rest}
			>
				{children}
			</span>
		);
	},
);

Message.displayName = "Pomaray.Message";

export default Message;
