import React from 'react';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Choose from './pages/Whychooseus';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Choose />
      <Services />
      <Contact />
    </div>
  );
}

export default App;

