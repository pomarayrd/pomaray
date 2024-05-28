import { Container } from "@/components/container";
import { Text } from "@/components/text";
import { Button } from "@nextui-org/react";

export default function AdminTransaction() {
	return (
		<Container className="min-h-[40rem] flex flex-col flex-center gap-y-6">
			<Text align="center" size="heading-4" className="max-w-[30ch]">
				Este portal esta en desarrolló, lo vera pronto!
			</Text>
			<Text align="center" size="paragraph-lg">
				Pero puede crear una nueva noticia!
			</Text>
			<Button as="a" color="primary" radius="sm" href="/admin/noticias/crear">
				Crear una noticia
			</Button>
		</Container>
	);
}
