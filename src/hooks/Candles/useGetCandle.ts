import { useState, useRef } from 'react';
import { getCandle } from '../../services/candlesService';
import { Candle } from '../../types';
import axios from 'axios';

export const useGetCandle = () => {
    const [candle, setCandle] = useState<Candle>();
    const [error, setError] = useState<Error | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const abortControllerRef = useRef<AbortController | null>(null);

    const fetchNewCandle = async (id: number) => {
        // Prevent race conditions
        abortControllerRef.current?.abort();
        abortControllerRef.current = new AbortController();

        setIsLoading(true);

        try {
            const fetchedCandle: Candle = await getCandle(id, abortControllerRef.current?.signal);
            setCandle(fetchedCandle);
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


    return { candle, error, isLoading, fetchNewCandle };
};