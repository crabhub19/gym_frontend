import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../features/account/accountSlice";
import { toast } from "sonner";
export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState(true);
  const [password, setPassword] = useState(true);
  const loginStatus = useSelector((state) => state.account.status);
  const loginError = useSelector((state) => state.account.error);
  const loginToken = useSelector((state) => state.account.token);
  const loginUsers = useSelector((state) => state.account.user);
  const loginIsAdmin = useSelector((state) => state.account.isAdmin);

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(credentials)).then((resultAction) => {
      if (loginUser.fulfilled.match(resultAction)) {
        toast.success("Login successfully");
        navigate("/profile");
        setCredentials({ username: "", password: "" });
        window.location.reload();
        
      }else if (loginUser.rejected.match(resultAction)) {
        if (resultAction.payload.target === "password") {
          setPassword(false);
          setEmail(true);
        }else if (resultAction.payload.target === "email") {
          setEmail(false);
          setPassword(true);
        }
        const errorMessage = resultAction.payload?.detail || "An error occurred";
        toast.error(errorMessage);
      }
    });
    
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="pt-28 min-h-screen flex justify-center items-center">
          <div className=" block w-full">
            <div className="flex bg-white dark:bg-dark rounded-lg shadow-2xl overflow-hidden mx-auto max-w-sm lg:max-w-4xl drop-shadow-2xl">
              <div className="hidden lg:block lg:w-1/2 bg-cover bg-login-page-bg dark:bg-login-page-form"></div>
              <div className="w-full p-8 lg:w-1/2">
                <h2 className="text-2xl font-semibold text-center">Login</h2>
                <p className="text-xl text-center">Welcome back!</p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="border-b w-1/6 lg:w-1/6"></span>
                  We want to authenticate you
                  <span className="border-b w-1/6 lg:w-1/6"></span>
                </div>
                <div className="py-2 mx-auto">
                  <div
                    className="m-4 relative"
                    data-aos="flip-right"
                    data-aos-delay="100"
                  >
                    <input
                      id="email"
                      className={`border p-3 dark:bg-dark dark:text-gray-light  dark:border-gray-dark shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-light rounded-lg w-full outline-none pl-12 ${email ? "" : "border-2 border-theme"}`}
                      type="email"
                      placeholder="Email:email@gmail.com"
                      name="username"
                      value={credentials.username}
                      onChange={handleChange}
                      required
                    />
                    <div className="absolute left-0 inset-y-0 flex items-center">
                      <svg
                        className="h-8 w-8 ml-1 p-1 dark:text-white text-dark"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        id="Layer_1"
                        data-name="Layer 1"
                        viewBox="0 0 24 24"
                        width="512"
                        height="512"
                      >
                        <path d="M12,0A12.013,12.013,0,0,0,0,12c-.125,9.574,11.159,15.429,18.9,9.817a1.5,1.5,0,1,0-1.727-2.453C11.42,23.582,2.863,19.146,3,12,3.472.07,20.529.072,21,12v1.5a1.5,1.5,0,0,1-3,0V12C17.748,4.071,6.251,4.072,6,12a6.017,6.017,0,0,0,10.078,4.388A4.5,4.5,0,0,0,24,13.5V12A12.013,12.013,0,0,0,12,0Zm0,15a3,3,0,0,1,0-6A3,3,0,0,1,12,15Z" />
                      </svg>
                    </div>
                  </div>
                  <div
                    className="m-4 relative"
                    data-aos="flip-right"
                    data-aos-delay="200"
                  >
                    <input
                      id="password"
                      className={`border p-3 dark:bg-dark dark:text-gray-light  dark:border-gray-dark shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-light rounded-lg w-full outline-none pl-12 ${password ? "" : "border-2 border-theme"}`}
                      type="password"
                      placeholder="Password: ****"
                      name="password"
                      value={credentials.password}
                      onChange={handleChange}
                      required
                    />
                    <div className="absolute left-0 inset-y-0 flex items-center">
                      <svg
                        className="h-10 w-10 ml-1 p-1 dark:text-white text-dark"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          d="M16 8.00169L16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8.00169M16 8.00169C15.7563 8 15.4907 8 15.2 8H8.8C8.50929 8 8.24373 8 8 8.00169M16 8.00169C17.1649 8.00979 17.8313 8.05658 18.362 8.32698C18.9265 8.6146 19.3854 9.07354 19.673 9.63803C20 10.2798 20 11.1198 20 12.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V12.8C4 11.1198 4 10.2798 4.32698 9.63803C4.6146 9.07354 5.07354 8.6146 5.63803 8.32698C6.16873 8.05658 6.83507 8.00979 8 8.00169M10 11V18M14 11V18M8.5 12.5H15.5M8.5 16.5H15.5"
                          strokeWidth="2"
                          fill="transparent"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="">
                  <button
                    type="submit"
                    className="bg-main hover:bg-main-dark text-white font-bold py-2 px-4 w-full rounded"
                  >
                    Login
                  </button>
                </div>
                <div className="mt-4 flex items-center justify-between group">
                  <span className="border-b w-1/5 md:w-1/4 group-hover:border-theme"></span>
                  <a href="#" className="text-xs hover:text-theme uppercase">
                    or forgot password
                  </a>
                  <span className="border-b w-1/5 md:w-1/4 group-hover:border-theme"></span>
                </div>
                <div className="mt-4 flex items-center justify-between group">
                  <span className="border-b w-1/5 md:w-1/4 group-hover:border-theme"></span>
                  <Link to="/register" className="text-xs hover:text-theme uppercase">
                    or sign up
                  </Link>
                  <span className="border-b w-1/5 md:w-1/4 group-hover:border-theme"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
