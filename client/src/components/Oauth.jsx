import React from 'react'
import axios from 'axios';
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'
import { app } from '../firebase'
import {  useDispatch } from 'react-redux'
import { signInSuccess } from '../redux/user/userSlice'
import { useNavigate } from 'react-router-dom';

const Oauth = () => {
    const dispatch = useDispatch();
    const naigate =useNavigate();
    const handlGoogle = async()=>{
        try{
         const provider = new GoogleAuthProvider()
         const auth = getAuth(app);
         const result = await signInWithPopup(auth,provider)
         let formData ={
          name:result.user.displayName,
          email:result.user.email,
          photo: result.user.photoURLb 
         }
        //  console.log(result)
         const res = await axios.post('http://localhost:5000/api/auth/google',formData);
        //  const data = await res.json();
         console.log(res)
         dispatch(signInSuccess(res.data))
         naigate('/')




        }
        catch(e){
         console.log("could not login with google", e)
        }
    }
  return (
    <button type='button' onClick={handlGoogle} className='bg-yellow-500 rounded-xl text-lg text-gray-300 shadow-md w-3/4 h-10 hover:bg-yellow-600'>or, continue with google</button>

  )
}

export default Oauth