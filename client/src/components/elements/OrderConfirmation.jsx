import React from 'react';
import {useDispatch} from "react-redux";
import {clearState} from "../../reducers/personalDataSlice";
import {clearCartState} from "../../reducers/cartSlice";

const OrderConfirmation = (props) => {

    const dispatch = useDispatch();
    dispatch(clearState());
    dispatch(clearCartState());

    return (
        <div className="mt-10">
            <p>Köszönjük megrendelését!</p>
            <p>Rendelését sikeresen rögzítettük a rendszerünkben!</p>
            <p>Kollégánk hamarosan felveszi Önnel a kapcsolatot!</p>
        </div>
    );
};

export default OrderConfirmation;
