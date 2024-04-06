"use client"
import { useState } from 'react';

interface FormData {
    firstName: string;
    lastName: string;
    grade: string;
    technique: string;
    excuseReason: string;
    studentListNo: string;
    idNumber: string;
    medicalExcusePhoto: File | null;
    idPhoto: File | null;
}

function Excusa() {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        grade: '',
        technique: '',
        excuseReason: '',
        studentListNo: '',
        idNumber: '',
        medicalExcusePhoto: null,
        idPhoto: null,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, files } = e.target;
        if (files && files.length > 0) {
            setFormData(prevData => ({
                ...prevData,
                [name]: files[0]
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Aquí puedes enviar los datos al servidor o a la API de Google Drive
        console.log(formData);
    };

    return (
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Formulario de Excusa</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Nombre</label>
                        <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Apellido</label>
                        <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="grade" className="block text-sm font-medium text-gray-700">Grado</label>
                        <input type="text" name="grade" id="grade" value={formData.grade} onChange={handleChange} className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="technique" className="block text-sm font-medium text-gray-700">Técnica</label>
                        <input type="text" name="technique" id="technique" value={formData.technique} onChange={handleChange} className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="excuseReason" className="block text-sm font-medium text-gray-700">Justificación de la excusa</label>
                        <textarea name="excuseReason" id="excuseReason" value={formData.excuseReason} onChange={handleChange} rows={3} className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="studentListNo" className="block text-sm font-medium text-gray-700">No. lista del estudiante</label>
                        <input type="text" name="studentListNo" id="studentListNo" value={formData.studentListNo} onChange={handleChange} className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="idNumber" className="block text-sm font-medium text-gray-700">Cédula</label>
                        <input type="text" name="idNumber" id="idNumber" value={formData.idNumber} onChange={handleChange} className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="medicalExcusePhoto" className="block text-sm font-medium text-gray-700">Foto de excusa médica</label>
                        <input type="file" name="medicalExcusePhoto" id="medicalExcusePhoto" onChange={handleFileChange} className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="idPhoto" className="block text-sm font-medium text-gray-700">Foto de cédula</label>
                        <input type="file" name="idPhoto" id="idPhoto" onChange={handleFileChange} className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                </div>
                <div className="flex justify-end">
                    <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">Enviar</button>
                </div>
            </form>
        </div>
    );
}

export default Excusa;
