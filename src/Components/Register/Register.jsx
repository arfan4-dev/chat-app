import React, { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { DriveFolderUploadOutlined } from "@mui/icons-material";

import addAvatar from '../../assets/add-user.png'
import './register.css'
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {storage,db, auth} from '../firebase'
import { updateProfile } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore"; 
const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center "> 
      <div className="bg-white p-8 rounded shadow-md w-96">
      <h1 className=' text-2xl font-semibold mb-4 text-center text-blue-500'>ZIMO CHAT</h1>
        <h2 className="text-xl font-semibold mb-4">Register</h2>
        <form onSubmit={handleSubmit}> 
        <div className="mb-4">
            <label className="block text-gray-600">Name</label>
            <input
              type="text"
              className="border border-gray-300 rounded w-full py-2 px-3"
              placeholder="Enter Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              className="border border-gray-300 rounded w-full py-2 px-3"
              placeholder="Enter Email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              className="border border-gray-300 rounded w-full py-2 px-3"
              placeholder="Enter password"
              required 
            />
          </div>
          <div className="mb-4">
          <input required style={{ display: "none", cursor:"pointer"}} type="file" id="file" accept=".png,.jpeg,.jpg" />
            <label htmlFor="file" id='avatar'>
            <DriveFolderUploadOutlined className="icon" />
            {/* <img style={{  cursor:"pointer"}} src={addAvatar} height={50} width={50} alt="avatar" /> */}
            <span className='font-semibold text-gray-900'>Add Avatar</span>
            </label>
            
          </div>
          {/* {err && <h1 className='text-md mb-2 bg-red-200 p-2'>{err}</h1>}  */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full"
          >
            Register
          </button>
        </form>
        <p className="text-gray-600 text-center mt-4">
          Already registered? <Link to="/login" className="text-blue-500">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register
