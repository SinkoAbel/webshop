import React from 'react';
import {useDispatch} from "react-redux";
import {clearState} from "../../reducers/personalDataSlice";
import axios from "axios";

const OrderConfirmation = (props) => {

    const endpoint = '';

    const dispatch = useDispatch();
    dispatch(clearState());

    return (
        <div className="mt-10">
            <p>Köszönjük, hogy minket választott!</p>
            <p>Rendelését sikeresen rögzítettük a rendszerünkben!</p>
        </div>
    );
};

export default OrderConfirmation;
