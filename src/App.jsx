import { useState, useEffect, Suspense, lazy } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
import "./App.css";
import { Toaster, toast } from "sonner";
import { fetchAllProfile } from "./features/profile/allProfileSlice";
import { fetchUserProfile } from "./features/profile/profileSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Top from "./components/Top";
import Theme from "./components/Theme";
import Loading from "./components/Loading";
import Logout from "./components/Logout";
import Team from "./pages/Team";
import { ThreeDot } from "react-loading-indicators";
const Login = lazy(() => import("./pages/Login"));
const Profile = lazy(() => import("./pages/Profile"));
const Register = lazy(() => import("./pages/Register"));
const Footer = lazy(() => import("./components/Footer"));
const UpdateProfile = lazy(() => import("./pages/UpdateProfile"));
function App() {
  //dispatch
  const dispatch = useDispatch();
  const fetchAllProfileStatus = useSelector((state) => state.allProfile.status);
  const fetchUserProfileStatus = useSelector((state) => state.profile.status);
  //navigation
  const navigate = useNavigate();
  // enable and disable darkmode
  const [isDarkMode, setIsDarkMode] = useState(false);


  useEffect(() => {
    // AOS for animation
    AOS.init({
      offset: 100,
      duration: 600,
      easing: "ease-out-sine",
      delay: 0,
    });

    if (fetchAllProfileStatus === "idle") {
      dispatch(fetchAllProfile());
    }
    if (fetchUserProfileStatus === "idle") {
      dispatch(fetchUserProfile());
    }
  }, []);

  // authinticate
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      localStorage.removeItem("token");
      navigate("/");
    }
  }, []);
  return (
    <>
      {/* navbar */}
      <NavBar isDarkMode={isDarkMode} />
      {/* all routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="team" element={<Team />} />
        {localStorage.getItem("token") ? (
          <>
            <Route path="profile" element={<Suspense
                  fallback={
                    <div className="flex justify-center items-center py-48">
                      <ThreeDot
                        variant="bounce"
                        color="#ff0000"
                        size="large"
                        text="loading Register Page"
                        textColor=""
                      />
                    </div>
                  }
                >
                  <Profile />
                </Suspense>} />
            <Route path="profile/update-profile" element={<Suspense
                  fallback={
                    <div className="flex justify-center items-center py-48">
                      <ThreeDot
                        variant="bounce"
                        color="#ff0000"
                        size="large"
                        text="loading Register Page"
                        textColor=""
                      />
                    </div>
                  }
                >
                  <UpdateProfile />
                </Suspense>} />
            <Route path="logout" element={<Logout />} />
          </>
        ) : (
          <>
            <Route path="login" element={
               <Suspense
               fallback={
                 <div className="flex justify-center items-center py-44">
                   <ThreeDot
                     variant="bounce"
                     color="#ff0000"
                     size="large"
                     text="loading Login Page "
                     
                   />
                 </div>
               }
             >
               <Login/>
             </Suspense>
            } />
            <Route
              path="register"
              element={
                <Suspense
                  fallback={
                    <div className="flex justify-center items-center py-48">
                      <ThreeDot
                        variant="bounce"
                        color="#ff0000"
                        size="large"
                        text="loading Register Page"
                        
                      />
                    </div>
                  }
                >
                  <Register />
                </Suspense>
              }
            />
          </>
        )}
      </Routes>
      
      <Suspense fallback={
        <div className="flex justify-center items-center py-20"
        ><ThreeDot variant="bounce" color="#ff0000" size="large" text="loading Footer "  />
        </div>
      }>
        <Footer />
      </Suspense>
      {/* toaster popup */}
      <Toaster
        toastOptions={{
          className:
            "md:py-24 py-12 text-2xl shadow-2xl flex justify-center rounded-sm",
        }}
        richColors
        theme={`${isDarkMode ? "dark" : "light"}`}
        closeButton
      />
      {/* theme customization */}
      <Theme isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      {/* click to top */}
      <Top />
      {/* loading */}
      <Loading />
    </>
  );
}

export default App;
