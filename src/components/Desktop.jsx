import React from 'react';


function DeskNav() {
  return (
    <nav className="px-2 flex justify-between items-center">
      <h1 className="text-customColor text-2xl">Project Overseas</h1>
      <ul className="p-4 flex justify-between items-center space-x-3">
        <li className="hover:text-customColor hover:ease-in duration-150"><a href="#home">Home</a></li>
        <li className="hover:text-customColor hover:ease-in duration-150"><a href="#about">About</a></li>
        <li className="hover:text-customColor hover:ease-in duration-150"><a href="#destination">Destination</a></li>
        <li className="hover:text-customColor hover:ease-in duration-150"><a href="#services">Service</a></li>
      </ul>
    </nav>
  )
}
export default DeskNav;