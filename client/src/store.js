import { configureStore } from '@reduxjs/toolkit';
import registerReducer from "./reducers/registerSlice";
import loginReducer from "./reducers/loginSlice";

export default configureStore({
    reducer: {
        register: registerReducer,
        login: loginReducer,
    },
});