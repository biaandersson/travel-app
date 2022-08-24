import React from 'react';
import beachVideo from '../../assets/beachVid.mp4';
import { AiOutlineSearch } from 'react-icons/ai';

const Hero = () => (
  <section className='w-full h-screen relative'>
    <video
      src={beachVideo}
      className='w-full h-full object-cover'
      autoPlay
      loop
      muted
    />
    <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30' />
    <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
      <h1>First Class Travel</h1>
      <h2 className='py-4'>
        Top <span className='text-gray-400'>1%</span> Locations Worldwide
      </h2>
      <form className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-lg tex-black bg-gray-100/90'>
        <div>
          <input
            type='text'
            placeholder='Search Destinations'
            className='bg-transparent w-[300px] sm:w-[400px] focus:outline-none text-black'
          />
        </div>
        <div>
          <button>
            <AiOutlineSearch
              size={20}
              className='icon'
              style={{ color: '#fff' }}
            />
          </button>
        </div>
      </form>
    </div>
  </section>
);

export default Hero;
