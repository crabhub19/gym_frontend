import { useState,useEffect } from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos';
import './App.css'
import NavBar from './assets/components/NavBar';
import Home from './assets/components/home';
import Top from './assets/components/top';
import Theme from './assets/components/Theme';

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1200,
      easing: 'ease-in-sine',
      delay: 50,
    });
  }, [])
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <>
      <NavBar isDarkMode={isDarkMode}/>
      <Home/>
      <Theme isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Top/>
    </>
  )
}

export default App
