import React from "react";
import Properties from "../../components/homeSreen/Properties";
const InputField = () => {
  return (
    <div className=" relative ">
      <div className="absolute top-[-8rem] left-[24rem] ">
        <div className="flex items-center gap-4 justify-center ">
          <button className=" py-3 px-5 bg-[#fff] rounded-full text-black">
            Dubai Property
          </button>
          <button className=" py-3 px-5 bg-[#AE8E50] rounded-full text-white">
            Uk Property
          </button>
          <button className=" py-3 px-5 bg-[#000] rounded-full text-white">
            Secret Property
          </button>
        </div>
        <div>
          <div className=" flex flex-col gap-4 items-center bg-[#AE8E50] w-[777px] py-12 px-5 rounded-md mt-6 ">
              <div className=" flex items-center gap-4 w-full">
              <input className=" py-1.5 px-3 w-full rounded-full" id="name" type="text" placeholder=" Enter Keyword" />
              {/*  */}
               <select className=" py-2 pl-3 pr-5 rounded-full w-[50%]">
                 <option value="Name">Type</option>
                <option value="Name">Email</option>
                <option value="Name">Password</option>
               </select>
              {/*  */}

                 {/*  */}
                 <select className=" py-2 pl-3 pr-5 rounded-full w-[50%]">
                 <option value="Name">Where</option>
                <option value="Name">Email</option>
                <option value="Name">Password</option>
               </select>
              {/*  */}
              </div>

              <div className=" w-full flex gap-4 items-center justify-between">
                   {/*  */}
                   <select className=" py-2 pl-3 pr-5 rounded-full w-full">
                 <option value="Name">Bed</option>
                <option value="Name">Email</option>
                <option value="Name">Password</option>
               </select>
              {/*  */}
                {/*  */}
                <select className=" py-2 pl-3 pr-5 rounded-full w-full">
                 <option value="Name">Bath</option>
                <option value="Name">Email</option>
                <option value="Name">Password</option>
               </select>
              {/*  */}

                 {/*  */}
                 <select className=" py-2 pl-3 pr-5 rounded-full w-full">
                 <option value="Name">Max Price</option>
                <option value="Name">Email</option>
                <option value="Name">Password</option>

               </select>
              {/*  */}
              <button className=" py-2 px-5 text-white rounded-full bg-black w-full">Search</button>
              </div>
          </div>
        </div>
      </div>
      <Properties />
    </div>
  );
};

export default InputField;
