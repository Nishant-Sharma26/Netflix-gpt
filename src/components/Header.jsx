import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import {onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import {addUser,removeUser} from "../utils/userSlice";
import { LOGO } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL
        })
      );
      navigate("/browse")
      } else {

        dispatch(removeUser());
        navigate("/")
      }
    });
    return () => unsubscribe();
  },[]);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black/60 to-transparent z-10 flex justify-between">

      <img
        className="w-44"
        src= {LOGO}
        alt="logo"
      />
      {user&&(<div className="flex">
        <img
          className="w-12 h-12"
          alt="usericon"
          src= {user.photoURL}
        />
        <button onClick={handleSignOut} className="font-bold text-white">
          (Sign Out)
        </button>
      </div>)
}
    </div>
  );
};

export default Header;
