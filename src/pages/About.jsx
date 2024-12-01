import React from "react";
import about from "../assets/image/builtIn/gallery5.png";
export default function About() {
  return (
    <>
    <section id="about" className="py-8 min-h-screen flex justify-center items-center">
      <div>
      <h1 data-aos="fade-down" className="tracking-wide md:text-7xl text-4xl font-oswald font-extrabold dark:dark-text-stroke text-stroke text-center py-12">About Our Community</h1>
      <div className="">
        <div className="m-auto px-6 md:px-12 lg:px-24">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-24">
            <div data-aos="fade-right" className="md:5/12 lg:w-5/12">
              <img className="mx-auto shadow-2xl drop-shadow-2xl rounded" src={about} alt="image"/>
            </div>
            <div className="md:6/12 lg:w-6/12">
              <h2 data-aos="fade-up" className="text-2xl font-bold md:text-4xl font-rock">
                Nuxt development is carried out by passionate developers
              </h2>
              <p data-aos="fade-up" className="mt-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                omnis voluptatem accusantium nemo perspiciatis delectus atque
                autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
                consequatur! Officiis id consequatur atque doloremque!
              </p>
              <p data-aos="fade-up" className="mt-4">
                Nobis minus voluptatibus pariatur dignissimos libero quaerat
                iure expedita at? Asperiores nemo possimus nesciunt dicta veniam
                aspernatur quam mollitia.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
    </>
  );
}
