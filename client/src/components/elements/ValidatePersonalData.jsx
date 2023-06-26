import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const ValidatePersonalData = (props) => {

    const dispatch = useDispatch();
    const {lastName, firstName, zip, city, street, houseNumber, phone} = useSelector((state) => state.personalData);
    const {quantity, items, totalPrice} = useSelector((state) => state.cart);

    const endpoint = '';

    return (
        <div>
            <div className="mt-10">
                <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                    <div className="flex flex-col pb-3">
                        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Név:</dt>
                        <dd className="text-lg font-semibold">{lastName + ' ' + firstName}</dd>
                    </div>
                    <div className="flex flex-col py-3">
                        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Lakcím</dt>
                        <dd className="text-lg font-semibold">{zip + ', ' + city + ', ' + street + ' ' + houseNumber}</dd>
                    </div>
                    <div className="flex flex-col pt-3">
                        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Telefonszám:</dt>
                        <dd className="text-lg font-semibold">{phone}</dd>
                    </div>

                    <div className="flex flex-col pt-3">
                        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Megrendelt termékek:</dt>
                        {
                        items.map((item, index) => {
                            return (
                                <dd className="text-lg font-semibold">{item.product_name} - {quantity[index]} db</dd>
                            )
                        })
                    }
                    </div>

                    <div className="flex flex-col pt-3">
                        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Összesen fizetendő:</dt>
                        <dd className="text-lg font-semibold">{totalPrice} Ft</dd>
                    </div>
                </dl>
            </div>

            <div className="flex justify-center mt-5">
                <button type="button" onClick={props.previousPhase}
                        className="cursor-pointer mx-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Vissza
                </button>
                <button type="button" onClick={props.nextPhase}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg aria-hidden="true" className="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                    </svg>
                    Megrendelem
                </button>

            </div>
        </div>
    );
};

export default ValidatePersonalData;
