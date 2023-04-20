import React from 'react';

const Login = () => {
  return (
<main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 space-y-10 py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-md w-full h-[400px] mx-auto bg-white shadow-lg rounded-lg p-7 space-y-6 mt-[-150px]">
        <form action="" className="text-left">
          <h2 className="text-blue-700 text-3xl font-semibold my-3">Bejelentkezés</h2>
          <label className="text-sm font-bold text-blue-800 mt-3" for="email">Jelentkezz be a termékek megrendeléséhez.</label>
        <div className="flex flex-col">
          <label className="text-sm font-bold text-gray-600 mb-1 mt-5" for="email">Email cím</label>
          <input className="border rounded-md bg-white px-3 py-2" type="text" name="email" id="email" placeholder="Írd be az Email címed..." required/>
        </div>
        <div className="flex flex-col mt-5">
          <label className="text-sm font-bold text-gray-600 mb-1" for="password">Jelszó</label>
          <input className="border rounded-md bg-white px-3 py-2" type="password" name="password" id="password" placeholder="Írd be a jelszavad..." />
        </div>
        <div className="mt-8">
          <button className="w-full bg-indigo-600 text-white rounded-md p-2">Bejelentkezés</button>
        </div>
        </form>
      </div>
</main>
  );
};

export default Login;