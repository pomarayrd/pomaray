import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { tv } from "tailwind-variants";

const containerVariant = tv({
	base: "mx-auto p-4 sm:p-10 min-h-screen flex flex-col",
	variants: {
		size: {
			"7xl": "max-w-7xl",
			"6xl": "max-w-6xl",
			"5xl": "max-w-5xl",
			"4xl": "max-w-4xl",
			"3xl": "max-w-3xl",
			"2xl": "max-w-2xl",
			xl: "max-w-xl",
			container: "container",
		},
	},
	defaultVariants: {
		size: "5xl",
	},
});

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
	size?: keyof typeof containerVariant.variants.size;
	as?: React.ElementType;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
	({ className, children, size, ...rest }, ref) => {
		const variantClasses = containerVariant({ size });
		return (
			<main
				ref={ref as React.RefObject<HTMLDivElement>}
				className={cn(variantClasses, className)}
				{...rest}
			>
				{children}
			</main>
		);
	},
);

Container.displayName = "Pomaray.Container";

export default Container;
