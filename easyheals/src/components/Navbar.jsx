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
  let [open, setOpen] = useState(false);

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
        xl:px-[4.5em]
        lg:px-[3em]
        md:px-10
        sm:px-4
        shadow-md"
    >
      <img src="/easyHealsLogo.svg" className="sm:w-32 lg:w-36 3xs:w-[8em]" alt="Logo" />
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
          md:gap-x-6
          lg:gap-x-6
          xl:gap-x-10
          items-center 
          self-center
          xl:text-[14px]
          lg:text-[11px]
          md:text-[12px]
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
            open
              ? 'top-20 sm:flex sm:flex-col md:flex-row sm:justify-center'
              : 'top-[-490px] sm:flex sm:flex-col md:flex-row sm:justify-center'
          }`}
      >
        {navigationLinks.map((linkText, index) => (
          <li
            key={index}
            className={`${commonLinkClasses} mb-4 font-[Poppins] flex items-center`}
          >
            <div className="flex flex-col items-center">
              {linkText}
                <div className="w-screen md:hidden h-[1px] mt-4 bg-navbar"></div>
            </div>
          </li>
        ))}
        <button className="xl:w-28 lg:w-24 xl:h-8 lg:h-[2.5em] md:h-[3em] bg-buttonColor text-white xl:text-[14px] lg:text-[11px] md:text-[12px] rounded-md font-semibold px-2 md:-mt-4">
          Contact Us
        </button>
        <div className="w-screen md:hidden h-[1px] mt-4 bg-buttonColor"></div>
        <img
          src="./user.png"
          alt="user image"
          className="hidden md:block -mt-4 w-8 xl:-ml-4"
        />
      </ul>
    </nav>
  );
};
