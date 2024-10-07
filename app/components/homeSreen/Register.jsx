import React from 'react'
import { Input } from "@/components/ui/input";
const Register = () => {
  return (
    <div className=' bac relative mt-32'>
        <form className=' bg-[#ffffff72] flex flex-col gap-6 w-[40%] absolute top-[15rem] right-12 py-8 px-8'>
            <h1 className=' text-white text-[25px] font-[600]'>Register your Interest</h1>
        <Input id="name" type="text" placeholder="Full Name" />
        <Input id="name" type="text" placeholder="Email" />
        <Input id="name" type="text" placeholder="Password" />
        <button className=' bg-[#AE8E50] py-2 px-5 text-white'>Submit Your Detail</button>
        </form>
    </div>
  )
}

export default Register