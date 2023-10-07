// import { createContext, useEffect, useState, useContext } from "react";
// import {
//   createUserWithEmailAndPassword,
//   signOut,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
// } from "firebase/auth";
// import { auth } from "../Components/firebase";
// const authContext = createContext();

// export const AuthenticationContext = ({ children }) => {
  
//   const [users, setUsers] = useState({});
//   function register(email, password) {
//     createUserWithEmailAndPassword(auth, email, password);
//     console.log("Register");
//   }
//   function login(email, password) {
//     signInWithEmailAndPassword(auth, email, password);
//   }

//   function logOut() {
//     signOut(auth);
//   }

//   useEffect(() => {
//     const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUsers(currentUser);
//       console.log(users)
//     });

//     return () => {
//       unSubscribe();
//     };
//   }, []);

//   return (
//     <authContext.Provider value={{ register, users, login, logOut }}>
//       {children}
//     </authContext.Provider>
//   );
// };

// export function useUserAuth() {
//   return useContext(authContext);
// }

import { createContext, useEffect, useState } from "react";
import { auth } from "../Components/firebase";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log(user);
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
