import React, { useState } from 'react';

export const NavbarMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuStyle = {
    transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
    transition: 'transform 0.4s ease', // Adjust the duration (0.4s) as needed
  };

  return (
    <nav style={{boxShadow: "0px 2px 10px 0px rgba(96, 96, 96, 0.15)"}} className="relative flex flex-row items-center justify-between px-6 w-screen bg-white h-[4em]">
      <img src="./easyHealsLogo.svg" className="w-[8em]" alt="Logo" />
      <div className="text-4xl" onClick={toggleMenu}>
        <ion-icon name="menu-outline"></ion-icon>
      </div>

      {/* Mobile menu */}
      <div
        className="flex flex-col items-center z-20 h-screen absolute top-[4em] right-0 w-[74vw] bg-white"
        style={{
            boxShadow: "0px 2px 10px 0px rgba(96, 96, 96, 0.15)",
            ...menuStyle,
        }}  
       >
        <div className="flex flex-row justify-center items-center absolute top-[2.5em]"> {/* Use justify-center and items-center */}
          <img src="./user_mobile.svg" className="w-[4.2em]" />
          <div className="flex flex-col ml-[1em]">
            <div className="font-[Raleway] text-[15px]">New to Easyheals?</div>
            <button className="w-[9em] h-[3em] bg-buttonColor text-white text-[12px] rounded-lg font-[Poppins] mt-2">
              Login/Sign Up
            </button>
          </div>
        </div>

        <div className="h-[0.1px] w-[100%] bg-text-light absolute top-[9.5em]"></div>

        <ul className="flex flex-col items-center font-[Raleway] text-[16px] font-[600] gap-y-8 absolute top-[12em]">
            <li>Home</li>
            <li>Treatment</li>
            <li>Doctor</li>
            <li>Hospital</li>
            <li>Lab Test</li>
            <li>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
};
