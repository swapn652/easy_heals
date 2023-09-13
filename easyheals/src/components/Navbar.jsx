import React, { useState } from 'react';

const commonLinkClasses = `
   cursor-pointer 
   hover:underline 
   hover:decoration-underlineColor
   hover:decoration-2 
   hover:underline-offset-8
`;

const navigationLinks = ["Home", "Treatment", "Doctor", "Hospital", "Lab Test"];

export const Navbar = () => {
  let [open, setOpen] = useState(false); //to keep track of the menu on small screen devices, if it's open or not 

  return (
      <nav className="
        w-screen
        absolute 
        top-0 
        left-0 
        h-16 
        flex 
        flex-row 
        justify-between 
        items-center 
        lg:px-20
        sm:px-10
        shadow-md"
      >
        <img src="/easyHealsLogo.png" className="sm:w-32 lg:w-36" alt="Logo" />
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-2 top-[16px] cursor-pointer md:hidden"
        >
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>
        <ul
          className={`
              mt-4 
              md:flex 
              md:items-center 
              md:gap-x-4 
              lg:gap-x-6
              xl:gap-x-10
              items-center 
              self-center
              md:text-[14px]
              absolute 
              md:static 
              bg-white 
              left-0 
              w-full 
              z-10
              md:w-auto 
              transition-all 
              duration-500 
              ease-in ${
              open ? 'top-20 sm:flex sm:flex-col md:flex-row sm:justify-center' : 'top-[-490px] sm:flex sm:flex-col md:flex-row  sm:justify-center'
          }`}
        >
          {navigationLinks.map((linkText, index) => (
            <li
              key={index}
              className={`${commonLinkClasses} mb-4 font-[Poppins]`}
            >
              {linkText}
            </li>
          ))}
          <button className="w-28 h-8 bg-buttonColor text-white text-[14px] rounded-md font-semibold px-2 md:-mt-4">
            Contact Us
          </button>
          <img src="./user.png" alt="user image" className="hidden md:block -mt-4 w-8 xl:-ml-4"/>
        </ul>
      </nav>
  );
};
