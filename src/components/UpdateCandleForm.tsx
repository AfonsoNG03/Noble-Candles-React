import { useUpdateCandle } from '../hooks/Candles/useUpdateCandle';
import { CandleCreateModel } from '../types';
import { useState } from 'react';

const CreateCandleForm = ({ userRole, candle, id }: { userRole: string, candle: CandleCreateModel, id: number }) => {
    const { isLoading, error, success, updateExistingCandle } = useUpdateCandle(userRole);
    const [formState, setFormState] = useState<CandleCreateModel>(candle);


    const handleSubmit = () => {
        updateExistingCandle(formState, id);
    };

    return (
        <div>
            <h2>Update Candle</h2>
            <input
                name="name"
                value={formState.name}
                onChange={(e) => setFormState({ ...candle, name: e.target.value })}
                placeholder="Candle Name"
            />
            <input
                name="description"
                value={formState.description}
                onChange={(e) => setFormState({ ...candle, description: e.target.value })}
                placeholder="Candle Description"
            />
            <input
                name="price"
                value={formState.price}
                onChange={(e) => setFormState({ ...candle, price: parseFloat(e.target.value) })}
                placeholder="Candle Price"
            />
            <input
                name="categoryId"
                value={formState.categoryId}
                onChange={(e) => setFormState({ ...candle, categoryId: parseInt(e.target.value) })}
                placeholder="Category ID"
            />
            <input
                name="colorId"
                value={formState.colorId}
                onChange={(e) => setFormState({ ...candle, colorId: parseInt(e.target.value) })}
                placeholder="Color ID"
            />
            <input
                name="fragranceId"
                value={formState.fragranceId}
                onChange={(e) => setFormState({ ...candle, fragranceId: parseInt(e.target.value) })}
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