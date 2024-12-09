export type Candle = {
    id: number
    name: string
    description: string
    price: number
    categoryId: number
    colorId: number
    fragranceId: number
    createdAt: string
    updatedAt: string
    }

export type Category = {
    id: number
    name: string
    description: string
    }


export type Color = {
    id: number
    name: string
}

export type Favorite = {
    id: number
    userId: string
    candleId: number
    createdAt: string
}

export type Fragrance = {
    id: number
    name: string
    description: string
}

export type Inventory = {
    id: number
    candleId: number
    quantity: number
    lastUpdatedAt: string
}

export type Order = {
    id: number
    userId: string
    totalPrice: number
    statusId: number
    createdAt: string
    updatedAt: string
}

export type OrderItem = {
    id: number
    orderId: number
    candleId: number
    quantity: number
    price: number
}

export type Review = {
    id: number
    userId: string
    candleId: number
    rating: number
    comment: string
    createdAt: string
    updatedAt: string
}

export type Status = {
    id: number
    name: string
}

export type User = {
    id: string
    email: string
    name: string
    phoneNumber: string
    address: string
    createdAt: string
    updatedAt: string
}