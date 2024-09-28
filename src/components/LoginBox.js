import React, { useState } from 'react'

const LoginBox = () => {

    const [toggleLogin, setToggleLogin] = useState(false)

    const handleToggleLogin = () => {
        setToggleLogin(!toggleLogin)
    }

  return (
    <div className='absolute bg-black top-1/4 left-1/3 w-96'>
        <form className='mx-10 my-12'>
            <h1 className='text-3xl text-white'> {toggleLogin ? 'Sign Up' : 'Sign In'}</h1>
            {toggleLogin && <input className='bg-white p-2 w-72 mt-4' type='text' placeholder='Username'></input>}
            <input className='bg-white p-2 w-72 mt-6' type='text' placeholder='Email'></input>
            <input className='bg-white p-2 w-72 mt-6' type='text' placeholder='Password'></input>
            {toggleLogin && <input className='bg-white p-2 w-72 mt-6' type='text' placeholder='Verify password'></input>}
            <button className='bg-red-600 font-red text-white w-72 p-2 rounded-lg mt-6'>{toggleLogin ? 'Sign Up' : 'Sign In'}</button>
            <h1 onClick={handleToggleLogin} className='text-white my-3 cursor-pointer'>New to Netflix? Sign up now.</h1>
        </form>
    </div>
  )
}

export default LoginBox