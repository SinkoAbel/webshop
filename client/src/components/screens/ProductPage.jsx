import React, {useState, useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {addItemsToCart} from "../../reducers/cartSlice";
import axios from "axios";

const ProductPage = (props) => {

    const productIdObject = useParams();
    const productId = productIdObject.productId;
    const endpoint = `http://localhost:8800/api/products/${productId}`;

    const [productDetails, setProductDetails] = useState({});
    const [amount, setAmount] = useState(1);
    const [isPlaceToCartClicked, setIsPlaceToCartClicked] = useState(false);

    const {items} = useSelector((state) => state.cart);
    let {isLoggedIn} = useSelector((state) => state.login);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchEndpoint = async () => {
            await axios.get(endpoint)
                .then((productObj) => {
                    setProductDetails(productObj.data);
                }).catch(err => {
                    console.log(err);
            });
        };

        fetchEndpoint();
    }, [endpoint]);

    useEffect(() => {
        if (amount < 1) {
            setAmount(1);
        }
    }, [amount]);

    const handleAddItemsToCart = () => {
        dispatch(addItemsToCart({productDetails, amount}));
        setIsPlaceToCartClicked(true);
    };

 
    return (
        <div className='flex flex-col justify-between lg:flex-row gap-16 lg:items-center'>
            <div className='flex flex-col gap-6 lg:w-2/5'>
                <img src={productDetails.photo_path} alt="" className='w-full h-full aspect-square object-cover rounded-xl'/>
            </div>
            <div className='flex flex-col gap-4 lg:w-3/4'>
                {isPlaceToCartClicked &&
                    <div className="p-10 bg-green-100 rounded-2xl font-bold text-2xl">
                        A termék a kosárba került.
                    </div>
                }
                <div className='text-left'>
                    <h1 className='text-3xl font-bold mb-7 text-violet-600'>{productDetails.product_name}</h1>
                    <h6 className='text-2xl font-semibold'>Ár: {productDetails.price} Ft.</h6>
                </div>
                <div className='flex flex-row items-center gap-12 mt-5'>
                    {isLoggedIn &&
                        <>
                            <div className='flex flex-row items-center'>
                                <button className='bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev - 1)}>-</button>
                                <span className='py-4 px-6 rounded-lg'>{amount}</span>
                                <button className='bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev + 1)}>+</button>
                            </div>
                            <button className='bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full'
                                    onClick={handleAddItemsToCart}>
                                Hozzáadás a kosárhoz
                            </button>
                        </>
                    }
                    <Link to={'/products'} className='bg-red-800 text-white font-semibold py-3 px-16 rounded-xl h-full'>
                        Vissza a termékekhez
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
