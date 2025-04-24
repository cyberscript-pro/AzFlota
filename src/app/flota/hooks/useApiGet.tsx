import { useEffect, useState } from 'react'

type ApiGetProps = {
    url: string;
}

function useApi<T>({url} : ApiGetProps) {

    const [ loading, setLoading ] = useState(true);
    const [ data, setData ] = useState<T[]>();
    const [ error, setError ] = useState<string | null>(null);

    useEffect( () => {

        const fetchData = async () => {
            try {

                const response = await fetch(url);

                if(!response.ok) {
                    throw new Error(`Fetch Error Api status ${response.status}`);
                }

                const result: T[] = await response.json();
                setData(result);

            } catch(err) {
                setError(err instanceof Error ? err.message : 'An unknown error occurred');
            } finally {
                setLoading(false);
            }
        }

        fetchData();

    }, [])

    return {
        loading,
        data,
        error
    }
}

export default useApi