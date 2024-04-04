import { Text } from "@/components/text";
import locale from "@/locales/root.json";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import FooterTable from "./FooterTable";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="print:hidden shadow-xl border-t-2 bg-default-100">
			<div className="sm:flex-row flex flex-col justify-between mx-auto max-w-7xl gap-6 min-h-[10rem] sm:p-20 p-10">
				<div>
					<div className="grid grid-cols-1 grid-flow-row place-content-center gap-6">
						<div>
							<Text
								as="h2"
								className="col-span-3 text-primary"
								size="heading-3"
							>
								POMARAY
							</Text>
							<Text as="small" className="col-span-3" size="label-sm">
								© {currentYear} {locale.WEBSITE.NAME}.
							</Text>
						</div>

						<Button
							as={Link}
							href="https://g3deon.com/envarioment/pomaray"
							referrerPolicy="no-referrer"
							target="_blank"
							disableAnimation
							className="flex items-center bg-transparent gap-2 p-2 w-fit rounded-lg cursor-pointer hover:bg-foreground/15 transition-background"
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
						{/* <small className="text-sm">
							Icon by{" "}
							<a rel="noreferrer" target="_blank" href="https://icons8.com">
								Icons8
							</a>
						</small> */}
					</div>
				</div>
				<div className="grid sm:place-content-start sm:grid-cols-2 lg:place-content-center lg:grid-cols-3">
					<FooterTable />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
