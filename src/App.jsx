import React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from "./components/Navbar";
import DeskNav from "./components/Desktop";
import Hero from './components/Hero';
import About from './components/About';
import Destination from './components/Destination';
import Services from "./components/Services";
import Footer from './components/Footer';



function App() {
  

  const [isDark, setDark] = React.useState(false);
  
  function darkMode(value) {
     setDark(value);
  }

  const darkTheme = createTheme({
    palette: {
      mode: isDark ? "dark": "light",
    },
  });
  
  const width = window.innerWidth;
   return (   
     <ThemeProvider theme={darkTheme}>
       <CssBaseline />
  <main className={isDark ? "dark": "jojo"}>
    <div className="dark:text-white">
{width > 750 ? <DeskNav darkMode={darkMode} />:<Navbar 
  darkMode={darkMode} />}
    <Hero />
    <About />
    <Destination />
    <Services />
    <Footer /> 
    </div>
  </main>
       </ThemeProvider>
  
   );
}
export default App;