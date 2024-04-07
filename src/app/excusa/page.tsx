import { Container } from "@/components/container"
import { Text } from "@/components/text"
import { Input, Textarea } from "@nextui-org/react"

function ExcusePage() {
    return (
        <Container size="5xl">
            <div>
                <div className="flex flex-col gap-6">
                    <Text as="h2" align="center" size="heading-5" className="text-white">
                        Formulario de Excusa
                    </Text>
                    <Text
                        size="paragraph-lg"
                        align="center"
                    >
                        ¡Ahora es más fácil! Envía la excusa de tu hijo/a desde donde estés
                    </Text>
                </div>
                <form className="grid grid-cols-2 gap-8">
                    <Input
                        label="Sigerd Id del Estudiante"
                        placeholder="00000"

                        type="number"
                        /*   
                            value={}
                            onChange={}
                        */
                        size="lg"
                        radius="sm"
                        isRequired
                    />
                    <Textarea
                        label="Cuerpo de la excusa"
                        placeholder="Lorem ipsum dolor..."

                        /*   
                            value={}
                            onChange={}
                        */

                        isRequired
                    />
                    <Input
                        label="Foto de la Cédula"
                        placeholder="mi-cedula.jpg"
                        type="file"
                        accept="image/png, image/jpeg"
                    />
                </form>
            </div>
        </Container>
    )
}

export default ExcusePage