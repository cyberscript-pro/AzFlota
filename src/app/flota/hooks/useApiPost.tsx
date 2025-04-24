/*'use client';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

type ApiPost = {
    url: string;
}

export default function useApiPost({ url}: ApiPost) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        setSubmitError(null);
        
        try {
        const response = await fetch( url, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Error al enviar los datos');
        }

        const result = await response.json();
        console.log('Éxito:', result);
        setSubmitSuccess(true);
        reset(); // Limpiar el formulario después del envío exitoso
        } catch (err) {
        setSubmitError(err instanceof Error ? err.message : 'An unknown error occurred');
        } finally {
        setIsSubmitting(false);
        }
    };
    
    

    return {
        register, handleSubmit, isSubmitting,submitSuccess, submitError, onSubmit
    };
}*/