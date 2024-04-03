import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "@nextui-org/react";
import { useFormStatus } from "react-dom";

export interface SubmitButtonProps extends ButtonProps {}

function SubmitButton({
	children,
	className,
	size,
	color,
	isDisabled,
	radius,
	...props
}: SubmitButtonProps) {
	const { pending } = useFormStatus();

	return (
		<Button
			type="submit"
			color={color ?? "primary"}
			size={size ?? "md"}
			isLoading={pending}
			isDisabled={isDisabled}
			aria-disabled={pending || isDisabled}
			className={cn(className, "py-6")}
			radius={radius || "sm"}
			{...props}
		>
			{children}
		</Button>
	);
}

export default SubmitButton;
