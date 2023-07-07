import { useEffect, useState } from 'react';
import axios from '../config/axios';

function useFetch(url: string, option: object) {
    //
    const [data, setData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<unknown>(null);
    //
    const fetchData = async () => {
        setIsLoading(true);
        try {
            const { data } = await axios.get(url, option);
            setData(data);
        } catch (error) {
            setError(error);
        }
    };
    //
    useEffect(() => {
        fetchData();
    }, [url, option]);
    //
    return { data, isLoading, error };
}

export default useFetch;
