import { Text } from "@/components/text";
import Link from "next/link";
import { Button, Link as NextLink, Tooltip } from "@nextui-org/react";
import { FaUpload } from "react-icons/fa";
import { DownloadsTable } from "@/components/table/DownloadsTable";

export default function UploadFilePage() {
	return (
		<>
			<section className="flex justify-between items-center py-12">
				<div className="flex flex-col gap-6">
					<Text size="heading-6">Archivos públicos</Text>
					<Text size="label-base">
						Estos archivos son los que se encuentran en{" "}
						<NextLink underline="always" as={Link} href="/descargas">
							/descargas
						</NextLink>
						.
					</Text>
				</div>
				<div>
					<Tooltip content="Subir un archivo">
						<Button isIconOnly color="primary" radius="sm">
							<FaUpload />
						</Button>
					</Tooltip>
				</div>
			</section>
			<section>
				<DownloadsTable withDelete />
			</section>
		</>
	);
}
