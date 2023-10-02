import React from 'react'
import { FilterTreatment } from './FilterTreatment'
import PriceFilterSlider from './PriceFilterSlider'

export const TreatmentPage = () => {
  return (
    <div className="flex flex-row mt-[4em]">
    <div className="flex flex-col border-r-[0.5px] border-text-light h-screen w-[20vw] overflow-scroll">
      <FilterTreatment/>
    </div>
    <div className="flex flex-col h-screen w-[55vw] overflow-y-auto">
      <div className="mt-[2em]">
      </div>
    </div>
    <div className="flex flex-col border-l-[0.5px] border-text-light h-screen w-[25vw] gap-y-10">
      <img src="./treatment-banner-1.svg" />
      <img src="./treatment-banner-2.svg" />
      <img src="./treatment-banner-3.svg" />
    </div>
</div>
  )
}
