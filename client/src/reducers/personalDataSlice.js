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
        }
   }
});

export const { setLastName, setFirstName, setZip, setCity, setStreet, setHouseNumber, setPhone } = personalDataSlice.actions;

export default personalDataSlice.reducer;