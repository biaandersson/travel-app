import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logo, setLogo] = useState(false);

  const handleNavMenu = () => {
    setIsOpen(!isOpen);
    setLogo(!logo);
  };

  return (
    <nav className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
      <div>
        <h1 className={logo ? 'hidden' : 'block'} onClick={handleNavMenu}>
          BEACHES.
        </h1>
      </div>
      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>Destinations</li>
        <li>Travel</li>
        <li>View</li>
        <li>Book</li>
      </ul>
      <div className='hidden md:flex'>
        <BiSearch size={20} className='mr-2' />
        <BsPerson size={20} />
      </div>

      <div className='md:hidden z-10' onClick={handleNavMenu}>
        {isOpen ? (
          <AiOutlineClose size={20} />
        ) : (
          <HiOutlineMenuAlt4 size={20} />
        )}
      </div>

      {/* Mobile menu dropdown */}
      <div
        className={isOpen ? 'navbar-is-open' : 'navbar-is-closed'}
        onClick={handleNavMenu}>
        <ul>
          <h1>BEACHES.</h1>
          <li className='border-b'>Home</li>
          <li className='border-b'>Destinations</li>
          <li className='border-b'>Travel</li>
          <li className='border-b'>View</li>
          <li className='border-b'>Book</li>
          <div className='flex flex-col'>
            <button className='my-6'>Search</button>
            <button>Account</button>
          </div>
          <div className='flex justify-between my-6'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram className='icon' />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
