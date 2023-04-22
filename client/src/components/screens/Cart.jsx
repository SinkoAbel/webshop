import React, {useState} from 'react';
import OrderProcessStepper from "../elements/OrderProcessStepper";
import CartSummary from "../elements/CartSummary";
import {useSelector} from "react-redux";

const Cart = (props) => {

    const phase = useSelector((state) => state.cart.phase);
    let currentPhaseElement;

    switch (phase) {
        case 1:
            currentPhaseElement = <CartSummary/>;
            break;
        default:
            currentPhaseElement = <CartSummary/>;
    }

    return (
        <>
            <OrderProcessStepper/>

            {currentPhaseElement}
        </>
    );
};

export default Cart;
