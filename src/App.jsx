import { useState,useEffect } from 'react'
import {Routes,Route,useNavigate,useLocation} from "react-router-dom";
import 'aos/dist/aos.css';
import AOS from 'aos';
import './App.css'
import NavBar from './assets/components/NavBar';
import Home from './assets/components/home';
import Top from './assets/components/top';
import Theme from './assets/components/Theme';
import { Toaster,toast } from 'sonner';
import Register from './assets/components/Register';
function App() {
  useEffect(() => {
    // AOS for animation
    AOS.init({
      offset: 100,
      duration: 1200,
      easing: 'ease-in-sine',
      delay: 50,
    });
  }, [])
  // enable and disable darkmode
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <>
      {/* navbar */}
      <NavBar isDarkMode={isDarkMode}/>
      {/* all routes */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="register" element={<Register/>}/>
      </Routes>

      {/* toaster popup */}
      <Toaster toastOptions={{ className: 'py-24 text-2xl flex justify-center rounded-sm' }} richColors theme={`${isDarkMode ? 'dark' : 'light'}`} closeButton />
      {/* theme customization */}
      <Theme isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      {/* click to top */}
      <Top/>
    </>
  )
}

export default App
