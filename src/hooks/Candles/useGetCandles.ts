import { useState, useEffect, useRef } from 'react';
import { getCandles } from '../../services/candlesService';
import { Candle } from '../../types';
import axios from 'axios';

export const useGetCandles = () => {
    const [candles, setCandles] = useState<Candle[]>([]);
    const [error, setError] = useState<Error | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const abortControllerRef = useRef<AbortController | null>(null);

    const fetchNewCandles = async () => {
        // Prevent race conditions
        abortControllerRef.current?.abort();
        abortControllerRef.current = new AbortController();

        setIsLoading(true);

        try {
            const fetchedCandles: Candle[] = await getCandles(abortControllerRef.current?.signal);
            setCandles(fetchedCandles);
            setError(null);
            
        } catch (error: unknown) {
            if (axios.isAxiosError(error) && error.message === 'canceled') {
                console.log('Request was aborted');
            } else if (error instanceof Error) {
                setError(error);
            } else {
                setError(new Error('An unknown error occurred'));
            }
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchNewCandles();
        return () => abortControllerRef.current?.abort();
    }, []);

    return { candles, error, isLoading, refetch: fetchNewCandles };
};