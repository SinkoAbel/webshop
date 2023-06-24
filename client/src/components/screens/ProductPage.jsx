import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const ProductPage = (props) => {

    const productIdObject = useParams();
    const productId = productIdObject.productId;
    const endpoint = `http://localhost:8800/api/products/${productId}`;
    const [productDetails, setProductDetails] = useState({});

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

    console.log(productDetails.product_name);

    return (
        <div>
            <p>{productDetails.product_name}</p>
        </div>
    );
};

export default ProductPage;
