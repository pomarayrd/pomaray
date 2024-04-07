import { Container } from "@/components/container";
import locale from "@/locales/contacto.json";
import { Button, Input, Textarea } from "@nextui-org/react";

export default function ContactoPage() {
    const { HERO, FORM, ADDITIONAL_INFO } = locale;
    return (
        <Container size="container" className="flex-center min-h-[20vh] w-full">
            <section className="text-center">
                <h1 className="text-5xl font-bold my-4 text-primary">
                    {HERO.TITLE}
                </h1>
                <p className="text-pretty mt-2 sm:max-w-[55ch] max-w-[40ch]">{HERO.DESCRIPTION}</p>
            </section>

            <section className="flex flex-center flex-col-reverse gap-12 lg:flex-row mt-8 w-full">
                <div className="w-full md:text-center">

                    <div className="mb-8">
                        <h2 className="text-3xl font-bold mb-4">Horarios</h2>
                        <p>{ADDITIONAL_INFO.HOURS}</p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-3xl font-bold mb-4">Dirección</h2>
                        <p>{ADDITIONAL_INFO.ADDRESS}</p>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">Soporte</h2>
                        <p>
                            Correo Electrónico: {ADDITIONAL_INFO.SUPPORT.EMAIL}
                            <br />
                            Teléfono: {ADDITIONAL_INFO.SUPPORT.PHONE}
                        </p>
                    </div>

                </div>

                <div className="w-full pr-4">
                    <form className="grid grid-cols-1 gap-8">
                        {FORM.FIELDS.map((field) => (
                            <div key={field.ID}>
                                {field.TYPE === "textarea" ? (
                                    <Textarea
                                        id={field.ID}
                                        name={field.ID}
                                        minRows={10}
                                        size="lg"
                                        radius="md"
                                        label={field.PLACEHOLDER}
                                        required={field.REQUIRED}
                                    />
                                ) : (
                                    <Input
                                        type={field.TYPE}
                                        id={field.ID}
                                        name={field.ID}
                                        size="lg"
                                        placeholder={field.PLACEHOLDER}
                                        isRequired={field.REQUIRED}
                                    />
                                )}
                            </div>
                        ))}
                        <Button type="submit" color="primary">
                            {FORM.SEND_BUTTON}
                        </Button>
                    </form>

                </div>

            </section>
        </Container>
    );
}