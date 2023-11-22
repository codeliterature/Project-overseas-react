import Drawer from '@mui/joy/Drawer';
import React, {useState} from "react";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import IconButton from '@mui/joy/IconButton';
import ModalClose from '@mui/joy/ModalClose';


function Navbar() {
  const [open, setOpen] = useState(false);
  
  return (
    <nav className="p-2 flex justify-between items-center">
      <h1 className="text-customColor text-2xl">Project Overseas</h1>
        <IconButton  variant="plain" color="neutral" onClick={() => setOpen(true)}>
          <i className="fa-solid fa-bars text-2xl fixed top-3 right-3"></i>
        </IconButton>
        <Drawer open={open} onClose={() => setOpen(false)}>
          <ModalClose />
          <ul className="flex flex-col my-4 text-xl items-center space-y-8">
<li className="hover:text-customColor hover:ease-in duration-150"><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
<li className="hover:text-customColor hover:ease-in duration-150"><a href="#about" onClick={() => setOpen(false)}>About</a></li>
<li className="hover:text-customColor hover:ease-in duration-150"><a href="#destination" onClick={() => setOpen(false)}>Destination</a></li>
<li className="hover:text-customColor hover:ease-in duration-150"><a href="#services" onClick={() => setOpen(false)}>Service</a></li>
         </ul>
      </Drawer>
    </nav>
  );
}

export default Navbar;