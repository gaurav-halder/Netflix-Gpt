import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'

const Login = () => {

    const [isSignInForm, SetIsSignForm] = useState(true);
    const toggleSignInForm = () =>{
        SetIsSignForm(!isSignInForm);
    }

  return (
    <div>
        <Header/>
        <img className='w-full h-fit absolute' alt='background-image' src='/images/Netflix_Bg.png'></img>
        <form className='absolute bg-black w-2/6 mx-auto left-0 right-0 my-24 py-12 text-white rounded-md bg-opacity-85'>
            <h1 className='font-semibold text-3xl mb-6 px-20'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && (<input type='text' placeholder='Name' className='p-3.5 my-3 mx-20 w-2/3 rounded-sm bg-transparent border border-gray-500'></input>)}
            <input type='text' placeholder='Email or mobile number' className='p-3.5 my-3 mx-20 w-2/3 rounded-sm bg-transparent border border-gray-500'></input>
            <input type='password' placeholder='Password' className='p-3.5 my-3 mx-20 w-2/3 rounded-sm bg-transparent border border-gray-500'></input>
            <button className='py-2 my-3 mx-20 bg-red-600 w-2/3 rounded-sm'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className="my-3 text-ms text-gray-400 text-center">OR</p>
            <div className='flex justify-center text-center my-4'>
                <p className="text-gray-400">{isSignInForm ? "New to Netflix ?" : "Already a Netflix User ?"}</p>
                <p className='ps-2 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "Sign Up now." : "Sign In now."}</p>
            </div>
        </form>
        <Footer/>
    </div>
  )
}

export default Login