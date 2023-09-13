import React from 'react';

export const ServiceCard = ({ imageUrl, heading, description }) => {
  return (
    <div className="flex flex-col h-32 w-[16em] bg-cyan p-2 rounded-lg">
      <div className="flex flex-row items-center">
        <img src={imageUrl} alt={heading} /> {/* Use the imageUrl prop */}
        <div className="ml-4 font-bold text-lg">{heading}</div> {/* Use the heading prop */}
      </div>
      <div className="mt-4 text-xs px-2">
        {description} {/* Use the description prop */}
      </div>
    </div>
  );
};