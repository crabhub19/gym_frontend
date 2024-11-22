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
import UpdateProfile from './pages/UpdateProfile';
import Team from './pages/Team';

function App() {
  //navigation
  const navigate = useNavigate();
  // enable and disable darkmode
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    // AOS for animation
    AOS.init({
      offset: 100,
      duration: 600,
      easing: 'ease-out-sine',
      delay: 0,
    });
  }, [])


  // authinticate
  useEffect(() => {
  const token = localStorage.getItem('token');
  if (!token) {
  localStorage.removeItem('token');
  navigate('/');
  }
  }, [])
  return (
    <>
      {/* navbar */}
      <NavBar isDarkMode={isDarkMode}/>
      {/* all routes */}
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="team" element={<Team/>}/>
        {localStorage.getItem('token')?(
          <>
            <Route path="profile" element={<Profile/>}/>
            <Route path="profile/update-profile" element={<UpdateProfile/>}/>
            <Route path="logout" element={<Logout/>}/>
          </>
        ):(
          <>
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
          </>
        )}
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
    </>
  )
}

export default App
