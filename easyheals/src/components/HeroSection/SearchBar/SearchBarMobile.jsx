import React from 'react'

export const SearchBarMobile = () => {
  return (
    <div className="flex flex-col h-56 w-80 bg-cyan rounded-2xl font-[Raleway]">
        <div className="mt-6 ml-6 text-green2 text-[12px] font-bold">
            Location
        </div>
        <input placeholder="Search Location" className="bg-cyan ml-6 placeholder:text-black text-[12px] focus:outline-none py-2" />
        <div className="mt-4 ml-6 text-green2 text-[12px] font-bold">
            Treatment/Doctor/Hospital/Lab Tests
        </div>
        <div>
            
        </div>
        <input placeholder="Search by Symptoms, Diseases, Specialties, etc." className="bg-cyan ml-6 placeholder:text-black text-[12px] focus:outline-none py-2" />
        <button className="h-10 w-72 flex self-center justify-center bg-buttonColor text-white rounded-md mt-4 p-2">Search</button>
    </div>
  )
}
