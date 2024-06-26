import { Text } from "@/components/text";
import { Divider, Image, Link } from "@nextui-org/react";
import type { MDXComponents } from "mdx/types";
import NextLink from "next/link";
import { cn } from "./lib/utils";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		h1: ({ children, className, ...props }) => (
			<Text
				as="h1"
				className={cn("text-primary", className)}
				size="heading-4"
				{...props}
			>
				{children}
			</Text>
		),
		h2: ({ children, ...props }) => (
			<>
				<Text as="h2" size="heading-3" {...props}>
					{children}
				</Text>
				<Divider className="bg-primary" style={{ height: "1.3px" }} />
			</>
		),
		h3: ({ children, className, ...props }) => (
			<Text
				as="h3"
				className={cn("font-bold", className)}
				size="paragraph-base"
				{...props}
			>
				{children}
			</Text>
		),
		h5: ({ children, className, ...props }) => (
			<Text
				as="h5"
				className={cn("font-bold lea", className)}
				size="paragraph-lg"
				{...props}
			>
				{children}
			</Text>
		),
		h4: ({ children, ...props }) => (
			<Text as="h3" size="heading-3" {...props}>
				{children}
			</Text>
		),
		p: ({ children, ...props }) => {
			if (typeof children !== "string") {
				return children;
			}
			return <Text {...props}>{children}</Text>;
		},
		a: ({ children, className, href }) => (
			<Link
				as={NextLink}
				href={href}
				className={className}
				isExternal
				showAnchorIcon
			>
				{children}
			</Link>
		),
		blockquote: ({ children }) => (
			<Text
				as={"blockquote"}
				style={{
					margin: 0,
					padding: 10,
					backgroundColor: "#f9f9f9",
					borderLeftWidth: 5,
					borderLeftColor: "#ccc",
					fontStyle: "italic",
					opacity: 0.2,
				}}
				size="label-xs"
			>
				{children}
			</Text>
		),
		img: ({ src, width, height, className, alt }) => (
			<Image
				className={cn("aspect-auto max-w-sm w-full", className)}
				width={width}
				height={height}
				src={src}
				alt={alt}
			/>
		),
		li: ({ children }) => (
			<li
				style={{
					padding: ".6rem",
					listStyleType: "disc",
				}}
			>
				{children}
			</li>
		),
	};
}
