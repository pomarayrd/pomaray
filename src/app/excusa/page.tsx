import { Text } from "@/components/text";

export default function excusa() {
    return (
        <main className="flex justify-center items-center h-screen max-w-4xl">
            <div className="h-70vh flex w-[70vw]">
                <section className="flex-1 md:w-25vw bg-primary text-white p-8 flex flex-col justify-center items-center rounded-lg shadow-lg">
                    <Text as="h2" align="center" size="heading-5" className="text-white">
                        Formulario de Excusa
                    </Text>
                    <Text
                        className="mt-6 mx-auto max-w-[120vh]"
                        size="paragraph-lg"
                        align="center"
                    >
                        ¡Ahora es más fácil! Envía la excusa de tu hijo/a desde donde estés
                    </Text>
                </section>

                <section className="md:w-[calc(100% - 25vw)]">
                    <form className="bg-white bg-opacity-80 rounded-lg shadow-lg max-w-lg mx-auto p-8">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <span className="text-primary text-lg block">Nombre:</span>
                                <input type="text" placeholder="Nombre" className="input-field w-full p-2 border border-gray-300 rounded-lg" />
                            </div>
                            <div>
                                <span className="text-primary text-lg block">Apellido:</span>
                                <input type="text" placeholder="Apellido" className="input-field w-full p-2 border border-gray-300 rounded-lg" />
                            </div>
                            <div>
                                <span className="text-primary text-lg block">Grado:</span>
                                <input type="text" placeholder="Grado" className="input-field w-full p-2 border border-gray-300 rounded-lg" />
                            </div>
                            <div>
                                <span className="text-primary text-lg block">Técnica:</span>
                                <input type="text" placeholder="Técnica" className="input-field w-full p-2 border border-gray-300 rounded-lg" />
                            </div>
                        </div>

                        <div className="mb-4">
                            <span className="text-primary text-lg block">Justificación de la excusa:</span>
                            <textarea placeholder="Justificación de la excusa" rows={3} className="input-field w-full p-2 border border-gray-300 rounded-lg" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="mb-4">
                                <span className="text-primary text-lg block">No. lista del estudiante:</span>
                                <input type="text" placeholder="No. lista del estudiante" className="input-field w-full p-2 border border-gray-300 rounded-lg" />
                            </div>
                            <div className="mb-4">
                                <span className="text-primary text-lg block">Cédula:</span>
                                <input type="text" placeholder="Cédula" className="input-field w-full p-2 border border-gray-300 rounded-lg" />
                            </div>
                            <div className="mb-4">
                                <span className="text-primary text-lg block">Foto de excusa médica:</span>
                                <input type="file" className="input-field w-full p-2 border border-gray-300 rounded-lg" />
                            </div>
                            <div className="mb-4">
                                <span className="text-primary text-lg block">Foto de cédula:</span>
                                <input type="file" className="input-field w-full p-2 border border-gray-300 rounded-lg" />
                            </div>
                        </div>
                        <button type="submit" className="btn-submit bg-primary text-white py-2 px-4 rounded hover:bg-green-700 w-full">Enviar</button>
                    </form>
                </section>
            </div>
        </main>
    );
};

