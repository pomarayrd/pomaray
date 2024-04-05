import React from "react";
import { Input, Textarea, Button } from "@nextui-org/react";
import locale from "@/locales/contacto.json";
import { Text } from "@/components/text";

export default function ContactoPage() {
    const { HERO, FORMULARIO, INFORMACION_ADICIONAL } = locale;
    return (
        <main className="min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-6 sm:px-12 py-6">
                <section className="text-center">
                    <Text as="h2" size="heading-5" className="text-4xl font-bold text-primary mb-6" align="center">
                        {HERO.TITULO}
                    </Text>
                    <Text
                        className="mx-auto max-w-md text-gray-700"
                        size="paragraph-lg"
                        align="center"
                    >
                        {HERO.DESCRIPCION}
                    </Text>
                </section>

                <section className="flex flex-wrap mt-8">
                    <div className="w-full sm:w-1/2 pr-4 pt-8 text-center">
                        <div className="mb-8">
                            <Text as="h2" size="heading-4" className="text-3xl font-bold text-primary mb-4" align="center">
                                Horarios
                            </Text>
                            <Text size="paragraph-lg" align="center">
                                {INFORMACION_ADICIONAL.HORARIOS}
                            </Text>
                        </div>

                        <div className="mb-8">
                            <Text as="h2" size="heading-4" className="text-3xl font-bold text-primary mb-4" align="center">
                                Dirección
                            </Text>
                            <Text size="paragraph-lg" align="center">
                                {INFORMACION_ADICIONAL.DIRECCION}
                            </Text>
                        </div>

                        <div className="mb-12">
                            <Text as="h2" size="heading-4" className="text-3xl font-bold text-primary mb-4" align="center">
                                Soporte
                            </Text>
                            <Text size="paragraph-lg" align="center">
                                Correo Electrónico: {INFORMACION_ADICIONAL.SOPORTE.CORREO}
                            </Text>
                            <Text size="paragraph-lg" align="center">
                                Teléfono: {INFORMACION_ADICIONAL.SOPORTE.TELEFONO}
                            </Text>
                        </div>
                    </div>

                    <div className="w-full sm:w-1/2 pr-4">
                        <h2 className="text-3xl font-bold mb-4 text-center text-primary">{FORMULARIO.TITULO}</h2>
                        <form className="grid grid-cols-1 gap-6 bg-primary p-8 rounded-lg">
                            {FORMULARIO.CAMPOS.map((campo) => (
                                <div key={campo.ID}>
                                    <label className="block text-sm font-medium text-white mb-1">
                                        {campo.TITULO}
                                        {campo.REQUERIDO && <span className="text-red-500">*</span>}
                                    </label>
                                    {campo.TIPO === "areaTexto" ? (
                                        <Textarea
                                            id={campo.ID}
                                            name={campo.ID}
                                            rows={4}
                                            className="mt-1 rounded-md bg-secondary text-primary"
                                            required={campo.REQUERIDO}
                                        />
                                    ) : (
                                        <Input
                                            type={campo.TIPO}
                                            id={campo.ID}
                                            name={campo.ID}
                                            className="mt-1 rounded-md bg-secondary text-primary"
                                            required={campo.REQUERIDO}
                                        />
                                    )}
                                </div>
                            ))}
                            <Button type="submit" color="secondary" className="w-full mt-4">
                                {FORMULARIO.BOTON_ENVIAR.TEXTO}
                            </Button>
                        </form>
                    </div>
                </section>
            </div>
        </main>
    );
}
