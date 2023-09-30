import React from 'react'

export const FooterMobile = () => {
  return (
    <div className="flex flex-col relative w-screen sm:h-[33em] 3xs:h-[30em] bg-footer-color font-[Raleway]">

        {/* Logo and social media links */}
        <div className="flex flex-row">
            <div className="flex flex-col">
                <img src="./easyHealsLogo.svg" className="3xs:w-[8em] 2xs:w-[8.5em] xs:w-[9em] sm:w-[10em] absolute top-[1.5em] left-[1.5em]"/>
                <div className="italic 3xs:text-[10px] 2xs:text-[10.5px] xs:text-[11px] sm:text-[12.5px] absolute 3xs:top-[6em] xs:top-[5.8em] 3xs:left-[2.5em] sm:left-[2.2em]">Easy access to Healthcare</div>
            </div>

            <div className="flex flex-row gap-x-2 absolute 3xs:top-[3.3em] sm:top-[3.8em] right-6">
                <img src="./social_media/facebook.svg" className="3xs:w-[1.5em] 2xs:w-[1.6em] xs:w-[1.7em] sm:w-[1.8em]"/>
                <img src="./social_media/instagram.svg" className="3xs:w-[1.5em] 2xs:w-[1.6em] xs:w-[1.7em] sm:w-[1.8em]"/>
                <img src="./social_media/linkedin.svg" className="3xs:w-[1.5em] 2xs:w-[1.6em] xs:w-[1.7em] sm:w-[1.8em]"/>
                <img src="./social_media/youtube.svg" className="3xs:w-[1.5em] 2xs:w-[1.6em] xs:w-[1.7em] sm:w-[1.8em]"/>
                <img src="./social_media/twitter.svg" className="3xs:w-[1.5em] 2xs:w-[1.6em] xs:w-[1.7em] sm:w-[1.8em]"/>
            </div>
        </div>

        {/* Main content */}
        <div className="flex flex-row relative justify-center 3xs:top-[7em] sm:top-[7.7em] 3xs:gap-x-12 xs:gap-x-16 sm:gap-x-[3.4em]">
            <div className="flex flex-col gap-y-2 3xs:text-[14px] sm:text-[16px]">
                <div className="font-[600]">Company</div>
                <div>About Us</div>
                <div>Terms & Conditions</div>
                <div>Privacy Policy</div>
                <div>FAQ</div>
            </div>

            <div className="flex flex-col gap-y-2 3xs:text-[14px] sm:text-[16px]">
                <div className="font-[600]">Services</div>
                <div>Treatment</div>
                <div>Doctor Appointment</div>
                <div>Hospital Appointment</div>
                <div>Lab Test</div>
            </div>
        </div>

        {/* Contact info */}
        <div className="flex flex-col absolute sm:top-[19.5em] xs:top-[18em] 3xs:top-[17.5em] xs:left-[1.5em] 2xs:left-[1.8em] 3xs:left-[1.4em] font-[600]">
            <div className="flex flex-row">
                <div className="flex flex-row"> 
                    <img src="./contact_info/phone.svg" className="sm:w-[1.5em] xs:w-[1.4em] 2xs:w-[1.3em] 3xs:w-[1.2em]"/>
                    <div className="ml-[0.4em] sm:text-[15px] xs:text-[14px] 2xs:text-[13px] 3xs:text-[12px]">+91-7510818108</div>
                </div>

                <div className="flex flex-row">
                    <img src="./contact_info/mail.svg" className="sm:w-[1.5em] xs:w-[1.4em] 2xs:w-[1.3em] 3xs:w-[1.2em] 2xs:ml-8 3xs:ml-12"/>
                    <div className="ml-[0.4em] sm:text-[15px] xs:text-[14px] 2xs:text-[13px] 3xs:text-[12px]">sales@easyheals.com</div>
                </div>
            </div>
            <div className="flex flex-row mt-4">
                <img src="./contact_info/address.svg" className="sm:w-[1.5em] xs:w-[1.4em] 2xs:w-[1.3em] 3xs:w-[1.2em]" />
                <div className="ml-[0.4em] sm:text-[15px] xs:text-[14px] 2xs:text-[13px] 3xs:text-[12px]">Pimple Saudagar, Pune 411027</div>
            </div>
        </div>


        {/* Download links */}
        <div className="flex flex-col items-center justify-center absolute sm:top-[25em] xs:top-[23.5em] 2xs:top-[23em] 3xs:top-[23em] inset-x-0">
            <div className="sm:text-[15px] xs:text-[14px] 2xs:text-[13px] 3xs:text-[13px] text-[#678765] font-[700]">
                Download Mobile Application
            </div>
            
            <div className="flex flex-row gap-x-4 justify-center 2xs:mt-4 mt-2">
                <img src="./downloads/google_play_store.svg" className="sm:w-[9em] xs:w-[8em] 2xs:w-[7em] 3xs:w-[7em]" alt="Google Play Store" />
                <img src="./downloads/app_store.svg" className="sm:w-[8.2em] xs:w-[7.2em] 2xs:w-[6.5em] 3xs:w-[6.2em]" alt="App Store" />
            </div>
        </div>

    </div>
  )
}
