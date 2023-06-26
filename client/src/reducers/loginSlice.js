import {createSlice} from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        id: '',
        email: '',
        password: '',
        isLoggedIn: false,
    },
    reducers: {
        setId: (state, action) => {
            console.log(action.payload);
            state.id = action.payload;
        },
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
            state.id = false;
            state.isLoggedIn = false;
            state.email = null;
            state.password = null;
        }
    }
});

export const { setId, setEmail, setPassword, login, logout } = loginSlice.actions;

export default loginSlice.reducer;