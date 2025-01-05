import React from "react";
import logo from '../assets/image/builtIn/gym.png'
export default function Footer () {
    return (
      <div className="relative bg-main-dark">
        
        <div className="p-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
            <div className="md:max-w-md lg:col-span-2">
                <img src={logo} alt="" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between pt-5 pb-10 border-t border-white sm:flex-row">
            <div className="text-sm text-white border-b border-dashed border-white py-1">
              <p>Xlorex Bishal</p>
              <p>Founder & Creator of GYM</p>
            </div>
            <p className="text-sm text-white">
              © Copyright 2024 gym. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    );
  };