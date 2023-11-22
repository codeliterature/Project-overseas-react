import React, {useState} from 'react';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';

function Hero() {
const [open, setOpen] = useState(false);

  const customCss = {
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), transparent),url('https://i.imgur.com/xT9c5iY.jpg')"
  }

  
  return (
    <div style={customCss} className="bg-center bg-no-repeat bg-cover min-h-[80vh] w-[90%] m-auto my-4 rounded-md bg-blend-darken flex justify-center" id="home">
      <div className="flex flex-col my-4 space-y-12 items-center p-4 justify-center">
        
        <h3 className="text-2xl font-bold text-center text-white">Welcome to Project Overseas</h3>
        <p className="text-lg text-center text-white"> Projects Overseas guarantees best of best.
        Travel through the world with us.</p>
        <button className="bg-customColor py-1 px-2 rounded hover:tracking-wide hover:bg-opacity-0 hover:border hover:border-1px hover:border-customColor hover:text-white hover:ease-in duration-150" onClick={() => setOpen(true)}>Book Now</button>
        <Modal open={open} onClose={() => setOpen(false)} disableScrollLock={true} className="my-2" >
          <ModalDialog>
            <ModalClose />
            <div className="flex flex-col p-4 space-y-2">
            <input type="text" placeholder="Your Name" className="py-2"/>
            <input type="email" placeholder="Your Email" className="py-2"/>
            <textarea maxlength="240" row="7" placeholder="Enter your message here" className="py-2"></textarea>
            <button className="border border-1px border-customColor rounded py-2 hover:bg-customColor hover:ease-in duration-200">Submit</button>
              </div>
            </ModalDialog>
        </Modal>
      </div> 
    </div>

  );
}

export default Hero;