import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setLastName, setFirstName, setZip, setCity, setStreet, setHouseNumber, setPhone } from "../../reducers/personalDataSlice";
import axios from "axios";
import ErrorAlert from "./ErrorAlert";

const PersonalDataForm = (props) => {

    const dispatch = useDispatch();

    const zip = useSelector((state) => state.personalData.zip);
    const { lastName, firstName, city, street, houseNumber, phone } = useSelector((state) => state.personalData);

    const getCityEndpoint = `https://hur.webmania.cc/zips/${zip}.json`;
    const [cityName, setCityName] = useState('');
    const [formIsCorrect, setFormIsCorrect] = useState(true);

    useEffect(() => {
        if (zip.length === 4) {
            getCityByZipCode().then(city => {
                setCityName(city);
            });
        } else {
            setCityName('');
        }
        dispatch(setCity(cityName));
    });

    const handleFirstNameChange = (event) => {
        const firstName = event.target.value;
        dispatch(setFirstName(firstName));
    };

    const handleLastNameChange = (event) => {
        const lastName = event.target.value;
        dispatch(setLastName(lastName));
    };

    const handleZipChange = (event) => {
        const zip = event.target.value;
        dispatch(setZip(zip));
    };

    const getCityByZipCode = async () => {
        const cityObject = await axios.get(getCityEndpoint);
        return cityObject.data['zips'][0].name;
    };

    const handleStreetChange = (event) => {
        const street = event.target.value;
        dispatch(setStreet(street));
    };

    const handleHouseNumberChange = (event) => {
        const houseNumber = event.target.value;
        dispatch(setHouseNumber(houseNumber));
    };

    const handlePhoneNumberChange = (event) => {
        const phoneNumber = event.target.value;
        dispatch(setPhone(phoneNumber));
    };

    const validateForm = () => {
        if (lastName === '' || firstName === '' || zip === '' || city === '' || street === '' || houseNumber === '' || phone === '') {
            setFormIsCorrect(false);
            return;
        }
        if (zip.length !== 4) {
            setFormIsCorrect(false);
            return;
        }
        setFormIsCorrect(true);
        props.nextPhase();
    }

    return (
        <div className="mt-10">
            <form className="max-w-4xl m-auto">
                <div className="grid md:grid-cols-2 md:gap-6 text-left">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="floating_last_name" id="floating_last_name" onChange={handleLastNameChange}
                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" " required/>
                        <label htmlFor="floating_last_name"
                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Vezetéknév</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group text-left">
                        <input type="text" name="floating_first_name" id="floating_first_name" onChange={handleFirstNameChange}
                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" " required/>
                        <label htmlFor="floating_first_name"
                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Keresztnév</label>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6 text-left">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="floating_zip" id="floating_zip" onChange={handleZipChange}
                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" " required/>
                        <label htmlFor="floating_zip"
                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Irányítószám</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group text-left">
                        <input type="text" name="floating_city" id="floating_city" disabled value={cityName}
                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" " required/>
                        <label htmlFor="floating_city"
                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Település</label>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6 text-left">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="floating_street" id="floating_street" onChange={handleStreetChange}
                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" " required/>
                        <label htmlFor="floating_street"
                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Utca</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group text-left">
                        <input type="text" name="floating_house_number" id="floating_house_number" onChange={handleHouseNumberChange}
                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" " required/>
                        <label htmlFor="floating_house_number"
                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Házszám</label>
                    </div>
                </div>
                <div className="text-left">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" onChange={handlePhoneNumberChange}
                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" " required/>
                        <label htmlFor="floating_phone"
                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Mobil (+36...)</label>
                    </div>
                </div>
                { !formIsCorrect &&
                    <div className="max-w-[500px] m-auto">
                        <ErrorAlert>
                            Nem töltötte ki megfelelően az űrlapot. Ellenőrizze, hogy a megadott adatok helyesek-e.
                        </ErrorAlert>
                    </div>
                }
                <button type="button" onClick={props.previousPhase}
                        className="cursor-pointer mx-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Vissza
                </button>
                <button type="submit" onClick={validateForm}
                        className="mx-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Következő
                </button>
            </form>
        </div>
    );
};

export default PersonalDataForm;
