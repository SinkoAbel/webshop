import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setPassword, setUsername } from "../../reducers/registerSlice";
import {login} from "../../reducers/loginSlice";
import axios from "axios";
import ErrorAlert from "../elements/ErrorAlert";

const Registration = () => {
    const endpoint = "http://localhost:8800/api/auth/register";

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const {username, email, password} = useSelector((state) => state.register);

    const [confirmPassword, setConfirmPassword] = useState('');
    const [successfulRegistration, setSuccessfulRegistration] = useState(false);

    const passwordsMatch = password === confirmPassword;

    const handleFormSubmission = async (event) => {
        event.preventDefault();
        if (!passwordsMatch)
            return;
        if (username === '' || email === '' || password === '')
            return;

        await axios.post(endpoint, {
            username: username,
            password: password,
            email: email
        }).then(res => {
            setSuccessfulRegistration(true);

            sessionStorage.setItem('username', JSON.stringify({ username: res.data.username }));
            sessionStorage.setItem('email', JSON.stringify({ email: res.data.email }));
            sessionStorage.setItem('isAdmin', JSON.stringify({ isAdmin: res.data.isAdmin }));
            sessionStorage.setItem('_id', JSON.stringify({ _id: res.data._id }));

            setTimeout(() => {
                dispatch(login());
                navigate("/");
            }, 3000)
        }).catch(err => {
            console.log(err);
        });
    };

    const handleUsernameChange = (event) => {
        const newUsername = event.target.value;
        dispatch(setUsername(newUsername));
    };

    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        dispatch(setEmail(newEmail));
    };

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        dispatch(setPassword(newPassword));
    };

    const handleConfirmPasswordChange = (event) => {
        const newConfirmPassword = event.target.value;
        setConfirmPassword(newConfirmPassword);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-slate-200">
            <div id="form" className="block bg-slate-50 p-6 rounded-xl shadow-lg shadow-slate-300 w-[420px] mt-[-90px] text-left py-2">
                <form action="">
                    <h2 className="text-blue-700 text-3xl font-semibold my-4">Regisztráció</h2>
                    <label for="email" className="text-sm">Felhasználónév</label><br/>
                    <input type="text" name="" id="username" onChange={handleUsernameChange}
                        className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm mb-1"/>
                    <label for="email" className="text-sm">Email cím</label><br/>
                    <input type="email" name="" id="email" onChange={handleEmailChange}
                        className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm mb-1" required/>
                    <label for="password" className="text-sm">Jelszó</label><br/>
                    <input type="password" name="" id="password" onChange={handlePasswordChange}
                        className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm mb-1"/>
                    <label for="confirmPassword" className="text-sm">Jelszó megerősítése</label><br/>
                    <input type="password" name="" id="confirmPassword" onChange={handleConfirmPasswordChange}
                        className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"/>
                    <button id="signUp" onClick={handleFormSubmission}
                            className="bg-blue-700 w-full h-10 cursor-pointer text-white rounded-md hover:bg-blue-600 hover:outline
                                       outline-2 outline-blue-600 outline-offset-2 text-base mt-5">
                        Regisztrálok
                    </button>
                    {!passwordsMatch &&
                        <ErrorAlert>
                            A jelszavak nem egyeznek!
                        </ErrorAlert>
                    }
                    {successfulRegistration &&
                        <p className="bg-green-200 pl-4 text-green-600 rounded mt-3">Sikeres regisztráció!</p>
                    }
                    <p className="text-xs my-2 mt-3">Van már fiókod? <a href="/login" className="text-blue-600">Bejelentkezés</a></p>
                </form>
            </div>
        </div>
    );
};

export default Registration;