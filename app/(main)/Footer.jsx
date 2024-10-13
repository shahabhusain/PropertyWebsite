import Image from "next/image";
import React from "react";
import footerLogo from "@/public/assets/fLogo.svg";
import map from '@/public/assets/map.png'
import icon from '@/public/assets/icon.png'
import Link from "next/link";
import profile from '@/public/assets/profile.png'
const Footer = () => {
  return (
    <div className="bg-black text-white py-10 mt-20">
         <div className=" flex justify-between w-[90%] mx-auto" >
      {/*  */}
        <div>
        <Image src={footerLogo} alt='image' />

<div>
  <h1 className="text-lg font-semibold mt-20">Subscribe to our news</h1>
  <p className=" max-w-[355px] mt-4">
    Stay Informed and Never Miss a Beat: Subscribe to Our Exclusive News
    Updates!
  </p>
  <input className=" p-2 text-white bg-transparent border-b border-white mt-4 w-full" type="text" placeholder="Enter your email" />
  
</div>
<button className="bg-[#AE8E50] rounded-md  text-white font-medium py-2 px-4 mt-4">Subscribe</button>
        </div>
      {/*  */}

      {/*  */}
       <div className=" flex flex-col gap-6">
       <ul className=" flex flex-col gap-5">
        <li>Quick Navigation</li>
        <li>Home</li>
        <li>Buy</li>
        <li>Off Plane</li>
        <li>Property</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <a
        href="https://www.google.com/maps/place/Dubai+Marina,+Dubai,+United+Arab+Emirates/"
        target="_blank"
      >
        <Image src={map} alt='image' />
      </a>
      <p>123 Zayed Road, Dubai Marina, Dubai, United Arab Emirates</p>
       </div>
      {/*  */}

      {/*  */}
      <div>
      <div className="">
       <div className=" flex items-center gap-7">
       <Image src={profile} alt='image' />
        <div className="">
            <h1>Meet Founder</h1>
            <p className=" font-medium">Gurpreet Singh</p>
        </div>
       </div>

        <p className=" mt-3">We are here to change your future.</p>
        <button className="bg-[#AE8E50] rounded-md text-white font-medium py-2 px-4 mt-4">Contact</button>

        <div className=" flex items-center gap-3 mt-48">
            <Image src={icon} alt='image' />
            <Image src={icon} alt='image' />
            <Image src={icon} alt='image' />
            <Image src={icon} alt='image' />
            <Image src={icon} alt='image' />
        </div>

        <div className="mt-8 text-[#fff]">
            <p>© 2024 Sovereign International</p>
            <p className="mt-2">
              <Link href="#">Terms of Service</Link> |{" "}
              <Link href="#">Privacy Policy</Link>
            </p>
          </div>
       </div>
      </div>
      {/*  */}
    </div>
    </div>
  );
};

export default Footer;
