import {createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalPrice: 0,
    },
    reducers: {
        addItemsToCart: (state, action) => {
            state.items.push(action.payload);
            state.totalPrice += action.payload.price;
        },
        removeItemsFromCart: (state, action) => {
            const product = action.payload;
            const index = state.items.findIndex(item => item._id === product._id);
            if (index >= 0) {
                state.items.splice(index, 1);
            }
            state.totalPrice -= product.price;
        },
    }
});

export const {addItemsToCart, removeItemsFromCart } = cartSlice.actions;

export default cartSlice.reducer;