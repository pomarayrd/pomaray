import { Container } from "@/components/container";

export default function AboutLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <Container className="max-w-7xl pb-12">
            <article className="mx-auto space-y-8 pt-32">{children}</article>
        </Container>
    );
}
