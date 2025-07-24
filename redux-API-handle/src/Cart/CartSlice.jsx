import { createSlice } from "@reduxjs/toolkit";

// InitialState 

const InitialState = {
    products: [],
    cart: [],
    status: 'idle', // loading , Success , Failed
    error: null
}

export const cartslice = createSlice({
    name: 'Cart',
    InitialState,
    reducers: {
        addtocart: (state, action) => {
            const item = state.products.find(p => p.id === action.payload)
            if (item && !state.cart.find(c => c.id === item.id)){
                
            }
        }
    }
})