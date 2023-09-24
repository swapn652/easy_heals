import React from 'react';

export const MedicalProfessionalsCard = ({ imageSrc, name, specialization }) => {
  // Constant rating value
  const rating = '5.0';

  return (
    <div style={{boxShadow: "0px 2.310344934463501px 4.620689868927002px 0px #6060601A"}} className='2xl:h-[19em] xl:h-[17em] lg:h-[13.5em] 2xl:w-[14.5em] xl:w-[13em] bg-white flex flex-col items-center relative rounded-xl border-[0.1px] border-text-light'>
      <img src={imageSrc} className="2xl:h-[15em] xl:h-[13.5em] lg:h-[10.7em] rounded-tl-lg rounded-tr-lg" alt={name} />
      <div className="mt-2 flex flex-col items-center font-[Poppins] font-[500]">
        <div className="2xl:text-[15px] xl:text-[13px] lg:text-[11px]">{name}</div>
        <div className="2xl:text-[13px] xl:text-[11px] lg:text-[9px] text-buttonColor">{specialization}</div>
      </div>

      {/* Rating (constant value) */}
      <div className="absolute bg-green h-[1.5em] w-[4em] left-0 top-4 flex justify-center text-white">
        {rating}
      </div>
    </div>
  );
};
