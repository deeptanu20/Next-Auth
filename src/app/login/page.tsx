'use client'

import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Link from 'next/link'


export default function loginPage(){

  const router=useRouter();

 
  const[user,setUser]=useState({

    email:"",
    password:""

  })

  const[btnDisabled,setBtnDisabled]=useState(false)
  const [loading,setLoading]=useState(false)


    const login=async()=>{

      try {
        setLoading(true);
        const response= await axios.post("/api/users/login",user)
        console.log("Login Success",response.data);
        router.push("/profile")

        
      } catch (error:any) {

        console.log("Signup failed");
         toast.error(error.message);
      }

  }

  useEffect(()=>{
    if(user.email.length > 0 && user.password.length > 0 ){
      setBtnDisabled(false);
    }
    else{
      setBtnDisabled(true)
    }
    

  },[user])


  return (

      <>
     <div className='flex flex-col items-center justify-center min-h-screen'>
        <h1>{loading ? "processing" : "Login"}</h1>

       

         <label htmlFor='email'>Email</label>
         <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({...user, email: e.target.value})}
        placeholder="email"
        />

          <label htmlFor="password">Password</label>
          <input 
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="password"
            />
              
              <button onClick={login} 
                 className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">
                  {btnDisabled ? "No Login" :"Login"}
                </button>
                
                <Link href="/signup"> Visit Signup Page</Link>


    </div>
    
    </>
  )
}


