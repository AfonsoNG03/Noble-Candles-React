import { useDeleteCandle } from '../hooks/Candles/useDeleteCandle';

const DeleteCandleButton = ({ id, userRole }: { id: number, userRole: string }) => {
    const { isLoading, error, success, deleteExistingCandle } = useDeleteCandle(userRole);

    const handleDelete = () => {
        deleteExistingCandle(id);
    };

    return (
        <div>
            <button onClick={handleDelete} disabled={isLoading}>
                {isLoading ? 'Deleting...' : 'Delete Candle'}
            </button>
            {error && <p>Error: {error.message}</p>}
            {success && <p>Candle deleted successfully!</p>}
        </div>
    );
};

export default DeleteCandleButton;
