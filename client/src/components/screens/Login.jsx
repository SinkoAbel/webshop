import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setPassword, login } from "../../reducers/loginSlice";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Login = () => {

  const endpoint = "http://localhost:8800/api/auth/login";
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { email, password } = useSelector((state) => state.login);

  const [loginSuccessful, setLoginSuccessful] = useState(false);
  const [wrongCredentials, setWrongCredentials] = useState(false);


  const handleLoginSubmission = async (event) => {
    event.preventDefault();
    setLoginSuccessful(false);
    setWrongCredentials(false);

    if (email === '' || password === '')
      return;

    await axios.post(endpoint, {
      email: email,
      password: password,
    }).then(res => {
      setLoginSuccessful(true);
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
      setWrongCredentials(true);
    });
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    dispatch(setEmail(newEmail));
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    dispatch(setPassword(newPassword));
  };



    return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 space-y-10 py-12 px-4 sm:px-6 lg:px-8 ">
          <div className="max-w-md w-full h-[400px] mx-auto bg-white shadow-lg rounded-lg p-7 space-y-6 mt-[-150px]">
            <form action="" className="text-left">
              <h2 className="text-blue-700 text-3xl font-semibold my-3">Bejelentkezés</h2>
              <label className="text-sm font-bold text-blue-800 mt-3" htmlFor="email">Jelentkezz be a termékek megrendeléséhez.</label>
            <div className="flex flex-col">
              <label className="text-sm font-bold text-gray-600 mb-1 mt-5" htmlFor="email">Email cím</label>
              <input onChange={handleEmailChange} className="border rounded-md bg-white px-3 py-2" type="text" name="email" id="email" placeholder="Írd be az Email címed..." required/>
            </div>
            <div className="flex flex-col mt-5">
              <label className="text-sm font-bold text-gray-600 mb-1" htmlFor="password">Jelszó</label>
              <input onChange={handlePasswordChange} className="border rounded-md bg-white px-3 py-2" type="password" name="password" id="password" placeholder="Írd be a jelszavad..." />
            </div>
            <div className="mt-4">
              { loginSuccessful &&
                  <p className="text-green-500 bg-green-100 pl-4">Sikeres bejelentkezés!</p>
              }
              { wrongCredentials &&
                  <p className="text-red-500 bg-red-100 pl-4">Hibás email cím vagy jelszó!</p>
              }
            </div>
            <div className="mt-4">
              <button onClick={handleLoginSubmission} className="w-full bg-indigo-600 text-white rounded-md p-2">Bejelentkezés</button>
            </div>
            </form>
          </div>
    </main>
  );
};

export default Login;