import { Candle } from '../types'

const CandleItem = (props: Candle) => {
    return (
        <div>
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{props.price}€</h6>
                    <p className="card-text">{props.description}</p>
                    <p className="card-text">Category: {props.categoryId}</p>
                    <p className="card-text">Color: {props.colorId}</p>
                    <p className="card-text">Fragrance: {props.fragranceId}</p>
                </div>
            </div>
        </div>
    )
}

export default CandleItem