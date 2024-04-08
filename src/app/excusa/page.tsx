"use client"
import { Container } from "@/components/container";
import { Text } from "@/components/text";
import { Button, Input, Textarea } from "@nextui-org/react";
import { useState } from 'react';
import Dropzone from 'react-dropzone';

interface FormData {
    studentId: string;
    grade: string;
    technique: string;
    excuseBody: string;
    email: string;
}

export default function ExcusePage() {
    const [cedulaFile, setCedulaFile] = useState<File | null>(null);
    const [formData, setFormData] = useState<FormData>({
        studentId: '',
        grade: '',
        technique: '',
        excuseBody: '',
        email: ''
    });

    const handleDrop = (acceptedFiles: File[]) => {
        setCedulaFile(acceptedFiles[0]);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm()) {
            sendEmail(formData);
            alert("Formulario enviado correctamente.");
        } else {
            alert("Por favor complete todos los campos.");
        }
    };

    const validateForm = () => {
        return (
            formData.studentId !== '' &&
            formData.grade !== '' &&
            formData.technique !== '' &&
            formData.excuseBody !== '' &&
            formData.email !== ''
        );
    };

    const sendEmail = (data: FormData) => {
        // to do: hacer que se envie el email al correo
        alert("Enviando correo electrónico a desarrolladorespomaray@gmail.com con los datos:", data);
    };

    return (
        <Container size="5xl">
            <div className="grid lg:grid-cols-[1fr,3fr] justify-center items-center w-full lg:w-[70vw] gap-8 mt-8 lg:mt-[20vh] bg-gray-200">
                <div className="flex flex-col justify-center items-center bg-primary h-[70vh] text-white space-y-4">
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
                <form className="w-full lg:w-[75%] py-10 mx-4 lg:mx-10 space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <Input
                            label="Sigerd Id del Estudiante"
                            placeholder="00000"
                            type="number"
                            size="lg"
                            radius="sm"
                            isRequired
                            name="studentId"
                            value={formData.studentId}
                            onChange={handleChange}
                        />
                        <Input
                            label="Grado"
                            placeholder="ejemplo: 4to"
                            type="text"
                            size="lg"
                            radius="sm"
                            isRequired
                            name="grade"
                            value={formData.grade}
                            onChange={handleChange}
                        />
                        <Input
                            label="Técnica"
                            placeholder="técnica"
                            type="text"
                            size="lg"
                            radius="sm"
                            isRequired
                            name="technique"
                            value={formData.technique}
                            onChange={handleChange}
                        />
                        <Dropzone onDrop={handleDrop} accept="image/png, image/jpeg">
                            {({ getRootProps, getInputProps }) => (
                                <div {...getRootProps()} className="dropzone">
                                    <input {...getInputProps()} />
                                    <Input
                                        label="Arrastra y suelta la foto de la cédula aquí, o haz clic para seleccionarla"
                                        type="text"
                                        size="sm"
                                        radius="sm"
                                        disabled
                                    />
                                </div>
                            )}
                        </Dropzone>
                        <Input
                            label="Correo Electrónico"
                            placeholder="correo@example.com"
                            type="email"
                            size="lg"
                            radius="sm"
                            isRequired
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <Textarea
                        label="Cuerpo de la excusa"
                        placeholder="Lorem ipsum dolor..."
                        isRequired
                        name="excuseBody"
                        value={formData.excuseBody}
                        onChange={handleChange}
                    />
                    <Button type="submit" color="primary" fullWidth radius="sm">
                        Enviar
                    </Button>
                </form>
            </div>
        </Container>
    );
}
