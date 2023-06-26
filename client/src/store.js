import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import registerReducer from "./reducers/registerSlice";
import loginReducer from "./reducers/loginSlice";
import cartReducer from "./reducers/cartSlice";
import personalDataReducer from  "./reducers/personalDataSlice";

const rootReducer = combineReducers({
    register: registerReducer,
    login: loginReducer,
    cart: cartReducer,
    personalData: personalDataReducer,
});

const persistConfig = {
    key: 'root',
    storage: storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
});

const persistor = persistStore(store);

export {store, persistor};