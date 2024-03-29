import {createSlice} from "@reduxjs/toolkit";

export const personalDataSlice = createSlice({
    name: 'personalData',
    initialState: {
        lastName: '',
        firstName: '',
        zip: '',
        city: '',
        street: '',
        houseNumber: '',
        phone: ''
    },
    reducers: {
        setLastName: (state, action) => {
            state.lastName = action.payload;
        },
        setFirstName: (state, action) => {
            state.firstName = action.payload;
        },
        setZip: (state, action) => {
            state.zip = action.payload;
        },
        setCity: (state, action) => {
            state.city = action.payload;
        },
        setStreet: (state, action) => {
            state.street = action.payload;
        },
        setHouseNumber: (state, action) => {
            state.houseNumber = action.payload
        },
        setPhone: (state, action) => {
            state.phone = action.payload;
        },
        clearState: (state) => {
            state.lastName = '';
            state.firstName = '';
            state.zip = '';
            state.city = '';
            state.street = '';
            state.houseNumber = '';
            state.phone = '';
        }
   }
});

export const { setLastName, setFirstName, setZip, setCity, setStreet, setHouseNumber, setPhone, clearState } = personalDataSlice.actions;

export default personalDataSlice.reducer;