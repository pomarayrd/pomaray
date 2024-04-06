"use client";
import { DownloadsTable } from "@/app/descargas/_components/DownloadsTable";
import { Text } from "@/components/text";
import i18n from "@/locales/download.json";
import { motion } from "framer-motion";

export default function DescargasPage() {
	return (
		<motion.main
			initial={{
				translateY: 100,
				opacity: 0,
			}}
			animate={{
				translateY: 0,
				opacity: 1,
			}}
			className="max-w-7xl mx-auto sm:px-10 px-6"
		>
			<section>
				<Text as="h1" size="heading-5" className="text-primary ">
					{i18n.HERO.TITLE}
				</Text>
				<Text size="paragraph-lg" className="max-w-[70ch] text-pretty">
					{i18n.HERO.SUB_TITLE}
				</Text>
			</section>
			<DownloadsTable />
		</motion.main>
	);
}
