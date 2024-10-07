"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "@/public/assets/logo.svg";
import Link from "next/link";
import profile from "@/public/assets/prof1.png";
import whiteprofile from "@/public/assets/whiteProf1.png";
import { Button } from "@/components/ui/button";
import profilee from "@/public/assets/profilee.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    };
    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <div
      className={`fixed top-0 w-[100%] bg-[transparent] z-[10] flex items-center justify-between ${
        isActive
          ? "bg-[#000000] text-white shadow-md transition-all fixed w-full duration-300 ease-in-out pb-4"
          : ""
      }`}
    >
      <div className="flex items-center w-[90%] pt-4 mx-auto justify-between">
        <Link href="/home">
          <Image className=" w-[70px]" src={logo} alt="Logo" width={150} height={50} />
        </Link>
        <div className="list-none flex items-center gap-12">
          <Link href="/buy" className="cursor-pointer text-[20px] font-[500]">
            Buy
          </Link>
          <Link href="/offline" className="cursor-pointer text-[20px] font-[500]">
            Off Plan
          </Link>
          <Link href="/properties" className="cursor-pointer text-[20px] font-[500]">
            Properties
          </Link>
          <Link href="/about" className="cursor-pointer text-[20px] font-[500]">
            About
          </Link>
          <Link href="/contact" className="cursor-pointer text-[20px] font-[500]">
            Contact
          </Link>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="focus:border-none">
                  {isActive ? (
                    <Image src={whiteprofile} alt="Profile" width={40} height={40}  />
                  ) : (
                    <Image src={profile} alt="Profile" width={40} height={40} />
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 p-4 bg-black text-white">
                <div className="flex items-center justify-between">
                  <Image src={profilee} alt="User profile" width={40} height={40} />
                  <div>
                    <h1 className="text-[16px] font-[600] text-white">John Doe</h1>
                    <p className="text-[14px] text-[#E7E7E7] font-[600]">
                      johndoe@gmail.com
                    </p>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Menu</DropdownMenuLabel>
                <DropdownMenuRadioGroup >
                  <DropdownMenuRadioItem value="Profile"><Link href='/profile'>Profile</Link></DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="Profile Likes">
                  <Link href='/profilelike'>Profile Like</Link>
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="Log Out">Log Out</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Link
            href="/signup"
            className="cursor-pointer text-[20px] font-[500] py-2 px-5 text-white bg-[#AE8E50]"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
