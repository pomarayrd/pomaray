import { Text } from "@/components/text";
import Link from "next/link";
import { Link as NextLink } from "@nextui-org/react";
import { DownloadsTable } from "@/components/tables/dowload/DownloadsTable";
import { UploadModal } from "./_components/upload-modal";

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
					<UploadModal />
				</div>
			</section>
			<section>
				<DownloadsTable withDelete />
			</section>
		</>
	);
}
