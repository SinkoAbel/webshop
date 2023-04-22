import React, {useState} from 'react';
import OrderProcessStepper from "../elements/OrderProcessStepper";
import CartSummary from "../elements/CartSummary";

const Cart = (props) => {
    return (
        <>
            <OrderProcessStepper/>

            <CartSummary/>
        </>
    );
};

export default Cart;
