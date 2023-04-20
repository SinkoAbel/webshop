import React from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logout} from "../../reducers/loginSlice";

const Logout = () => {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('isAdmin');
    sessionStorage.removeItem('_id');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    setTimeout(() => {
        dispatch(logout());
        navigate("/");
    }, 3000);

    return (
        <div>
            <p>Sikeres kijelentkezés!</p>
        </div>
    );
};

export default Logout;
