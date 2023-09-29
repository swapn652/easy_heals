import React from 'react'
import Slider from 'react-slick'
import { FeaturedServicesCard } from './FeaturedServicesCard'

export const FeaturedServicesMobile = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        prevArrow: null,
        nextArrow: null
    }
  return (
    <div className="flex flex-col mt-10 relative">
        <div className="flex flex-row items-center justify-center">
            <div className="h-[1px] w-[19vw] bg-text-light"></div>
            <img src="./plus_icon.svg" />
            <div className="mx-4 font-[700] text-[16px]">Featured Services</div>
            <img src="./plus_icon.svg" />
            <div className="h-[1px] w-[19vw] bg-text-light"></div>
        </div>

        <div className="mt-6">
            <Slider {...settings} className="mx-6">
                <div className=""> {/* Add a gap between cards */}
                <img src="./featured_services/chemotherapy.svg" className="sm:w-[16em] xs:w-[15em] 2xs:w-[14em] 3xs:w-[13em]"/>
                </div>
                <div className=""> {/* Add a gap between cards */}
                <img src="./featured_services/knee_replacement.svg" className="sm:w-[16em] xs:w-[15em] 2xs:w-[14em] 3xs:w-[13em]"/>
                </div>
                <div className=""> {/* Add a gap between cards */}
                <img src="./featured_services/hair_transplant.svg" className="sm:w-[16em] xs:w-[15em] 2xs:w-[14em] 3xs:w-[13em]"/>
                </div>
                <div className=""> {/* Add a gap between cards */}
                <img src="./featured_services/bone_marrow_transplant.svg" className="sm:w-[16em] xs:w-[15em] 2xs:w-[14em] 3xs:w-[13em]"/>
                </div>
                <div className=""> {/* Add a gap between cards */}
                <img src="./featured_services/bone_marrow_transplant.svg" className="sm:w-[16em] xs:w-[15em] 2xs:w-[14em] 3xs:w-[13em]"/>
                </div>
                <div className=""> {/* Add a gap between cards */}
                <img src="./featured_services/bone_marrow_transplant.svg" className="sm:w-[16em] xs:w-[15em] 2xs:w-[14em] 3xs:w-[13em]"/>
                </div>
            </Slider>
        </div>

         {/* Button */}
         <button className="
            w-[15em] 
            h-[2.7em] 
            border-2 
            border-buttonColor 
            font-[Poppins] 
            font-[700] 
            text-[14px]
            text-buttonColor 
            rounded-lg 
            absolute 
            top-[25em]
            flex 
            self-center 
            justify-center 
            items-center"
        >
            Browse All Services
        </button>
    </div>
  )
}
