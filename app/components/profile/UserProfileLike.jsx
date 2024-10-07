"use client";

import React, { useState } from 'react';
import icon1 from "../../../public/assets/icon1.png";
import icon2 from "../../../public/assets/icon2.png";
import icon3 from "../../../public/assets/icon3.png";
import like from "../../../public/assets/like.png";
import dislike from "../../../public/assets/likes.png";
import pro1 from '@/public/assets/pro1.png';
import pro2 from '@/public/assets/pro3.png';
import Image from 'next/image';

const UserProfileLike = () => {
  const [likes, setLikes] = useState(false);
  const [open, setOpen] = useState(1);

  return (
    <div>
      <h1 className='text-[35px] text-black font-[500]'>Properties you liked (5)</h1>
      <div className='flex items-center gap-6 my-7'>
        <button onClick={() => setOpen(1)} className={`${open === 0 ? "border-[#AE8E50] border-[1px] py-2 px-5 rounded-full text-black" : "bg-[#AE8E50] py-2 px-5 rounded-full text-white"}`}>
          Want to Buy
        </button>
        <button onClick={() => setOpen(0)} className={`${open === 1 ? "border-[#AE8E50] border-[1px] py-2 px-5 rounded-full text-black" : "bg-[#AE8E50] py-2 px-5 rounded-full text-white"}`}>
          Off Plane
        </button>
      </div>

      {open === 1 ? (
        <>
          <div className="relative w-[445px] group">
            <Image src={pro1} alt="property image"  />
            <div className="absolute top-[24rem] left-5 bg-[#5f5b5b98] py-6 px-5 rounded-md transition-colors duration-300 group-hover:bg-black">
              <h1 className="text-[18px] font-[600] text-white max-w-[355px]">
                Comfortable 3 Bedroom | Bluewater Island | Ample Balcony
              </h1>
              <p className="text-[13px] font-[300] text-white">Vida Residences Dubai Marina, Dubai Marina.</p>
              <div className="flex items-center justify-between gap-4 mt-4">
                <span className="flex items-center gap-2 text-white text-[12px] font-[300]">
                  <Image className="w-[20px]" src={icon3} alt="bedrooms" /> 3
                </span>
                <span className="flex items-center gap-2 text-white text-[12px] font-[300]">
                  <Image className="w-[20px]" src={icon2} alt="bathrooms" /> 3
                </span>
                <span className="flex items-center gap-2 text-white text-[12px] font-[300]">
                  <Image className="w-[20px]" src={icon1} alt="sq.ft" /> 1,655 sq.ft
                </span>
                <button className="py-2 px-2 rounded-md bg-[#AE8E50] text-white">
                  AED 6,000,000
                </button>
              </div>
            </div>
            <button onClick={() => setLikes(!likes)}>
              {likes ? (
                <Image className="absolute top-6 right-6 w-[40px]" src={like} alt="liked" />
              ) : (
                <Image className="absolute top-6 right-6 w-[40px]" src={dislike} alt="not liked" />
              )}
            </button>
          </div>
        </>
      ) : open === 0 ? (
        <>
          <div className="relative w-[445px] group">
            <Image src={pro2} alt="property image" />
            <div className="absolute top-[24rem] left-5 bg-[#5f5b5b98] py-6 px-5 rounded-md transition-colors duration-300 group-hover:bg-black">
              <h1 className="text-[18px] font-[600] text-white max-w-[355px]">
                Comfortable 3 Bedroom | Bluewater Island | Ample Balcony
              </h1>
              <p className="text-[13px] font-[300] text-white">Vida Residences Dubai Marina, Dubai Marina.</p>
              <div className="flex items-center justify-between gap-4 mt-4">
                <span className="flex items-center gap-2 text-white text-[12px] font-[300]">
                  <Image className="w-[20px]" src={icon3} alt="bedrooms" /> 3
                </span>
                <span className="flex items-center gap-2 text-white text-[12px] font-[300]">
                  <Image className="w-[20px]" src={icon2} alt="bathrooms" /> 3
                </span>
                <span className="flex items-center gap-2 text-white text-[12px] font-[300]">
                  <Image className="w-[20px]" src={icon1} alt="sq.ft" /> 1,655 sq.ft
                </span>
                <button className="py-2 px-2 rounded-md bg-[#AE8E50] text-white">
                  AED 6,000,000
                </button>
              </div>
            </div>
            <button onClick={() => setLikes(!likes)}>
              {likes ? (
                <Image className="absolute top-6 right-6 w-[40px]" src={like} alt="liked" />
              ) : (
                <Image className="absolute top-6 right-6 w-[40px]" src={dislike} alt="not liked" />
              )}
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default UserProfileLike;
