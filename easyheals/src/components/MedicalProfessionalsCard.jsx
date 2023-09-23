import React from 'react';

export const MedicalProfessionalsCard = ({ imageSrc, name, specialization }) => {
  // Constant rating value
  const rating = '5.0';

  return (
    <div style={{boxShadow: "0px 2.310344934463501px 4.620689868927002px 0px #6060601A"}} className='h-[17em] w-[14.5em] bg-white flex flex-col items-center relative rounded-xl border-[0.1px] border-text-light'>
      <img src={imageSrc} className="h-[13em] w-[14.5em] rounded-xl" alt={`Dr. ${name}`} />
      <div className="mt-2 flex flex-col items-center">
        <div>{`Dr. ${name}`}</div>
        <div className="text-[13px]">{specialization}</div>
      </div>

      {/* Rating (constant value) */}
      <div className="absolute bg-green h-[1.5em] w-[4em] left-0 top-4 flex justify-center text-white">
        {rating}
      </div>
    </div>
  );
};
