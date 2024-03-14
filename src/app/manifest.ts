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
				src: "/favicon.ico",
				sizes: "any",
				type: "image/x-icon",
			},
		],
	};
}
