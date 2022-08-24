import React from 'react';

const SelectsCard = ({ bg, text }) => {
  return (
    <div className='relative'>
      <img src={bg} alt='Bora Bora' className='w-full h-full object-cover' />
      <div className='bg-gray-900/30 absolute left-0 top-0 w-full h-full'>
        <p className='left-4 bottom-4 text-xl text-white absolute font-bold'>
          {text}
        </p>
      </div>
    </div>
  );
};

export default SelectsCard;
