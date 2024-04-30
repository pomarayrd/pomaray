import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Politécnico Madre Rafaela Ybarra",
		short_name: "Pomaray",
		description:
			"Centro educativo especializado en educación técnica, comprometidos con la excelencia académica y la formación integral de nuestros estudiantes. Descubre cómo podemos ayudarte a alcanzar tus metas profesionales y personales.",
		start_url: "/",
		display: "standalone",
		background_color: "#ECEDEE",
		theme_color: "#387040",
		icons: [
			{
				src: "images/icons/favicon.svg",
				sizes: "any",
				type: "image/svg+xml",
			},
			{
				src: "images/icons/favicon-16x16.png",
				sizes: "16x16",
				type: "image/png",
			},
			{
				src: "images/icons/favicon-32x32.png",
				sizes: "32x32",
				type: "image/png",
			},
			{
				src: "images/icons/android-chrome-192x192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				src: "images/icons/android-chrome-512x512.png",
				sizes: "512x512",
				type: "image/png",
			},
			{
				src: "images/icons/apple-touch-icon.png",
				sizes: "any",
				type: "image/png",
				purpose: "maskable",
			},
		],
	};
}
