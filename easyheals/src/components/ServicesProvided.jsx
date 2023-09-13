import React from 'react';
import { ServiceCard } from './ServiceCard';

export const ServicesProvided = () => {
  return (
    <div className="flex flex-row w-screen gap-x-10 overflow-x-auto">
      <div>
        <ServiceCard
          imageUrl="./doctor.png"
          heading="Top Rated Doctors"
          description="Find and book an appointment with the best medical professional in town"
        />
      </div>
      <div className="flex-shrink-0 md:flex-shrink w-[calc(50% - 20px)] md:w-auto">
        <ServiceCard
          imageUrl="./doctor.png"
          heading="Top Rated Doctors"
          description="Find and book an appointment with the best medical professional in town"
        />
      </div>
      <div className="flex-shrink-0 md:flex-shrink w-[calc(50% - 20px)] md:w-auto">
        <ServiceCard
          imageUrl="./doctor.png"
          heading="Top Rated Doctors"
          description="Find and book an appointment with the best medical professional in town"
        />
      </div>
      <div className="flex-shrink-0 md:flex-shrink w-[calc(50% - 20px)] md:w-auto">
        <ServiceCard
          imageUrl="./doctor.png"
          heading="Top Rated Doctors"
          description="Find and book an appointment with the best medical professional in town"
        />
      </div>
      {/* Repeat the above two ServiceCard components for a total of 4 cards */}
    </div>
  );
};
