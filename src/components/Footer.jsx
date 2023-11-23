import React from 'react';

function Footer() {
const year = new Date().getFullYear();
  
  return (
    <footer className="p-2 flex flex-col space-y-2">
      <div className="">
        <h1 className="text-customColor text-xl dark:text-white font-paragraph">Project Overseas</h1>
        <p className="text-[0.8rem] font-paragraph">Connecting Continents, Bridging Cultures: Explore Our Global Ventures!</p>
      </div>
      <div class="space-x-2">
        <i className="fa-brands fa-facebook text-2xl text-customColor"></i>
        <i className="fa-brands fa-instagram text-2xl text-customColor"></i>
        <i className="fa-brands fa-x-twitter text-2xl text-customColor"></i>
        <i className="fa-brands fa-whatsapp text-2xl text-customColor"></i>
      </div>
      
      <div>
        <h2 className="text-lg my-2 font-paragraph">Quick links</h2>
        <ul className="font-paragraph">
      <li className="footerul "><i className="fa-solid fa-location-arrow px-1"></i>Home</li>
        <li className="footerul "><i className="fa-solid fa-location-arrow px-1"></i>About</li>
        <li className="footerul "><i className="fa-solid fa-location-arrow px-1"></i>Destination</li>
        <li className="footerul "><i className="fa-solid fa-location-arrow px-1"></i>Services</li>
      </ul></div>
      
      <div>
      <h2 className="text-lg my-2 font-paragraph">Contact Info</h2>
        <ul className="font-paragraph">
          <li className="footerul ">1234 Elm street</li>
          <li className="footerul ">Cityville, Stateville</li>
          <li className="footerul ">+1-555-123-4567</li>
          <li className="footerul ">info@example.com</li>
          <li className="footerul ">24/7 Customer Assistacnce</li>
        </ul>
      </div>
      <div>
      <p className="text-xs text-center font-heading">© copyright{year} .All Rights Reserved. <a  className="text-customColor underline underline-offset-1"href="https://codeliterature.netlify.app" target="_blank">CodeLiterature</a><a href="https://github.com/codeliterature/Project-overseas-react" target="_blank" className="text-customColor"><br/> <i className="fa-solid fa-link text-sm"></i>Code</a></p>
      </div>
    </footer>
  );
}

export default Footer;