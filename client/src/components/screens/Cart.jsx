import React from 'react';
import OrderProcessStepper from "../elements/OrderProcessStepper";
import CartSummary from "../elements/CartSummary";
import {useSelector} from "react-redux";
import PersonalDataForm from "../elements/PersonalDataForm";
import ValidatePersonalData from "../elements/ValidatePersonalData";
import OrderConfirmation from "../elements/OrderConfirmation";

const Cart = (props) => {

    const phase = useSelector((state) => state.cart.phase);
    let currentPhaseElement;

    switch (phase) {
        case 1:
            currentPhaseElement = <CartSummary/>;
            break;
        case 2:
            currentPhaseElement = <PersonalDataForm/>;
            break;
        case 3:
            currentPhaseElement = <ValidatePersonalData/>;
            break;
        case 4:
            currentPhaseElement = <OrderConfirmation/>;
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
