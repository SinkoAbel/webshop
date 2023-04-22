import React from 'react';
import {useSelector} from "react-redux";

const OrderProcessStepper = (props) => {

    const phase = useSelector((state) => state.cart.phase);
    console.log(phase);
    let phaseOne;
    let phaseTwo;
    let phaseThree;
    let phaseFour;

    switch (phase) {
        case 1:
            phaseOne = true;
            phaseTwo = false;
            phaseThree = false;
            phaseFour = false;
            break;
        case 2:
            phaseOne = true;
            phaseTwo = true;
            phaseThree = false;
            phaseFour = false;
            break;
        case 3:
            phaseOne = true;
            phaseTwo = true;
            phaseThree = true;
            phaseFour = false;
            break;
        case 4:
            phaseOne = true;
            phaseTwo = true;
            phaseThree = true;
            phaseFour = true;
            break;
        default:
            phaseOne = true;
            phaseTwo = false;
            phaseThree = false;
            phaseFour = false;

    }

    const textColorPhaseOne = `${phaseOne ? 'text-blue-600 dark:text-blue-500' : 'text-gray-500 dark:text-gray-400'}`;
    const circleColorPhaseOne = `${phaseOne ? 'border-blue-600 dark:border-blue-500' : 'border-gray-600 dark:border-gray-600'}`;

    const textColorPhaseTwo = `${phaseTwo ? 'text-blue-600 dark:text-blue-500' : 'text-gray-500 dark:text-gray-400'}`;
    const circleColorPhaseTwo = `${phaseTwo ? 'border-blue-600 dark:border-blue-500' : 'border-gray-600 dark:border-gray-600'}`;

    const textColorPhaseThree = `${phaseThree ? 'text-blue-600 dark:text-blue-500' : 'text-gray-500 dark:text-gray-400'}`;
    const circleColorPhaseThree = `${phaseThree ? 'border-blue-600 dark:border-blue-500' : 'border-gray-600 dark:border-gray-600'}`;

    const textColorPhaseFour = `${phaseFour ? 'text-blue-600 dark:text-blue-500' : 'text-gray-500 dark:text-gray-400'}`;
    const circleColorPhaseFour = `${phaseFour ? 'border-blue-600 dark:border-blue-500' : 'border-gray-600 dark:border-gray-600'}`;


    return (
        <>
            <ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 justify-center mt-10">
                <li className={`flex items-center ${textColorPhaseOne} space-x-2.5`}>
                    <span
                        className={`flex items-center justify-center w-8 h-8 border ${circleColorPhaseOne} rounded-full shrink-0`}>
                        1
                    </span>
                    <span>
                        <h3 className="font-medium leading-tight">Kosár</h3>
                        <p className="text-sm">Rendeld meg a választott termékeket.</p>
                    </span>
                </li>
                <li className={`flex items-center ${textColorPhaseTwo} space-x-2.5`}>
                    <span
                        className={`flex items-center justify-center w-8 h-8 border rounded-full shrink-0 ${circleColorPhaseTwo}`}>
                        2
                    </span>
                    <span>
                        <h3 className="font-medium leading-tight">Felhasználói adatok</h3>
                        <p className="text-sm">Kérjük adja meg az adatait.</p>
                    </span>
                </li>
                <li className={`flex items-center ${textColorPhaseThree} space-x-2.5`}>
                    <span
                        className={`flex items-center justify-center w-8 h-8 border rounded-full shrink-0 ${circleColorPhaseThree}`}>
                        3
                    </span>
                    <span>
                        <h3 className="font-medium leading-tight">Megerősítés</h3>
                        <p className="text-sm">Kérjük erősítse meg az adatait!</p>
                    </span>
                </li>
                <li className={`flex items-center ${textColorPhaseFour} space-x-2.5`}>
                    <span
                        className={`flex items-center justify-center w-8 h-8 border rounded-full shrink-0 ${circleColorPhaseFour}`}>
                        4
                    </span>
                    <span>
                        <h3 className="font-medium leading-tight">Rendelés visszaigazolás</h3>
                        <p className="text-sm">Valami fantasztikus kezdete...</p>
                    </span>
                </li>
            </ol>
        </>
    );
};

export default OrderProcessStepper;
