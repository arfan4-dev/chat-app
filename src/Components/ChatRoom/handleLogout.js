import { Navigate } from "react-router-dom";
import { useUserAuth } from "../../context/AuthContext";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";



 export const handleLogout=async()=>{
    
   await  signOut(auth);
   <Navigate to='/'/>
   
  }