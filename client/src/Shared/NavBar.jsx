
import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const NavBar = () => {
  const { currentUser} = useSelector(state =>state.user)
  return (
    // <div className='bg-slate-200'>
    //     <div className='flex justify-between items-center max-w-6xl  mx-auto p-3 '>
    //         <Link to="/">
    //         <h1 className='font-bold text-4xl'>ExploreConnect</h1>
    //         </Link>
            
    //         <ul className='flex gap-4 font-medium cursor-pointer'>
    //             <Link to='/'><li >Home</li></Link>
    //             <Link to="/about"><li >About US</li></Link>
    //             <Link to="/profile">
    //               {currentUser ? (
    //                 <Link to="/profile">  <img src={currentUser.profilePicture} alt="Profile" className='h-8 w-8 rounded-full object-cover'/></Link>
                      
    //               ):
    //               (

    //               <Link to ='/signIn' ><li >Sign In</li></Link>
    //               )}
    //               </Link>
    //         </ul>
    //     </div>
        
    // </div>

    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About US</Link></li>
        <li><a>Gallery</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <Link to="/" className="btn btn-ghost text-xl">ExploreConnect</Link>
  </div>
  <div className="navbar-end">
 
  <Link to="/profile">
  {currentUser ? (
    <Link to="/profile" className="inline-block">
      <img src={currentUser.profilePicture} alt="Profile" className="h-8 w-8 rounded-full object-cover"/>
    </Link>
  ) : (
    <Link to="/signIn" className="inline-block">
      <button className="px-4 py-2 bg-green-500 text-white rounded-lg">SignIn or SignUp</button>
    </Link>
  )}
</Link>


<div className="dropdown dropdown-end">
      
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    
  )
}

export default NavBar