import React from 'react'
import { MostSearchedDiseasesButton } from './MostSearchedDiseasesButton'

export const FilterTreatment = () => {
  return (
    <div className="flex flex-col w-[20vw] font-[Raleway] relative">
        {/* First section */}
        <div className="flex flex-col absolute left-[1em] top-[1em]">
            {/* Heading */}
            <div className="font-[700] text-[18px]">
                See Results by
            </div>
            <div className="text-[18px]">
                most searched diseases
            </div>
            
            {/* The buttons that will be used to filter */}
            <div className="flex flex-row flex-wrap gap-2 mt-4">
                <MostSearchedDiseasesButton disease="Headaches"/>
                <MostSearchedDiseasesButton disease="PCOD"/>
                <MostSearchedDiseasesButton disease="Asthama"/>
                <MostSearchedDiseasesButton disease="Bladder Cancer"/>
            </div>
        </div>

        {/* Divider - 1 */}
        <div className="h-[1px] w-[100%] bg-text-light absolute top-[12em]"></div>

        <div className="flex flex-col absolute top-[13em] left-[1em]">
            <div className="text-buttonColor text-[18px] font-[700]">Sort by</div>

            <div className="flex flex-col text-[16px] gap-y-2 mt-[0.8em]">
                <label className="inline-flex items-center">
                    <input
                    type="radio"
                    name="sorting"
                    className="h-[1.2em] w-[1.2em] accent-buttonColor"
                    />
                    <span className="ml-2">Alphabetically</span>
                </label>

                <label className="inline-flex items-center">
                    <input
                    type="radio"
                    name="sorting"
                    className="h-[1.2em] w-[1.2em] accent-buttonColor"
                    />
                    <span className="ml-2">Price: Low to High</span>
                </label>

                <label className="inline-flex items-center">
                    <input
                    type="radio"
                    name="sorting"
                    className="h-[1.2em] w-[1.2em] accent-buttonColor"
                    />
                    <span className="ml-2">Price: High to Low</span>
                </label>

                <label className="inline-flex items-center">
                    <input
                    type="radio"
                    name="sorting"
                    className="h-[1.2em] w-[1.2em] accent-buttonColor"
                    />
                    <span className="ml-2">Customer Rating</span>
                </label>

                <label className="inline-flex items-center">
                    <input
                    type="radio"
                    name="sorting"
                    className="h-[1.2em] w-[1.2em] accent-buttonColor"
                    />
                    <span className="ml-2">Distance: Nearest to Farthest</span>
                </label>
            </div>
        </div>

        {/* Divider 2 */}
        <div className="h-[1px] w-[100%] bg-text-light absolute top-[26em]"></div>

        <div className="flex flex-col absolute top-[27em] left-[1em]">
            <div className="text-buttonColor text-[18px] font-[700]">Filter</div>

            
        </div>
    </div>
  )
}
