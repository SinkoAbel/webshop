import React from 'react';

const Registration = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-200">
        <div id="form" className="block bg-slate-50 p-6 rounded-xl shadow-lg shadow-slate-300 w-[420px] mt-[-90px] text-left py-2">
            <form action="">
                <h2 className="text-blue-700 text-3xl font-semibold my-4">Regisztráció</h2>
                <label for="email" className="text-sm">Felhasználónév</label><br/>
                <input type="text" name="" id="username"
                    className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm mb-1"/>
                <label for="email" className="text-sm">Email cím</label><br/>
                <input type="email" name="" id="email"
                    className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm mb-1" required/>
                <label for="password" className="text-sm">Jelszó</label><br/>
                <input type="password" name="" id="password"
                    className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm mb-1"/>
                <label for="confirmPassword" className="text-sm">Jelszó megerősítése</label><br/>
                <input type="password" name="" id="confirmPassword"
                    className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"/>
                <input type="submit" name="register" value="Regisztrálok" id="signUp"
                    className="bg-blue-700 w-full h-10 cursor-pointer text-white rounded-md hover:bg-blue-600 hover:outline outline-2 outline-blue-600 outline-offset-2 text-base mt-5"/><br/>
                <p className="text-xs my-2 mt-3">Van már fiókod? <a href="/login" className="text-blue-600">Bejelentkezés</a></p>
            </form>
        </div>
    </div>
  );
};

export default Registration;