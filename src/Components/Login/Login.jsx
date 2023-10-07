import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase'
const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home")
    } catch (err) {
      setErr(true);
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#A7BCFF]">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className=' text-2xl font-semibold mb-4 text-center text-blue-500'>ZIMO CHAT</h1>
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              className="border border-gray-300 rounded w-full py-2 px-3"
              placeholder="Your email"
              
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              className="border border-gray-300 rounded w-full py-2 px-3"
              placeholder="Your password"
              
            />
          </div>
         {/* {err && <h1 className='text-md mb-2 bg-red-200 p-2'>{err}</h1>}  */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full"
          >
            Login
          </button>
        </form>
        <p className="text-gray-600 text-center mt-4">
          not registered? <Link to="/" className="text-blue-500">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
