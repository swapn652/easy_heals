import React from 'react';
import { ServiceCard } from './ServiceCard';

export const ServicesProvided = () => {
  return (
    <div className="flex flex-row relative xl:left-16 lg:left-12 gap-x-6 md:flex-wrap lg:flex-nowrap md:justify-center lg:justify-start gap-y-6">
      <div>
        <ServiceCard
          imageUrl="./doctor.png"
          heading="Top Rated Doctors"
          description="Find and book an appointment with best medical professional in town"
        />
      </div>
      <div>
        <ServiceCard
          imageUrl="./hospital.png"
          heading="Best Hospitals"
          description="Explore top rated hospitals and book your visit in a few seconds"
        />
      </div>
      <div>
        <ServiceCard
          imageUrl="./lab-test.png"
          heading="Lab Tests"
          description="Get your lab test samples collected and reports delivered at home"
        />
      </div>
      <div>
        <ServiceCard
          imageUrl="./treatment.png"
          heading="Treatment"
          description="Compare prices of surgeries and book the best treatment in town"
        />
      </div>
    </div>
  );
};
