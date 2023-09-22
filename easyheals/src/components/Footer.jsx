import React from 'react'

export const Footer = () => {
  return (
    <div className="2xl:h-[32em] xl:h-[28em] w-screen relative">
        <div className='absolute 2xl:h-[22em] xl:h-[21em] lg:h-[20em] w-screen bg-footer-color top-[8em] flex flex-row'>
            {/* Logo and social media links */}
            <div className="flex flex-col">
                <img src="./easyHealsLogo.svg" alt="Easy heals logo" className="absolute top-[4em] left-[5em] 2xl:w-[16em] xl:w-[13em] lg:w-[10em]"/>
                <div className="font-[Raleway] 2xl:text-[18px] xl:text-[15px] lg:text-[12px] italic absolute 2xl:left-[8.5em] xl:left-[9em] lg:left-[10em] 2xl:top-[6.8em] xl:top-[7em] lg:top-[8em]">Easy access to Healthcare</div>
                <div className="flex flex-row xl:gap-x-4 lg:gap-x-2 absolute 2xl:top-[11.5em] xl:top-[10em] lg:top-[9em] left-[5em]">
                    <img src="./social_media/facebook.svg" alt="facebook" className="2xl:w-[2.4em] xl:w-[2em] lg:w-[1.8em] cursor-pointer"/>
                    <img src="./social_media/instagram.svg" alt="facebook" className="2xl:w-[2.4em] xl:w-[2em] lg:w-[1.8em] cursor-pointer"/>
                    <img src="./social_media/linkedin.svg" alt="facebook" className="2xl:w-[2.4em] xl:w-[2em] lg:w-[1.8em] cursor-pointer"/>
                    <img src="./social_media/youtube.svg" alt="facebook" className="2xl:w-[2.4em] xl:w-[2em] lg:w-[1.8em] cursor-pointer"/>
                    <img src="./social_media/twitter.svg" alt="facebook" className="2xl:w-[2.4em] xl:w-[2em] lg:w-[1.8em] cursor-pointer"/>
                </div>
            </div>

            {/* Company */}
            <div className="flex flex-col font-[Raleway] 2xl:text-[16px] xl:text-[15px] lg:text-[13px] gap-y-4 absolute xl:top-[5em] lg:top-[5.5em] 2xl:left-[32em] xl:left-[30em] lg:left-[28em]">
                <div className="font-[600]">Company</div>
                <div>About Us</div>
                <div>Terms & Conditions</div>
                <div>Privacy Policy</div>
                <div>FAQ</div>
            </div>
            
            {/* Services */}
            <div className="flex flex-col font-[Raleway] 2xl:text-[16px] xl:text-[15px] lg:text-[13px] gap-y-4 absolute xl:top-[5em] lg:top-[5.5em] 2xl:left-[50em] xl:left-[47em] lg:left-[44em]">
                <div className="font-[600]">Services</div>
                <div>Treatment</div>
                <div>Doctor Appointment</div>
                <div>Hospital Appointment</div>
                <div>Lab Test</div>
            </div>

            {/* Contact info */}
            <div className="flex flex-col font-[Raleway] 2xl:text-[16px] xl:text-[15px] lg:text-[13px] gap-y-6 absolute xl:top-[5em] lg:top-[5.5em] 2xl:left-[67em] xl:left-[64em] lg:left-[60em]">
                <div className="flex flex-row">
                    <img src="./contact_info/phone.svg" className="w-[1.5em]"/>
                    <span className="ml-2 font-[600]">+91-7510818108</span>
                </div>
                <div className="flex flex-row">
                    <img src="./contact_info/mail.svg" className="w-[1.5em]"/>
                    <span className="ml-2 font-[600]">sales@easyheals.com</span>
                </div>
                <div className="flex flex-row">
                    <img src="./contact_info/address.svg" className="w-[1.5em]"/>
                    <span className="ml-2 font-[600]">Pimple Saudagar, Pune 411027</span>
                </div>
                <div className="font-[600] text-[#678765]">
                    Download Mobile Application
                </div>
                <div className="flex flex-row gap-x-4 absolute lg:top-[13em] xl:top-[12em]">
                    <img src="./downloads/google_play_store.svg" className="cursor-pointer xl:w-[9em] lg:w-[8em]"/>
                    <img src="./downloads/app_store.svg" className="cursor-pointer xl:w-[8em] lg:w-[7em]"/>
                </div>
            </div>
        </div>

        <div className="bg-green2 h-[4em] w-screen absolute 2xl:top-[30em] xl:top-[29em] lg:top-[35em] flex items-center justify-center text-white xl:text-base lg:text-[12px] font-[Raleway] font-[600]">
            Copyright © 2023 by EasyHeals Technologies Private Limited. All Rights Reserved.
        </div>
    </div>
  )
}
