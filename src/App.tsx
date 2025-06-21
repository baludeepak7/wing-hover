import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import UAVOfferings from './components/UAVOfferings';
import DefenseSystems from './components/DefenseSystems';
import Agriculture from './components/Agriculture';
import Mobility from './components/Mobility';
import Intelligence from './components/Intelligence';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router basename="/wing-hover">
      <div className="min-h-screen bg-white text-slate-800 font-inter">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <UAVOfferings />
              <DefenseSystems />
              <Agriculture />
              <Mobility />
              <Intelligence />
              <Contact />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/uav-offerings" element={<UAVOfferings />} />
          <Route path="/defense-systems" element={<DefenseSystems />} />
          <Route path="/agriculture" element={<Agriculture />} />
          <Route path="/intelligence" element={<Intelligence />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;