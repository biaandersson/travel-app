import React from 'react';
import { SelectsCard } from '../index';
import {
  boraBora1,
  boraBora2,
  keyWest,
  maldives1,
  maldives2,
  maldives3,
} from '../../assets';

const Selects = () => (
  <section className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
    <SelectsCard bg={boraBora1} text='Bora Bora' />
    <SelectsCard bg={boraBora2} text='Bora Bora' />
    <SelectsCard bg={maldives1} text='Maldives' />
    <SelectsCard bg={maldives2} text='Maldives' />
    <SelectsCard bg={maldives3} text='Jamaica' />
    <SelectsCard bg={keyWest} text='Key West' />
  </section>
);

export default Selects;
