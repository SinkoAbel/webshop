import React, {useState} from 'react';
import OrderProcessStepper from "../elements/OrderProcessStepper";
import CartSummary from "../elements/CartSummary";
import {useSelector} from "react-redux";
import PersonalDataForm from "../elements/PersonalDataForm";
import ValidatePersonalData from "../elements/ValidatePersonalData";
import OrderConfirmation from "../elements/OrderConfirmation";

const Cart = (props) => {

     const [phase, setPhase] = useState(1);

    const nextPhase = () => {
        setPhase(phase+1);
    };

    const previousPhase = () => {
        setPhase(phase-1);
    }

    let currentPhaseElement;

    switch (phase) {
        case 1:
            currentPhaseElement = <CartSummary nextPhase={nextPhase}/>;
            break;
        case 2:
            currentPhaseElement = <PersonalDataForm nextPhase={nextPhase} previousPhase={previousPhase}/>;
            break;
        case 3:
            currentPhaseElement = <ValidatePersonalData nextPhase={nextPhase} previousPhase={previousPhase}/>;
            break;
        case 4:
            currentPhaseElement = <OrderConfirmation/>;
            break;
        default:
            currentPhaseElement = <CartSummary nextPhase={nextPhase}/>;
    }

    return (
        <>
            <OrderProcessStepper phase={phase}/>

            {currentPhaseElement}
        </>
    );
};

export default Cart;
