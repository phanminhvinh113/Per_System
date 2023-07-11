import { useEffect, useState } from 'react';
import axios from 'axios';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
//
type FetchState<T> = {
    data: T | any | null;
    isLoading: boolean;
    error: any;
};
//
type FetchOptions = AxiosRequestConfig;

const useFetch = <T,>(url: string, options?: FetchOptions): FetchState<T> => {
    //
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);
    //
    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response: AxiosResponse<T> = await axios.get(url, options);
            setData(response.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            setIsLoading(false);
        }
    };
    //
    useEffect(() => {
        fetchData();
    }, [url]);
    //
    return { data, isLoading, error };
};

export default useFetch;
