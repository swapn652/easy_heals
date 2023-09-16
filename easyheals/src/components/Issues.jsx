import React from 'react'

export const Issues = () => {
  return (
    <div className="flex flex-row justify-between mx-6">
        <img src="./navigation_left.svg" className="xl:w-8 lg:w-6 cursor-pointer"/>
        <div className="flex flex-row justify-between gap-x-6">
            <img src="./issues/acne.svg" className="2xl:w-[25em] xl:w-[22em] lg:w-[17em] cursor-pointer"/>
            <img src="./issues/men_health.svg" className="2xl:w-[25em] xl:w-[22em] lg:w-[17em] cursor-pointer"/>
            <img src="./issues/acne.svg" className="2xl:w-[25em] xl:w-[22em] lg:w-[17em] cursor-pointer"/>
        </div>
        <img src="./navigation_right.svg" className="xl:w-8 lg:w-6  cursor-pointer"/>
    </div>
  )
}
