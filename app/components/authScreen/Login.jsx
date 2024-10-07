"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const Login = ({ setOpen }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      // Perform login actions here
      console.log("Form is valid!");
    } else {
      console.log("Form is not valid!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-1/2 flex flex-col gap-3">
      <div className="">
        <h1 className="text-[#AE8E50] text-[35px] font-[600]">Sign In</h1>
        <p className="text-[15px] font-[400] text-[#000] mt-3">
          Enter your email and password to login
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <Input id="email" type="email" placeholder="Email" required />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password">Password</label>
        <Input id="password" type="password" placeholder="Password" required />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="terms" required />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Subscribe to weekly newsletter
        </label>
      </div>

      <div className="mt-20 flex flex-col gap-2 relative">
        <button
          type="submit"
          className="bg-[#AE8E50] rounded-md text-white font-medium py-3 px-4 w-full"
        >
          Sign In
        </button>
        <p onClick={() => setOpen(3)} className="absolute right-0 bottom-0 cursor-pointer">
          Forget Password
        </p>
        <h1 className="text-[14px] font-[400] mt-3">
          Don not have an account?{" "}
          <button onClick={() => setOpen(0)} className="underline text-[#AE8E50]">
            SIGN UP
          </button>
        </h1>
      </div>
    </form>
  );
};

export default Login;
