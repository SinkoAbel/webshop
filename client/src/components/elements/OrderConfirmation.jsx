import React from 'react';
import {useDispatch} from "react-redux";
import {clearState} from "../../reducers/personalDataSlice";

const OrderConfirmation = (props) => {

    const dispatch = useDispatch();
    dispatch(clearState());

    return (
        <div className="mt-10">
            <p>Köszönjük megrendelését!</p>
            <p>Rendelését sikeresen rögzítettük a rendszerünkben!</p>
            <p>Kollégánk hamarosan felveszi Önnel a kapcsolatot!</p>
        </div>
    );
};

export default OrderConfirmation;
