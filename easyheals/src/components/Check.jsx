import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';

// Import the ServiceCard component
import { ServiceCard } from './ServiceCard';

export const Check = () => {
  const [items] = useState([
    {
      id: 1,
      card: (
        <ServiceCard
          imageUrl="./doctor.png"
          heading="Top Rated Doctors"
          description="Find and book an appointment with the best medical professional in town"
        />
      ),
    },
    {
      id: 2,
      card: (
        <ServiceCard
          imageUrl="./hospital.png"
          heading="Quality Hospitals"
          description="Discover and choose from top-quality hospitals in your area"
        />
      ),
    },
    {
      id: 3,
      card: (
        <ServiceCard
          imageUrl="./pharmacy.png"
          heading="Pharmacy Services"
          description="Get your prescribed medications delivered to your doorstep"
        />
      ),
    },
    {
      id: 4,
      card: (
        <ServiceCard
          imageUrl="./laboratory.png"
          heading="Diagnostic Labs"
          description="Book lab tests and get accurate results online"
        />
      ),
    },
  ]);

  return (
    <Carousel itemsToShow={2}>
      {items.map((item) => (
        <div key={item.id}>{item.card}</div>
      ))}
    </Carousel>
  );
};
