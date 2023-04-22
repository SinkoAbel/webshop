import {createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        phase: 1,
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
        },
        nextPhase: (state) =>{
            state.phase++;
        },
        previousPhase: (state) => {
            if (state.phase > 1)
                state.phase--;
        }
    }
});

export const {addItemsToCart, removeItemsFromCart, nextPhase, previousPhase} = cartSlice.actions;

export default cartSlice.reducer;