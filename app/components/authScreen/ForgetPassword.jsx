'use client';

import React from "react";
import { Input } from "@/components/ui/input";

const ForgetPassword = ({ setOpen }) => {
    const handleSubmit = (e) =>{
      e.preventDefault()
      if(e.target.checkValidity()){
        setOpen(4)
      }
    }
  return (
    <form onSubmit={handleSubmit}   className="w-1/2 flex flex-col gap-3">
    <div>
      <div className="">
        <h1 className="text-[#AE8E50] text-[35px] font-[600]">Enter email</h1>
        <p className="text-[15px] font-[400] text-[#000] mt-3">
        Enter your email to reset password
        </p>

        <h1 className="text-[#000] text-[30px] font-[500] mt-8">Password Reset</h1>
        <p className="text-[15px] font-[400] text-[#000]">
        Enter your email to recover your ID
        </p>
      </div>



      <div className="flex flex-col gap-2 mt-4">
        <label htmlFor="email">Email</label>
        <Input id="email" type="email" placeholder="Email" required />
      </div>
      <div className="mt-20 flex flex-col gap-2 relative ">
        <button
         type="submit"
          className="bg-[#AE8E50] rounded-md text-white font-medium py-3 px-4 w-full "
        >
          RECOVER
        </button>
      </div>
    </div>
    </form>
  );
};

export default ForgetPassword;
