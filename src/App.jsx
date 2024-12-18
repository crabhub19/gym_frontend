import { useState, useEffect, Suspense, lazy } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
import "./App.css";
import { Toaster } from "sonner";
import { fetchAllProfile } from "./features/profile/allProfileSlice";
import { fetchUserProfile } from "./features/profile/profileSlice";
import { fetchPosts } from "./features/post/postSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Top from "./components/Top";
import Theme from "./components/Theme";
import Loading from "./components/Loading";
import Logout from "./components/Logout";
// import Messenger from "./pages/Messenger";
import { Riple } from "react-loading-indicators";
import Footer from "./components/Footer";
const Login = lazy(() => import("./pages/Login"));
const Profile = lazy(() => import("./pages/Profile"));
const Register = lazy(() => import("./pages/Register"));
const UpdateProfile = lazy(() => import("./pages/UpdateProfile"));
const Team = lazy(() => import("./pages/Team"));
const AnotherUserProfile = lazy(() => import("./pages/AnotherUserProfile"));
const AddPost = lazy(() => import("./pages/AddPost"));
const Explore = lazy(() => import("./pages/Explore"));
function App() {
  //dispatch
  const dispatch = useDispatch();
  const userProfileStatus = useSelector((state) => state.profile.status);
  const fetchAllProfileStatus = useSelector((state) => state.allProfile.status);
  const postStatus = useSelector((state) => state.post.status);
  //navigation
  const navigate = useNavigate();
  const location = useLocation();
  // enable and disable darkmode
  const [isDarkMode, setIsDarkMode] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token && userProfileStatus === "idle") {
      dispatch(fetchUserProfile());
    }
  },[])

  useEffect(() => {
    if (fetchAllProfileStatus === "idle") {
      dispatch(fetchAllProfile());
    }
    if (!token) return;
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out-sine",
    });
    return () => AOS.refresh();
  },[])

  // authinticate
  useEffect(() => {
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
        {/* <Route path="messenger" element={<Messenger/>} /> */}
        <Route
              path="team"
              element={
                <Suspense
                  fallback={
                    <div className="flex justify-center items-center py-48">
                      <Riple
                        variant="bounce"
                        color="#ff0000"
                        size="large"
                        
                      />
                    </div>
                  }
                >
                  <Team />
                </Suspense>
              }
            />
        <Route
              path="team/anotherUserProfile"
              element={
                <Suspense
                  fallback={
                    <div className="flex justify-center items-center py-48">
                      <Riple
                        variant="bounce"
                        color="#ff0000"
                        size="large"
                        
                        
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
                      <Riple
                        variant="bounce"
                        color="#ff0000"
                        size="large"
                        
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
                      <Riple
                        variant="bounce"
                        color="#ff0000"
                        size="large"
                        
                        textColor=""
                      />
                    </div>
                  }
                >
                  <UpdateProfile />
                </Suspense>} />
            <Route path="addPost" element={<Suspense
                  fallback={
                    <div className="flex justify-center items-center py-48">
                      <Riple
                        variant="bounce"
                        color="#ff0000"
                        size="large"
                        
                        textColor=""
                      />
                    </div>
                  }
                >
                  <AddPost />
                </Suspense>} />
            <Route path="explore" element={<Suspense
                  fallback={
                    <div className="flex justify-center items-center py-48">
                      <Riple
                        variant="bounce"
                        color="#ff0000"
                        size="large"
                        
                        textColor=""
                      />
                    </div>
                  }
                >
                  <Explore />
                </Suspense>} />
            <Route path="logout" element={<Logout />} />
          </>
        ) : (
          <>
            <Route path="login" element={
               <Suspense
               fallback={
                 <div className="flex justify-center items-center py-44">
                   <Riple
                     variant="bounce"
                     color="#ff0000"
                     size="large"
                     
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
                      <Riple
                        variant="bounce"
                        color="#ff0000"
                        size="large"
                        
                        
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
      
      <Footer />

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
