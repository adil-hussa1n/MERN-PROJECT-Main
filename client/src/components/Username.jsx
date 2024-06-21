import React from 'react';
import profile from "../assets/profile_img.png";

const Username = () => {
  return (
    <h1>hello</h1>

//    import React, { useRef, useState } from 'react'
// import { Link } from 'react-router-dom'

// const Register = () => {
//   const [formData , setFormData] = useState({});
//   const handelChange = (e) =>{
//           setFormData({...formData,[e.target.id]: e.target.value}) 
//   }
//   const handelSubmit =async(e)=>{
//     e.preventDefault();
//     const res = await fetch ("http://localhost:5000/api/auth/signup",{
//       method:'POST',
//       headers:{
//         'Content-Type' : 'application/json',
//       },
//       body: JSON.stringify(formData),
//     });
//     const data =await res.json();
//     console.log(data);
//     setFormData({});
//   };


//   return (
//     <div className='container mx-auto mt-5'>
//     <div className='flex items-center justify-center'>
//       <div className='bg-slate-200 rounded-lg shadow-lg w-full md:w-[60%] lg:w-[40%] xl:w-[30%]'>
//         <div className='flex flex-col items-center'>
//           <h3 className='text-3xl md:text-5xl font-bold mt-10'>Sign Up</h3>
//           <span className='py-4 text-lg md:text-xl w-2/3 text-center text-gray-400'>Make your own account and Connected with us...</span>
//         </div>
//         <form className='py-1' onSubmit={handelSubmit}>
//           <div className='textbox flex flex-col items-center gap-4'>
//             <input onChange={handelChange}  id='username' className='bg-slate-100 border-0 px-3 py-2 rounded-xl w-3/4 md:w-3/4 shadow-sm text-lg focus:outline-none' type="text" placeholder='Username' />
//             <input onChange={handelChange} id='email' className='bg-slate-100 border-0 px-3 py-2 rounded-xl w-3/4 md:w-3/4 shadow-sm text-lg focus:outline-none' type="email" placeholder='email' />
//             <input onChange={handelChange} id='password' className='bg-slate-100 border-0 px-3 py-2 rounded-xl w-3/4 md:w-3/4 shadow-sm text-lg focus:outline-none' type="password" placeholder='password' />
//             <button type='submit' className='bg-teal-500 rounded-xl text-lg text-gray-300 shadow-md w-3/4 h-10 hover:bg-teal-600'>Sign Up</button>
//             <button type='submit' className='bg-yellow-500 rounded-xl text-lg text-gray-300 shadow-md w-3/4 h-10 hover:bg-yellow-600'>continue with google</button>
//           </div>
//           <div className='flex justify-center my-3'>
//             <p>
//               Hava an account ? <span className='text-red-500'><Link to='/signin'>sign in</Link></span>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default Register
  )
  }

export default Username
