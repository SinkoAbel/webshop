import React from 'react';

const OrderProcessStepper = (props) => {
    return (
        <>
            <ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 justify-center mt-10">
                <li className="flex items-center text-blue-600 dark:text-blue-500 space-x-2.5">
                    <span
                        className="flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
                        1
                    </span>
                    <span>
                        <h3 className="font-medium leading-tight">Kosár</h3>
                        <p className="text-sm">Rendeld meg a választott termékeket.</p>
                    </span>
                </li>
                <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
                    <span
                        className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                        2
                    </span>
                    <span>
                        <h3 className="font-medium leading-tight">Felhasználói adatok</h3>
                        <p className="text-sm">Kérjük adja meg az adatait.</p>
                    </span>
                </li>
                <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
                    <span
                        className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                        3
                    </span>
                    <span>
                        <h3 className="font-medium leading-tight">Megerősítés</h3>
                        <p className="text-sm">Kérjük erősítse meg az adatait!</p>
                    </span>
                </li>
                <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
                    <span
                        className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
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
