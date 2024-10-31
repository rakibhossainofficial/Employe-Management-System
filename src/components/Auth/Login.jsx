import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    
    const [email, setEmail] = useState(" ")
    const [password, setPassword] = useState("")

    const submitHandler = (e) =>{
        e.preventDefault()
        // console.log("email is", email)
        // console.log("password is",password)
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }

  return (
    <div className='h-screen w-full flex  items-center justify-center '>
        <div className='border-2 border-emerald-600 py-20 px-16 rounded-xl shadow-xl shadow-emerald-500/40'>
            <form  onSubmit={(e) =>{
                submitHandler(e)
            }}
             className='flex flex-col items-center gap-6 justify-center'>
                <input value={email} 
                onChange={(e) =>{
                    setEmail(e.target.value)
                }} 
                 className='border-emerald-600  py-4 px-5 rounded-full outline-none bg-transparent border-2 placeholder:text-#dedede text-white focus:border-emerald-300' type="email" placeholder='Enter Your Email'required />
                <input
                 value={password} 
                 onChange={(e) =>{
                     setPassword(e.target.value)
                 }} 
                 className='border-emerald-600 py-4 px-5 rounded-full outline-none bg-transparent border-2 placeholder:text-#dedede text-white focus:border-emerald-300' type="password" placeholder='Enter Your Password' required  />
                <button className='bg-emerald-600 py-4 px-5 w-full rounded-full outline-none  placeholder:text-#dedede text-white hover:bg-emerald-900 active:bg-emerald-700 focus:outline-none focus:ring focus:ring-emerald-300' type='submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Login
