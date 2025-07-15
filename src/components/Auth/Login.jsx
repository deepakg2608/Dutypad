import React, { useState } from 'react'

function Login({handleLogin}) {
    const submithandler=(e)=>{
        e.preventDefault();
        handleLogin(email,password)
        setemail('')
        setpassword('')
    }
    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')
  return (
    <div className='flex justify-center bg-zinc-900 items-center w-full h-screen'>
      <div className='w-80 rounded-xl flex flex-col justify-center h-70 border-2 border-emerald-900 p-4'>
        <form onSubmit={(e)=>{
            submithandler(e)
        }} className='flex justify-center items-center flex-col '>
            <input value={email} onChange={(e)=>{
                setemail(e.target.value)
            }} required className='px-3 font-semibold py-2 m-2 border-2 text-zinc-400 border-emerald-900 outline-none rounded-full w-[90%]' type="email" placeholder='Enter your Email' />
            <input value={password} onChange={(e)=>{
                setpassword(e.target.value)
            }} required className='px-3 font-semibold py-2 m-2 border-2 text-zinc-400 border-emerald-900 outline-none rounded-full w-[90%]' type="password" placeholder='Enter Password' />
            <button className='px-8 mt-5 w-[70%] py-2 m-2 text-zinc-400 font-semibold rounded-full outline-none bg-emerald-900'>Login</button>
        </form>

      </div>
    </div>
  )
}

export default Login
