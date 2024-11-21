import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
    const [isSignInForm, setisSignInForm] = useState(true);
    const toggleSignInForm = ()=>{
        setisSignInForm(!isSignInForm);
    }
  return (
    <div>
    <Header />
    <div className='absolute'>
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/IN-en-20241111-TRIFECTA-perspective_149877ab-fcbd-4e4f-a885-8d6174a1ee81_large.jpg"
      />
    </div>
   <form className='w-3/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
    <h1 className="font-bold text-3xl py-4">{isSignInForm?"Sign In" :"Sign Up"}</h1>
    {!isSignInForm&&(<input type='password'placeholder='Name' className='p-2 my-4 w-full text-black bg-gray-700'/>)}
    <input type = "text" placeholder='Email Address' className='p-2 my-4 w-full text-black bg-gray-700'/>
    <input type='password'placeholder='Password' className='p-2 my-4 w-full text-black bg-gray-700'/>
    <button className='p-2 my-6 bg-red-700 w-full rounded-xl'>{isSignInForm?"Sign In" :"Sign Up"}</button>
    <p className='my-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm?"New to Netflix?Sign up now" :"Allready registered? Sign In Now"}</p>
   </form>
    </div>
  );
};

export default Login;

