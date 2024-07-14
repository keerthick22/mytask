import React from 'react';
import Header from './Header';
//import Hero from './Hero';
import Features from './Features';
import About from './About';
import Contact from './Contact';
// import Testimonials from './Testimonials';
import CountdownTimer from './CountdownTimer';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Hero /> */}
      <Features />
      <About />
      <Contact />
      {/* <Testimonials /> */}
      <CountdownTimer />
      <Footer />
    </div>
  );
}

export default App;
