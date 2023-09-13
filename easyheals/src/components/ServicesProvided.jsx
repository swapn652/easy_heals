import React from 'react'
import { ServiceCard } from './ServiceCard'

export const ServicesProvided = () => {
  return (
    <div className="flex flex-row gap-x-6">
      <ServiceCard
        imageUrl="./doctor.png"
        heading="Top Rated Doctors"
        description="Find and book appointment with best medical professional in town"
      />
        <ServiceCard
        imageUrl="./doctor.png"
        heading="Top Rated Doctors"
        description="Find and book appointment with best medical professional in town"
      />
      <ServiceCard
        imageUrl="./doctor.png"
        heading="Top Rated Doctors"
        description="Find and book appointment with best medical professional in town"
      />
      <ServiceCard
        imageUrl="./doctor.png"
        heading="Top Rated Doctors"
        description="Find and book appointment with best medical professional in town"
      />

    </div>
  )
}
