import {createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItemsToCart: (state, action) => {
            state.items.push(action.payload);
        },
        removeItemsFromCart: (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index >= 0) {
                state.items.splice(index, 1);
            }
        }
    }
});

