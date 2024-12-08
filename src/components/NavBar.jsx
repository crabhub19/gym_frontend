import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import logo from "../assets/image/builtIn/gym.png";
import lightLogo from "../assets/image/builtIn/gym-light.png";

export default function NavBar(pros) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  let { isDarkMode } = pros;
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [scrollProgressBar, setScrollProgressBar] = useState(0);
  const pathLocation = useLocation().pathname;
  let aditionalNavigation = localStorage.getItem("token")
    ? [
        {
          name: "Profile",
          to: "/profile",
          current: pathLocation === "/profile" ? true : false,
        },
        {
          name: "logout",
          to: "/logout",
          current: pathLocation === "/logout" ? true : false,
        },
      ]
    : [
        {
          name: "Register",
          to: "/register",
          current: pathLocation === "/register" ? true : false,
        },
        {
          name: "Login",
          to: "/login",
          current: pathLocation === "/login" ? true : false,
        },
      ];
  let navigation = [
    { name: "Home", to: "/", current: pathLocation === "/" ? true : false },
    {
      name: "Team",
      to: "/team",
      current: pathLocation === "/team" ? true : false,
    },
    ...aditionalNavigation,
  ];
  //  scroll to top
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const windowHeight = document.documentElement.clientHeight;
      const scrollPercentage = (scrollY / (scrollHeight - windowHeight)) * 100;

      setScrollProgressBar(scrollPercentage);
      
      if (scrollY < 400) {
        setIsSticky(false);
      } else {
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);





  const scrollToContractUs = async (event) => {
    event.preventDefault();
    await navigate("/");
    document
      .getElementById("contractUs")
      .scrollIntoView({ behavior: "smooth" });
  };
  const back = () => {
    navigate(-1);
  };
  return (
    <header
      className={`w-full shadow-md z-10 ${
        isSticky
          ? "bg-gradient-main-to-dark text-white fixed"
          : "absolute"
      }`}
    >
      <div className="w-full h-1 flex justify-center">
        <div
          className="bg-yellow h-1"
          style={{ width: `${scrollProgressBar}%` }}
        ></div>
      </div>
      <nav
        aria-label="Global"
        className={`mx-auto lg:px-0 md:px-4 px-2 flex max-w-7xl items-center justify-between ${
          isSticky ? " py-1 2xl:py-6" : "py-6"
        }`}
      >
        <div onClick={back}>
          <svg
            className="w-9 h-9 hover:scale-110 cursor-pointer rounded-full  shadow-sm drop-shadow-sm"
            version="1.1"
            id="Layer_1"
            viewBox="0 0 512 512"
          >
            <path
              fill={isDarkMode ? "white" : "#E3DAC9"}
              d="M256,504C119.248,504,8,392.752,8,256S119.248,8,256,8s248,111.248,248,248S392.752,504,256,504z"
            />
            <path
              fill={isDarkMode ? "white" : "#E3DAC9"}
              d="M256,16c132.336,0,240,107.664,240,240S388.336,496,256,496S16,388.336,16,256S123.664,16,256,16   M256,0C114.608,0,0,114.608,0,256c0,141.376,114.608,256,256,256s256-114.624,256-256C512,114.608,397.392,0,256,0L256,0z"
            />
            <polygon
              fill="red"
              points="239.824,399.328 97.664,255.248 239.824,111.168 376.24,111.168 233.84,255.248   376.24,399.328 "
            />
          </svg>
        </div>
        <div className="flex lg:flex-1">
          <span className="sr-only">GYM</span>
          <a href="#" className="-m-1.5 p-1.5">
            <img
              alt=""
              src={
                isSticky
                  ? logo
                  : isDarkMode
                  ? logo
                  : pathLocation === "/"
                  ? logo
                  : lightLogo
              }
              className="h-16 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className={`m-1 inline-flex items-center justify-center rounded-sm p-1 bg-theme text-white`}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div
          className={`hidden lg:flex lg:gap-x-12 font-oswald text-lg font-semibold ${
            pathLocation === "/" ? "text-white" : ""
          }`}
        >
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              as="Link"
              to={item.to}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "line-through decoration-double decoration-2"
                  : "",
                "leading-6 hover:line-through hover:decoration-double hover:decoration-2 cursor-pointer"
              )}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a onClick={scrollToContractUs} className="btn">
            Contact Us <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 dark:bg-dark">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src={isDarkMode ? logo : lightLogo}
                className="h-16 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="m-1 rounded-sm text-white p-1 bg-theme"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-black dark:divide-white">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <NavLink
                    onClick={() => setMobileMenuOpen(false)} // Close menu on link click
                    key={item.name}
                    as="Link"
                    to={item.to}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "line-through decoration-double decoration-2"
                        : "",
                      "hover:line-through hover:decoration-double hover:decoration-2 cursor-pointer block rounded-lg px-3 py-2 font-semibold leading-7 font-oswald text-2xl text-dark dark:text-white"
                    )}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
              <div className="py-6">
                <a onClick={scrollToContractUs} className="btn">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
