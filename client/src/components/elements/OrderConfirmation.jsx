import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {clearState} from "../../reducers/personalDataSlice";
import {clearCartState} from "../../reducers/cartSlice";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const OrderConfirmation = (props) => {

    const endpoint = 'http://localhost:8800/api/orders/';

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isRequestSent, setIsRequestSent] = useState(false);

    const {id} = useSelector((state) => state.login);
    const {lastName, firstName, zip, city, street, houseNumber, phone} = useSelector((state) => state.personalData);
    const {quantity, items, totalPrice} = useSelector((state) => state.cart);

    const orderObject = {
        productId: items[0]._id,
        quantity: quantity[0],
        totalPrice: totalPrice,
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        zip: zip,
        city: city,
        street: street,
        houseNumber: houseNumber
    };

    const headers = {
        'Content-Type': 'application/json',
        'userid': id
    }

    useEffect(() => {
        if (!isRequestSent) {
            axios.post(endpoint, orderObject, {headers})
                .then(response => {
                    console.log("Sikeres kérés!")
                    console.log(response.data);
                })
                .catch(error => {
                    console.log("Hupsz...")
                    console.log(error);
                });

            setIsRequestSent(true);
        }
    }, []);

    setTimeout(() => {
        navigate('/');
        dispatch(clearState());
        dispatch(clearCartState());
    }, 2000);

    return (
        <div className="mt-10">
            <p>Köszönjük megrendelését!</p>
            <p>Rendelését sikeresen rögzítettük a rendszerünkben!</p>
            <p>Kollégánk hamarosan felveszi Önnel a kapcsolatot!</p>
        </div>
    );
};

export default OrderConfirmation;
