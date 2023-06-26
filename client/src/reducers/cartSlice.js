import {createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        quantity: [],
        items: [],
        totalPrice: 0,
    },
    reducers: {
        addItemsToCart: (state, action) => {
            const {productDetails, amount} = action.payload;

            const index = state.items.findIndex(item => item._id === productDetails._id);
            if (index >= 0)
                return;

            state.items.push(productDetails);
            state.quantity.push(amount);
            state.totalPrice += productDetails.price;
        },
        removeItemsFromCart: (state, action) => {
            const product = action.payload;
            const index = state.items.findIndex(item => item._id === product._id);
            if (index >= 0) {
                state.items.splice(index, 1);
                state.quantity.splice(index, 1);
            }
            state.totalPrice -= product.price;
        }
    }
});

export const {addItemsToCart, removeItemsFromCart } = cartSlice.actions;

export default cartSlice.reducer;