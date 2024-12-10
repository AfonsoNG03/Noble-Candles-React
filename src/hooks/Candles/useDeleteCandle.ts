import { useState, useRef } from 'react';
import { deleteCandle } from '../../services/candlesService';
import axios from 'axios';

export const useDeleteCandle = (userRole: string) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);
    const [success, setSuccess] = useState<boolean>(false);

    const abortControllerRef = useRef<AbortController | null>(null);

    const deleteExistingCandle= async (id: number) => {
        if (userRole !== 'admin') {
            setError(new Error('Unauthorized: Only admins can update candles'));
            return;
        }

        // Prevent overlapping requests
        abortControllerRef.current?.abort();
        abortControllerRef.current = new AbortController();

        setIsLoading(true);
        setSuccess(false);
        setError(null);

        try {
            await deleteCandle(id, abortControllerRef.current.signal);
            setSuccess(true);
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

    return { isLoading, error, success, deleteExistingCandle };
};
