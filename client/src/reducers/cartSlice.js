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
                const priceToSubtract = product.price * state.quantity[index];
                state.totalPrice -= priceToSubtract;

                state.items.splice(index, 1);
                state.quantity.splice(index, 1);
            }
        },
        increaseProductQty: (state, action) => {
            const {newQty, modifyIndex} = action.payload;
            const product = state.items[modifyIndex];
            state.quantity[modifyIndex] = newQty+1;
            state.totalPrice += product.price;
        },
        decreaseProductQty: (state, action) => {
            const {newQty, modifyIndex} = action.payload;
            const product = state.items[modifyIndex];
            if (state.quantity[modifyIndex] === 1) return;
            state.quantity[modifyIndex] = newQty-1;
            state.totalPrice -= product.price;
        },
        clearCartState: (state) => {
            state.quantity = [];
            state.items = [];
            state.totalPrice = 0;
        },
    }
});

export const {addItemsToCart, removeItemsFromCart,
              increaseProductQty, decreaseProductQty,
              clearCartState} = cartSlice.actions;

export default cartSlice.reducer;