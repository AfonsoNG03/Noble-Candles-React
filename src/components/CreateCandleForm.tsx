import { useCreateCandle } from '../hooks/Candles/useCreateCandle';
import { CandleCreateModel } from '../types';
import { useState } from 'react';

const CreateCandleForm = ({ userRole }: { userRole: string }) => {
    const { isLoading, error, success, createNewCandle } = useCreateCandle(userRole);
    
    const [candle, setCandle] = useState<CandleCreateModel>(
        {   
            name: "",
            description: "",
            price: 0,
            categoryId: 0,
            colorId: 0,
            fragranceId: 0
        });

    const handleSubmit = () => {
        createNewCandle(candle);
    };

    return (
        <div>
            <h2>Create Candle</h2>
            <input
                name="name"
                value={candle.name}
                onChange={(e) => setCandle({ ...candle, name: e.target.value })}
                placeholder="Candle Name"
            />
            <input
                name="description"
                value={candle.description}
                onChange={(e) => setCandle({ ...candle, description: e.target.value })}
                placeholder="Candle Description"
            />
            <input
                name="price"
                value={candle.price}
                onChange={(e) => setCandle({ ...candle, price: parseFloat(e.target.value) })}
                placeholder="Candle Price"
            />
            <input
                name="categoryId"
                value={candle.categoryId}
                onChange={(e) => setCandle({ ...candle, categoryId: parseInt(e.target.value) })}
                placeholder="Category ID"
            />
            <input
                name="colorId"
                value={candle.colorId}
                onChange={(e) => setCandle({ ...candle, colorId: parseInt(e.target.value) })}
                placeholder="Color ID"
            />
            <input
                name="fragranceId"
                value={candle.fragranceId}
                onChange={(e) => setCandle({ ...candle, fragranceId: parseInt(e.target.value) })}
                placeholder="Fragrance ID"
            />
            <button onClick={handleSubmit} disabled={isLoading}>
                {isLoading ? 'Creating...' : 'Create Candle'}
            </button>
            {error && <p>Error: {error.message}</p>}
            {success && <p>Candle created successfully!</p>}
        </div>
    );
};

export default CreateCandleForm;