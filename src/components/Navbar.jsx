import React, {useState} from "react";
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import IconButton from '@mui/material/IconButton';


function Navbar({darkMode}) {
  const [open, setOpen] = useState(false);

const [initialState, setState] = useState(true);

  function handleClick() {
    setOpen(false);
    setState(!initialState);
    darkMode(initialState);
  }


  
  return (
    <nav className="p-2 flex justify-between items-center">
      <AppBar position="static" color="inherit" elevation={0} >
      <h1 className="text-customColor text-2xl font-heading">Project Overseas</h1>
        <IconButton  variant="plain" color="neutral" onClick={() => setOpen(true)}>
          <i className="fa-solid fa-bars text-2xl fixed top-3 right-3 dark:text-customColor"></i>
        </IconButton>
        </AppBar>
        <Drawer open={open} onClose={() => setOpen(false)}
          ModalProps={{disableScrollLock:true}}
            >
          <ul className="flex flex-col my-4 text-xl items-center space-y-8 font-paragraph w-[70vw] m-auto">
<li className="hover:text-customColor hover:ease-in duration-150"><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
<li className="hover:text-customColor hover:ease-in duration-150"><a href="#about" onClick={() => setOpen(false)}>About</a></li>
<li className="hover:text-customColor hover:ease-in duration-150"><a href="#destination" onClick={() => setOpen(false)}>Destination</a></li>
<li className="hover:text-customColor hover:ease-in duration-150"><a href="#services" onClick={() => setOpen(false)}>Service</a></li>
            <span onClick={handleClick} className="cursor-pointer">{initialState ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}</span>
         </ul>
      </Drawer>
    </nav>
  );
}

export default Navbar;