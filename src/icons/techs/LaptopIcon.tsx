import type { IconProps } from "./types";

function LaptopIcon({ className, children, ...props }: IconProps) {
	return (
		<svg
			stroke="currentColor"
			fill="currentColor"
			stroke-width="0"
			viewBox="0 0 16 16"
			className={className}
			{...props}
		>
			{children}
			<title>Laptop</title>
			<path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
		</svg>
	);
}

export default LaptopIcon;
