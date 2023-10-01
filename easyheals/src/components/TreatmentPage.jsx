import React from 'react'
import { FilterTreatment } from './FilterTreatment'
import PriceFilterSlider from './PriceFilterSlider'

export const TreatmentPage = () => {
  return (
    <div className="flex flex-row mt-[4em]">
    <div className="flex flex-col border-2 border-black h-screen w-[20vw]">
      <FilterTreatment/>
    </div>
    <div className="flex flex-col border-2 border-black h-screen w-[55vw] overflow-y-auto">
      <div className="mt-[2em]">
        <PriceFilterSlider/>
      </div>
    </div>
    <div className="flex flex-col border-2 border-black h-screen w-[25vw]">

    </div>
</div>
  )
}
