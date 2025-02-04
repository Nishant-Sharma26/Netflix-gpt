import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import {  signInWithEmailAndPassword } from "firebase/auth";
import {  createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
const Login = () => {
    const [isSignInForm, setisSignInForm] = useState(true);
    const  [errorMessage, seterrorMessage] = useState(null);
    const navigate = useNavigate();
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const dispatch = useDispatch();
    const toggleSignInForm = ()=>{
        setisSignInForm(!isSignInForm);
    }

    const handleButtonClick = () =>{
        
         const message = checkValidData(email.current.value,password.current.value);
         seterrorMessage(message);

         if(message) return;

         
         if(!isSignInForm){
        
          createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name.current.value,
              photoURL: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            }).then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL
              }));
              navigate("/browse")
          
            }).catch((error) => {
              seterrorMessage(error.message);
            });
           
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          seterrorMessage(errorCode+" "+errorMessage);
          });
         }
         else{
        // signed in logic
  signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode+" "+errorMessage);
  });
         }
    }
  return (
    <div>
    <Header />
    <div className='absolute'>
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/IN-en-20241111-TRIFECTA-perspective_149877ab-fcbd-4e4f-a885-8d6174a1ee81_large.jpg"
      />
    </div>
   <form onSubmit = {(e)=>e.preventDefault() }className='w-3/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
    <h1 className="font-bold text-3xl py-4">{isSignInForm?"Sign In" :"Sign Up"}</h1>
    {!isSignInForm&&(<input ref={name} type='text'placeholder='Name' className='p-2 my-4 w-full text-black bg-gray-700'/>)}
    <input 
    ref = {email}
    type = "text" placeholder='Email Address' className='p-2 my-4 w-full text-black bg-gray-700'/>
    <input 
    ref = {password}
    type='password'placeholder='Password' className='p-2 my-4 w-full text-black bg-gray-700'/>
    <p className='text-red-500 font-semibold text-lg p-2'>{errorMessage}</p>
    <button className='p-2 my-6 bg-red-700 w-full rounded-xl' onClick={handleButtonClick}>{isSignInForm?"Sign In" :"Sign Up"}</button>
    <p className='my-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm?"New to Netflix?Sign up now" :"Allready registered? Sign In Now"}</p>
   </form>
    </div>
  );
};

export default Login;

