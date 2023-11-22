import React from "react";
import Navbar from "./components/Navbar";
import DeskNav from "./components/Desktop";
import Hero from './components/Hero';
import About from './components/About';
import Destination from './components/Destination';
import Services from "./components/Services";
import Footer from './components/Footer';


function App() {
  const width = window.innerWidth;
   return (
  <div>
{width > 750 ? <DeskNav />:<Navbar />}
    <Hero />
    <About />
    <Destination />
    <Services />
    <Footer />
  </div>
   );
}
export default App;