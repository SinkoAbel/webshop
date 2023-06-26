import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {removeItemsFromCart, increaseProductQty, decreaseProductQty} from "../../reducers/cartSlice";
import {Link} from "react-router-dom";

const CartSummary = (props) => {

    const {items, totalPrice, quantity} = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleItemRemoveFromCart = (product) => {
        dispatch(removeItemsFromCart(product));
    };

    const handleIncreaseQty = (newQty, modifyIndex) => {
        dispatch(increaseProductQty({newQty, modifyIndex}));
    };

    const handleDecreaseQty = (newQty, modifyIndex) => {
        dispatch(decreaseProductQty({newQty, modifyIndex}));
    };

    return (
        <>
            <div className="container mx-auto mt-10">
                <div className="flex shadow-md my-10">
                    <div className="w-3/4 bg-white px-10 py-10">
                        <div className="flex justify-between border-b pb-8">
                            <h1 className="font-semibold text-2xl">Kosár</h1>
                        </div>
                        <div className="flex mt-10 mb-5">
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Termékek</h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Mennyiség</h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Ár</h3>
                        </div>


                        {
                            items.map((item, index) => {
                               return (
                                   <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                                       <div className="flex w-2/5">
                                           <div className="w-20">
                                               <img className="h-24"
                                                    src={item.photo_path} alt=""/>
                                           </div>
                                           <div className="flex flex-col justify-between ml-4 flex-grow">
                                               <span className="font-bold text-sm">{item.product_name}</span>
                                               <button type="button"
                                                       className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                                                       onClick={() => handleItemRemoveFromCart(item)}
                                               >
                                                   Eltávolítás
                                               </button>
                                           </div>
                                       </div>
                                       <div className="flex justify-center w-1/5">
                                           <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"
                                                onClick={() => handleDecreaseQty(quantity[index], index)}>
                                               <path
                                                   d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                                           </svg>

                                           <input type="text" className="mx-2 border text-center w-8" value={quantity[index]}/>

                                           <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"
                                               onClick={() => handleIncreaseQty(quantity[index], index)}>
                                               <path
                                                   d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                                           </svg>
                                       </div>
                                       <span className="text-center w-1/5 font-semibold text-sm">{item.price} Ft</span>
                                   </div>

                               ) ;
                            })
                        }

                        <Link to={'/products'} className="flex font-semibold text-indigo-600 text-sm mt-10 hover:underline cursor-pointer">
                            <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                                <path
                                    d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/>
                            </svg>
                            Vásárlás folytatása
                        </Link>
                    </div>

                    <div id="summary" className="w-1/4 px-8 py-10">
                        <h1 className="font-semibold text-2xl border-b pb-8">Összesítő</h1>
                        <div className="flex justify-between mt-10 mb-5">
                            <span className="font-semibold text-sm uppercase">Termékek: {items.length} db</span>
                        </div>

                        <div className="border-t mt-8">
                            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                <span>Összesen fizetendő</span>
                                <span>{totalPrice} Ft</span>
                            </div>
                            <button onClick={props.nextPhase}
                                className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Megrendelés
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default CartSummary;
