import { useState } from 'react';

type ApiDelete = {
    url: string;
}

export default function useApiDelete() {
    const [deleteSuccess, setDeleteSuccess] = useState(false);

    const onDeleteChofer = async ({ url }: ApiDelete) => {
        try {
            const response = await fetch( url, {
                method: 'DELETE',
                headers: {
                'Content-Type': 'application/json',
                }
            });

            if (!response.ok) {
                throw new Error('Error al eliminar el chofer');
            }

            setDeleteSuccess(true);
        
        } catch (err) {
            throw new Error(err instanceof Error ? err.message : 'An unknown error occurred');
        }
    };

    return {
        onDeleteChofer,
        deleteSuccess,
        setDeleteSuccess
    }
}