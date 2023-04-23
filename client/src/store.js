import { configureStore } from '@reduxjs/toolkit';
import registerReducer from "./reducers/registerSlice";
import loginReducer from "./reducers/loginSlice";
import cartReducer from "./reducers/cartSlice";
import personalDataReducer from  "./reducers/personalDataSlice";

export default configureStore({
    reducer: {
        register: registerReducer,
        login: loginReducer,
        cart: cartReducer,
        personalData: personalDataReducer
    },
});