'use client';

import React from "react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

const ChangePassword = () => {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      router.push("/home");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-1/2 flex flex-col gap-3">
      <div>
        <h1 className="text-[#AE8E50] text-[35px] font-[600]">Change Password</h1>

         <div className="flex flex-col gap-4 mt-8">
         <div className="flex flex-col gap-2">
          <label htmlFor="new-password">New Password</label>
          <Input id="new-password" type="password" placeholder="Enter New Password" required />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="confirm-password">Re-type New Password</label>
          <Input id="confirm-password" type="password" placeholder="Re-type New Password" required />
        </div>
         </div>

        <div className="mt-20 flex flex-col gap-2 relative ">
          <button
            type="submit"
            className="bg-[#AE8E50] rounded-md text-white font-medium py-3 px-4 w-full"
          >
            Change Password
          </button>
        </div>
      </div>
    </form>
  );
};

export default ChangePassword;
