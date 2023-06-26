import {createSlice} from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        email: '',
        password: '',
        isLoggedIn: false,
    },
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        login: (state) => {
            state.isLoggedIn = true;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.email = null;
            state.password = null;
        }
    }
});

export const { setEmail, setPassword, login, logout } = loginSlice.actions;

export default loginSlice.reducer;