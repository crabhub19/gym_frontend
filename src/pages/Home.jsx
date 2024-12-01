import React, { Suspense, lazy } from "react";
import { ThreeDot } from "react-loading-indicators";
// import About from "./About";
const About = React.lazy(() => import("./About"));
const ContractUs = React.lazy(() => import("./ContractUs"));
export default function Home() {
  const scrollToAbout = (event) => {
    event.preventDefault();
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <main
        id="home"
        className="min-h-screen bg-home-page-image bg-fixed bg-cover bg-top"
      >
        <div className="flex flex-col justify-center  min-h-[900px] pl-4 sm:pl-12 md:pl-28 gap-5">
          <h1
            data-aos="slide-right"
            data-aos-duration="1800"
            data-aos-easing="ease-out-back"
            className="text-4xl md:text-7xl font-lovelo text-white"
          >
            Hi! You Are Welcome
          </h1>
          <h1
            data-aos="slide-right"
            data-aos-delay="400"
            data-aos-duration="1800"
            data-aos-easing="ease-out-back"
            className="text-white text-6xl md:text-9xl font-RubikWetPaint uppercase"
          >
            GYM Center
          </h1>
          <a
            onClick={scrollToAbout}
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
            data-aos-offset="100"
            className="secondary-btn w-fit"
          >
            About Us
          </a>
        </div>
      </main>

      <Suspense
        fallback={
          <div className="flex justify-center items-center py-20">
            <ThreeDot
              variant="bounce"
              color="#ff0000"
              size="medium"
              text="loading about "
              textColor=""
            />
          </div>
        }
      >
        <About />
      </Suspense>
      <Suspense
        fallback={
          <div className="flex justify-center items-center py-20">
            <ThreeDot
              variant="bounce"
              color="#ff0000"
              size="medium"
              text="loading about "
              textColor=""
            />
          </div>
        }
      >
        <ContractUs />
      </Suspense>
    </>
  );
}
