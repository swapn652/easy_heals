import React from 'react'

export const SearchBarMobile = () => {
  return (
    <div style={{boxShadow: "0px 4px 40px 0px #39393933"}} className="flex flex-col h-56     sm:w-[80.62vw]
    xs:w-[87.6vw]
    2xs:w-[87vw]
    3xs:w-[86.5vw] bg-white  border-[0.1px] border-text-light  rounded-2xl font-[Raleway]">
        <div className="mt-6 ml-6 text-green2 text-[12px] font-bold">
            Location
        </div>
        <input placeholder="Search Location" className="bg-white ml-6 placeholder:text-black text-[12px] focus:outline-none py-2" />
        <div className="mt-4 ml-6 text-green2 text-[12px] font-bold">
            Treatment/Doctor/Hospital/Lab Tests
        </div>
        <div>
            
        </div>
        <input placeholder="Search by Symptoms, Diseases, Specialties, etc." className="bg-white ml-6 placeholder:text-black text-[12px] focus:outline-none py-2" />
        <button className="h-10 w-[87%] flex self-center justify-center bg-buttonColor text-white rounded-md mt-4 p-2">Search</button>
    </div>
  )
}
