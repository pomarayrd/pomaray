import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
import { withTV } from "tailwind-variants/dist/transformer.js";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
	},
	plugins: [
		nextui({
			prefix: "pomaray",
			themes: {
				light: {
					colors: {
						background: "#ECEDEE",
						focus: {
							DEFAULT: "#387040",
							50: "#f4f9f4",
							100: "#e5f3e7",
							200: "#cce6cf",
							300: "#a4d1aa",
							400: "#74b47d",
							500: "#50975a",
							600: "#387040",
							700: "#33623a",
							800: "#2c4f31",
							900: "#26412b",
						},						primary: {
							DEFAULT: "#387040",
							50: "#f4f9f4",
							100: "#e5f3e7",
							200: "#cce6cf",
							300: "#a4d1aa",
							400: "#74b47d",
							500: "#50975a",
							600: "#387040",
							700: "#33623a",
							800: "#2c4f31",
							900: "#26412b",
						},
						secondary: {
							DEFAULT: "#068bff",
							50: "#edfaff",
							100: "#d6f1ff",
							200: "#b5e9ff",
							300: "#83ddff",
							400: "#48c8ff",
							500: "#1ea9ff",
							600: "#068bff",
							700: "#006fee",
							800: "#085bc5",
							900: "#0d4f9b",
						},
						danger: {
							DEFAULT: "#dc2626",
							50: '#fef2f2',
							100: '#fee2e2',
							200: '#fecaca',
							300: '#fca5a5',
							400: '#f87171',
							500: '#ef4444',
							600: '#dc2626',
							700: '#b91c1c',
							800: '#991b1b',
							900: '#7f1d1d',
						},
						
					},
				},
				dark: {
					extend: "light",
					colors: {
						background: "#3d3d3d",
					},
				},
			},
		}),
	],
};
export default withTV(config);
