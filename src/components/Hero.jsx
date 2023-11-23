import React, {useState} from 'react';
import Modal from "./Modal";

function Hero() {
const [open, setOpen] = useState(false);

  const customCss = {
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), transparent),url('https://i.imgur.com/xT9c5iY.jpg')"
  }

  
  return (
    <div style={customCss} className="bg-center bg-no-repeat bg-cover min-h-[80vh] w-[90%] m-auto my-4 rounded-md bg-blend-darken flex justify-center" id="home">
      <div className="flex flex-col my-4 space-y-12 items-center p-4 justify-center">
        
        <h3 className="text-2xl font-bold text-center text-white font-heading">Welcome to Project Overseas</h3>
        <p className="text-lg text-center text-white font-paragraph"> Projects Overseas guarantees best of best.
        Travel through the world with us.</p>
      <Modal />
      </div> 
    </div>

  );
}

export default Hero;


