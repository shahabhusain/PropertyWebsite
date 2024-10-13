import React from 'react'

const InputFiels = () => {
  return (
    <div>
       <div className=" flex flex-col gap-4 items-center bg-[#AE8E50] py-12 px-5 rounded-md mt-6 ">
              <div className=" flex items-center gap-4 w-full">
              <input className=" py-1.5 px-3 w-full rounded-full" id="name" type="text" placeholder=" Enter Keyword" />
              {/*  */}
               <select className=" py-2 pl-3 pr-5 rounded-full w-[50%]">
                 <option value="Name">Status</option>
                <option value="Name">option1</option>
                <option value="Name">option2</option>
               </select>
              {/*  */}

                 {/*  */}
                 <select className=" py-2 pl-3 pr-5 rounded-full w-[50%]">
                 <option value="Name">Type</option>
                 <option value="Name">option1</option>
                 <option value="Name">option2</option>
               </select>

               <select className=" py-2 pl-3 pr-5 rounded-full w-[50%]">
                 <option value="Name">City</option>
                 <option value="Name">option1</option>
                 <option value="Name">option2</option>
               </select>

               <select className=" py-2 pl-3 pr-5 rounded-full w-[50%]">
                 <option value="Name">Bedrooms</option>
                 <option value="Name">option1</option>
                 <option value="Name">option2</option>
               </select>

               
               <button className=" py-2 px-12 text-white rounded-full border-white border-[1px] ">Advance</button>
               <button className=" py-2.5 px-12 text-white rounded-full bg-black">Search</button>
              {/*  */}
              </div>

              <div className=" w-full flex gap-4 items-center justify-between">
                   {/*  */}
                   <select className=" py-2 pl-3 pr-5 rounded-full w-full">
                 <option value="Name">Bathrooms</option>
                 <option value="Name">option1</option>
                 <option value="Name">option2</option>
               </select>
              {/*  */}
                {/*  */}
                <select className=" py-2 pl-3 pr-5 rounded-full w-full">
                 <option value="Name">Garage</option>
                 <option value="Name">option1</option>
                 <option value="Name">option2</option>
               </select>
              {/*  */}

                 {/*  */}
                 <select className=" py-2 pl-3 pr-5 rounded-full w-full">
                 <option value="Name">Property ID</option>
                 <option value="Name">option1</option>
                 <option value="Name">option2</option>

               </select>
              {/*  */}

               {/*  */}
               <select className=" py-2 pl-3 pr-5 rounded-full w-full">
                 <option value="Name">Min. Area</option>
                 <option value="Name">option1</option>
                 <option value="Name">option2</option>

               </select>
              {/*  */}

               {/*  */}
               <select className=" py-2 pl-3 pr-5 rounded-full w-full">
                 <option value="Name">Max. Area</option>
                 <option value="Name">option1</option>
                 <option value="Name">option2</option>

               </select>
              {/*  */}

               {/*  */}
               <select className=" py-2 pl-3 pr-5 rounded-full w-full">
                 <option value="Name">Min. Budget</option>
                 <option value="Name">option1</option>
                 <option value="Name">option2</option>

               </select>
              {/*  */}

               {/*  */}
               <select className=" py-2 pl-3 pr-5 rounded-full w-full">
                 <option value="Name">Max. Budget</option>
                 <option value="Name">option1</option>
                 <option value="Name">option2</option>

               </select>
              {/*  */}
              </div>
          </div>
    </div>
  )
}

export default InputFiels