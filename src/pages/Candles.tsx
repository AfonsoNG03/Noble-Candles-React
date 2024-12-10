import { useGetCandles } from "../hooks/Candles/useGetCandles";
import CandleItem from "../components/CandleItem";

export default function Candles() {
    
    const { candles, error, isLoading } = useGetCandles();

    if (isLoading) 
        return <>Loading...</>;

    if (error) 
        return <>Something went wrong! Please try again.</>;

    return (
        <>
            {/* Header */}
            <div className="row mb-3 mt-5 ms-3">
                <h1>Candles</h1>
            </div>
            {/* Header */}
            {/* Candle List */}
            <div className="row ms-3">
                {candles.map((candle) => (
                    <div key={candle.id} className="col-3">
                        <CandleItem {...candle} />
                    </div>
                ))}
            </div>
            {/* Candle List */}
        </>
    );
}