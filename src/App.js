import React from 'react';
import {
  Carousel,
  Destinations,
  Footer,
  Hero,
  Navbar,
  Search,
  Selects,
} from './components';

const App = () => (
  <div>
    <Navbar />
    <Hero />
    <Destinations />
    <Search />
    <Selects />
    <Carousel />
    <Footer />
  </div>
);

export default App;
