import { useState, useEffect, Suspense, lazy } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
import "./App.css";
import { Toaster } from "sonner";
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
import Messenger from "./pages/Messenger";
import { ThreeDot } from "react-loading-indicators";
import Explore from "./pages/Explore";
import AddPost from "./pages/AddPost";
const Login = lazy(() => import("./pages/Login"));
const Profile = lazy(() => import("./pages/Profile"));
const Register = lazy(() => import("./pages/Register"));
const Footer = lazy(() => import("./components/Footer"));
const UpdateProfile = lazy(() => import("./pages/UpdateProfile"));
const AnotherUserProfile = lazy(() => import("./pages/AnotherUserProfile"));
function App() {
  //dispatch
  const dispatch = useDispatch();
  const fetchAllProfileStatus = useSelector((state) => state.allProfile.status);
  const userProfileStatus = useSelector((state) => state.profile.status);
  //navigation
  const navigate = useNavigate();
  const location = useLocation();
  // enable and disable darkmode
  const [isDarkMode, setIsDarkMode] = useState(false);


  useEffect(() => {
    // AOS for animation
    AOS.init({
      // offset: 120,
      duration: 600,
      easing: "ease-out-sine",
      delay: 0,
    });

    if (userProfileStatus === "idle" && localStorage.getItem("token")) {
      dispatch(fetchUserProfile());
    }
    if (fetchAllProfileStatus === "idle") {
      dispatch(fetchAllProfile());
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

  //scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  // Determine if Footer should be shown
  const showFooter = location.pathname !== "/messenger";
  return (
    <>
      {/* navbar */}
      <NavBar isDarkMode={isDarkMode} />
      {/* all routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="team" element={<Team />} />
        <Route path="messenger" element={<Messenger/>} />
        <Route path="explore" element={<Explore/>} />
        <Route path="addPost" element={<AddPost/>} />

        
        <Route
              path="team/anotherUserProfile"
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
                  <AnotherUserProfile />
                </Suspense>
              }
            />
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
      
        { showFooter && <Suspense fallback={
        <div className="flex justify-center items-center py-20"
        ><ThreeDot variant="bounce" color="#ff0000" size="large" text="loading Footer "  />
        </div>
      }>
        <Footer />
      </Suspense>}
      {/* toaster popup */}
      <Toaster
        toastOptions={{
          className:
            "md:py-24 py-12 text-xl 2xl:text-2xl shadow-2xl flex justify-center rounded-sm max-w-full",
        }}
        richColors
        theme={`${isDarkMode ? "dark" : "light"}`}
        closeButton
      />
      {/* theme customization */}
      <Theme isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      {/* click to top */}
      <Top  />
      {/* loading */}
      <Loading />
    </>
  );
}

export default App;
