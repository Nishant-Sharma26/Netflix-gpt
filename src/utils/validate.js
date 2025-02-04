// src/utils/validate.js
export const checkValidData = (email, password) => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
    
    if (!isEmailValid) return "Email is invalid";
    if (!isPasswordValid) return "Password is invalid";
    
    return null;
  };