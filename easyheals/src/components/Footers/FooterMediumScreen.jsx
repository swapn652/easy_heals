import React from 'react'

export const FooterMediumScreen = () => {
  return (
    <div className="w-screen h-[33em] bg-footer-color mt-[7em] relative font-[Raleway]">
        <div className="flex flex-col">
            <div className="flex flex-row">
                <div className="flex flex-col">
                    <img src="./easyHealsLogo.svg" className="w-[17em] absolute top-[3em] left-[3em]"/>
                    <div className="italic absolute top-[5.4em] left-[6em] text-[20px]">Easy access to Healthcare</div>
                </div>
                <div className="flex flex-row gap-x-4 absolute right-4 top-[3em]">
                    <img src="./social_media/facebook.svg" />
                    <img src="./social_media/instagram.svg" />
                    <img src="./social_media/linkedin.svg" />
                    <img src="./social_media/youtube.svg" />
                    <img src="./social_media/twitter.svg" />
                </div>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-col text-[20px] gap-y-4 absolute top-[9em] left-[2em]">
                    <div className="font-[600]">Company</div>
                    <div>About Us</div>
                    <div>Terms & Conditions</div>
                    <div>Privacy Policy</div>
                    <div>FAQ</div>
                </div>
                <div className="flex flex-col text-[20px] gap-y-4 absolute top-[9em] left-[14em]">
                    <div className="font-[600]">Services</div>
                    <div>Treatment</div>
                    <div>Doctor Appointment</div>
                    <div>Hospital Appointment</div>
                    <div>Lab Test</div>
                </div>
                <div className="flex flex-col text-[20px] gap-y-4 absolute top-[9em] left-[26em]">
                   <div className="flex flex-row">
                        <img src="./contact_info/phone.svg" />
                        <div className="text-[18px] ml-2 font-[600]">+91-7510818108</div>
                   </div>
                   <div className="flex flex-row">
                        <img src="./contact_info/mail.svg" />
                        <div className="text-[18px] ml-2 font-[600]">sales@easyheals.com</div>
                   </div>
                   <div className="flex flex-row">
                        <img src="./contact_info/address.svg" />
                        <div className="text-[18px] ml-2 font-[600] w-[10em]">Pimple Saudagar, Pune 411027</div>
                   </div>
                </div>
            </div>

            <div className="flex flex-row">
                <div className="text-[#678765] text-[20px] font-[700] absolute top-[21.5em] left-10">
                    Download Mobile Application
                </div>
                <div className="flex flex-row gap-x-4 absolute right-6 top-[26.4em]">
                    <img src="./downloads/google_play_store.svg" className="w-[11em]"/>
                    <img src="./downloads/app_store.svg" className="w-[10em]"/>
                </div>
            </div>
        </div>
    </div>
  )
}
