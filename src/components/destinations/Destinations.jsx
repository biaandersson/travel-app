import React from 'react';
import {
  boraBora1,
  boraBora2,
  maldives1,
  maldives2,
  maldives3,
} from '../../assets';

const Destinations = () => (
  <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
    <h1>All-inclusive Resorts</h1>
    <p className='py-4'>On the Caribbean's best Beaches.</p>
    <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
      <img
        src={boraBora1}
        alt='bora-bora'
        className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2'
      />
      <img
        src={boraBora2}
        alt='bora-bora'
        className='w-full h-full object-cover'
      />
      <img
        src={maldives1}
        alt='maldives'
        className='w-full h-full object-cover'
      />
      <img
        src={maldives2}
        alt='maldives'
        className='w-full h-full object-cover'
      />
      <img
        src={maldives3}
        alt='maldives'
        className='w-full h-full object-cover'
      />
    </div>
  </div>
);

export default Destinations;
