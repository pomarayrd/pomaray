import { cn } from "@/lib/utils"; // Asumiendo que `cn` es una función que combina clases de manera segura
import { forwardRef } from "react";
import { tv } from "tailwind-variants";

const textVariant = tv({
	base: "text-base",
	variants: {
		size: {
			"heading-6": "font-black text-6xl text-primary",
			"heading-5": "font-extrabold text-5xl text-primary",
			"heading-4": "font-extrabold text-4xl text-primary",
			"heading-3": "font-bold text-3xl text-primary",
			"paragraph-xs": "text-xs",
			"paragraph-sm": "text-sm",
			"paragraph-base": "text-base",
			"paragraph-lg": "text-lg",
			"paragraph-xl": "text-xl",
			"label-xs": "text-xs opacity-50",
			"label-sm": "text-sm opacity-50",
			"label-base": "text-base opacity-50",
		},
		align: {
			center: "text-center",
			left: "text-left",
			right: "text-right",
			top: "align-top",
			bottom: "align-bottom",
		},
	},
	defaultVariants: {
		size: "paragraph-base",
		align: "left",
	},
});

export interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
	size?: keyof typeof textVariant.variants.size;
	align?: keyof typeof textVariant.variants.align;
	as?: React.ElementType;
}

const Text = forwardRef<HTMLParagraphElement, TextProps>(
	(
		{
			size = "paragraph-base",
			as: Component = "p",
			align = "left",
			className,
			children,
			...rest
		},
		ref,
	) => {
		const variantClasses = textVariant({ size, align });
		return (
			<Component ref={ref} className={cn(variantClasses, className)} {...rest}>
				{children}
			</Component>
		);
	},
);

Text.displayName = "Pomaray.Text";

export default Text;
