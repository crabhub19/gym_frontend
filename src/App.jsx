import { useState,useEffect } from 'react'
import {HashRouter,Routes,Route,useNavigate,useLocation} from "react-router-dom";
import 'aos/dist/aos.css';
import AOS from 'aos';
import './App.css'
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Top from './components/Top'
import Theme from './components/Theme';
import { Toaster,toast } from 'sonner';
import Register from './pages/Register';
import Login from './pages/Login';
import Loading from './components/Loading';
import About from './pages/About';
import Profile from './pages/Profile';
import Logout from './components/Logout';
import Footer from './components/Footer';
function App() {
  useEffect(() => {
    // AOS for animation
    AOS.init({
      offset: 100,
      duration: 600,
      easing: 'ease-out-sine',
      delay: 0,
    });
  }, [])
  // enable and disable darkmode
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <>
    <HashRouter>      {/* navbar */}
      <NavBar isDarkMode={isDarkMode}/>
      {/* all routes */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="profile" element={<Profile/>}/>
        <Route path="logout" element={<Logout/>}/>
      </Routes>
      <Footer/>
      {/* toaster popup */}
      <Toaster toastOptions={{ className: 'md:py-24 py-12 text-2xl shadow-2xl flex justify-center rounded-sm' }} richColors theme={`${isDarkMode ? 'dark' : 'light'}`} closeButton />
      {/* theme customization */}
      <Theme isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      {/* click to top */}
      <Top/>
      {/* loading */}
      <Loading/>
    </HashRouter>
    </>
  )
}

export default App
