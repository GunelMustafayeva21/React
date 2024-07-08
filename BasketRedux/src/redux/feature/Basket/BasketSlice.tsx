import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import './types'
import { IBasket, IProduct } from "./types";

let initialState: IBasket = {
    basket: [],
    totalPrice: 0
}
export const BasketSlice = createSlice({
    name: 'Basket',
    initialState,
    reducers: {
        addProduct: (state: IBasket, action: PayloadAction<IProduct>) => {
            state.basket.push(action.payload);
            state.totalPrice = state.basket.reduce((acc, cur) => {
                return acc + Number(cur.price)
            }, 0)

        },
        deleteProductById: (state: IBasket, action: PayloadAction<number>) => {
            state.basket = state.basket.filter(product => product.id !== action.payload)
            state.totalPrice = state.basket.reduce((acc, cur) => {
                return acc + Number(cur.price)
            }, 0)
        },
        clearAllProducts: () => initialState,
        sum: (state: IBasket) => {
            state.totalPrice = state.basket.reduce((acc, cur) => {
                return acc + Number(cur.price)
            }, 0)
        }
    }
})

export const { addProduct, deleteProductById, sum } = BasketSlice.actions
export default BasketSlice.reducer