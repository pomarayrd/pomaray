import { Container } from "@/components/container"
import { Text } from "@/components/text"
import { Badge, Card, CardBody, CardHeader, Chip, Image, Tooltip } from "@nextui-org/react"

function StudentsPage() {
    return (
        <Container className="flex-center">
            <section className="flex flex-col flex-center gap-6 mt-24 py-12">
                <Text as="h1" size="heading-5">
                    Encuentra tu foto de anuario
                </Text>
                <Text size="paragraph-xl">
                    Filtra y encuentra tu foto de anuario fácilmente. Puedes utilizar los filtros para buscar.
                </Text>
            </section>
            <section className="grid grid-cols-5 gap-6 w-screen px-32">
                {
                    Array.from({ length: 30 }, (_, index) => (
                        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                        <Card key={index}>
                            <CardHeader className="relative">
                                <Image
                                    src={"https://dummyimage.com/400/000/ffffff.jpg"}
                                    className="aspect-square"
                                    width={400}
                                />
                            </CardHeader>
                            <CardBody className="flex flex-col gap-4 px-4">
                                <Tooltip showArrow content="Elias Daniel Rosario Matos" motionProps={{
                                    variants: {
                                        exit: {
                                            opacity: 0,
                                            transition: {
                                                duration: 0.05,
                                                ease: "easeIn",
                                            }
                                        },
                                        enter: {
                                            opacity: 1,
                                            transition: {
                                                duration: 0.1,
                                                ease: "easeOut",
                                            }
                                        },
                                    },
                                }}>
                                    <Text as="h4" size="paragraph-xl" className="font-bold overflow-hidden text-nowrap text-ellipsis">
                                        Elias Daniel Rosario Matos {index}
                                    </Text>
                                </Tooltip>
                                <div className="flex gap-4">
                                    <Chip variant="flat" color={index % 2 === 0 ? "warning" : "secondary"}>
                                        Informatica
                                    </Chip>
                                    <Chip>
                                        2022-23
                                    </Chip>
                                </div>
                            </CardBody>

                        </Card>
                    ))
                }
            </section>
        </Container>
    )
}

export default StudentsPage