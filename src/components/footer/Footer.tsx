import { Text } from "@/components/text";
import locale from "@/locales/root.json";
import { Button } from "@nextui-org/react";
import FooterTable from "./FooterTable";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="print:hidden flex gap-6 min-h-[10rem] p-16 shadow-lg border-t-1">
			<div className="sm:px-20">
				<div className="grid grid-cols-1 grid-flow-row place-content-center gap-6">
					<div>
						<Text as="h2" className="col-span-3 text-primary" size="heading-3">
							POMARAY
						</Text>
						<Text as="small" className="col-span-3" size="label-sm">
							© {currentYear} {locale.WEBSITE.NAME}.
						</Text>
					</div>

					<Button
						disableAnimation
						variant="light"
						className="hover:bg-foreground/5 flex items-center gap-2 opacity-70 p-2 w-fit rounded-lg cursor-pointer"
						startContent={
							<span className="size-2 bg-blue-600 rounded-full shadow-inner shadow-blue-500/50 animation-pulse" />
						}
					>
						<Text
							as="h3"
							size="paragraph-sm"
							className="col-span-3 text-blue-600 mt-50 font-semibold"
						>
							Ver en G3deon
						</Text>
					</Button>
				</div>
			</div>
			<div className="grid sm:place-content-start sm:grid-cols-2 lg:place-content-center lg:grid-cols-3 xl:px-[20rem]">
				<FooterTable />
			</div>
		</footer>
	);
};

export default Footer;
