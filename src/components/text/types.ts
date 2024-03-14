export const textVariants = {
	"heading-6": "font-bold text-6xl",
	"heading-5": "font-bold text-5xl",
	"heading-4": "font-bold text-4xl",
	"heading-3": "font-bold text-3xl",
	"paragraph-xs": "text-xs",
	"paragraph-sm": "text-sm",
	"paragraph-base": "text-base",
	"paragraph-lg": "text-lg",
	"paragraph-xl": "text-xl",
	"label-xs": "text-xs opacity-50",
	"label-sm": "text-sm opacity-50",
	"label-base": "text-base opacity-50",
};

type Screens = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
type Variants = keyof typeof textVariants;
type TextResponsive = Partial<Record<Screens, Variants>>;

export type Variant = Variants | TextResponsive;

export interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
	variant?: Variant;
	as?: React.ElementType;
}
