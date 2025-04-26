import { useState } from 'react';
import { Inputs } from '../choferes/data/FormDataPost';
import { FieldValues, UseFormReset } from 'react-hook-form';

type ApiPost = {
    url: string;
    onClose: () => void;
    reset: any;
}

export default function useApiPost<T>({ url, onClose, reset }: ApiPost) {
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const onSubmitData = async (data: T) => {
        
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

            setSubmitSuccess(true);
            reset();
            onClose();
        
        } catch (err) {
            throw new Error(err instanceof Error ? err.message : 'An unknown error occurred');
        }
    };

    return {
        onSubmitData,
        submitSuccess,
        setSubmitSuccess
    }
}