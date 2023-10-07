import React, { useContext } from 'react'

import { handleLogout } from './handleLogout'
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  // const {users}=useUserAuth()
  const { currentUser } = useContext(AuthContext);

function logOut(){
  handleLogout();
}

  return (
    <div className='navbar'>
      <span className="logo">ZIMO CHAT </span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{`${currentUser.displayName}`}</span>
        <button id='navbarBtn' onClick={logOut}>logout</button>
      </div>
    </div>
  )
}           

export default Navbar