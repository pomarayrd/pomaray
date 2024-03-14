import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { type TextProps, type Variant, textVariants } from "./types";

const buttonVariants = (variant: Variant): string => {
	if (typeof variant === "string") {
		return textVariants[variant] || "";
	}
	// Para variantes responsivas
	const uniqueClasses: string[] = [];
	for (const [screen, variantKey] of Object.entries(variant)) {
		const variantClass = textVariants[variantKey];
		if (variantClass) {
			uniqueClasses.push(`${screen}:${variantClass}`);
		}
	}
	return uniqueClasses.join(" ");
};

const Text = forwardRef<HTMLParagraphElement, TextProps>((props, ref) => {
	const {
		variant = "paragraph-base",
		className,
		children,
		as: Component = "p",
		...rest
	} = props;

	const variantClass = buttonVariants(variant);

	return (
		<Component ref={ref} className={cn(variantClass, className)} {...rest}>
			{children}
		</Component>
	);
});

Text.displayName = "Pomaray.Text";

export default Text;
