import axios from 'axios';
import { Candle, ApiResponse, CandleCreateModel } from "../types";

const baseUrl: string = 'https://localhost:7073/api/Candles';

export const getCandles = async (signal: AbortSignal): Promise<Candle[]> => {
    try {
        const response = await axios.get<ApiResponse>(baseUrl, {
            signal,
        });

        return response.data.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data || 'Network response was not ok');
        } else {
            throw new Error('An unknown error occurred');
        }
    }
};

export const getCandle = async (id: number, signal: AbortSignal): Promise<Candle> => {
    try {
        const response = await axios.get<Candle>(`${baseUrl}/${id}`, {
            signal,
        });

        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data || 'Network response was not ok');
        } else {
            throw new Error('An unknown error occurred');
        }
    }
};

export const createCandle = async (candle: CandleCreateModel, signal: AbortSignal): Promise<Candle> => {
    try {
        const response = await axios.post<Candle>(`${baseUrl}/Create`, candle, {
            signal,
        });

        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log(error.response?.data);
            console.log(error.response?.status);
            throw new Error(error.response?.data || 'Network response was not ok');
        } else {
            throw new Error('An unknown error occurred');
        }
    }
};

export const updateCandle = async (candle: CandleCreateModel, id: number, signal: AbortSignal): Promise<Candle> => {
    try {
        const response = await axios.put<Candle>(`${baseUrl}/Update/${id}`, candle, {
            signal,
        });

        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data || 'Network response was not ok');
        } else {
            throw new Error('An unknown error occurred');
        }
    }
};

export const deleteCandle = async (id: number, signal: AbortSignal): Promise<void> => {
    try {
        await axios.delete(`${baseUrl}/Delete/${id}`, {
            signal,
        });
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data || 'Network response was not ok');
        } else {
            throw new Error('An unknown error occurred');
        }
    }
};