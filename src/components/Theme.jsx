import React from 'react'
import { useState, useEffect } from 'react'
export default function Theme(pros) {
     // ========================darkmode section start===========================
  let {isDarkMode,setIsDarkMode} = pros
  useEffect(() => {
    // icon
    const sunIcon   =  document.querySelector(".sun-icon");
    const moonIcon  =  document.querySelector(".moon-icon");
  
    //  cheak theme
    const cheakTheme  = ()  =>{
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        moonIcon.classList.add("display-none");
        setIsDarkMode(!isDarkMode);

      } else {
        document.documentElement.classList.remove('dark');
        sunIcon.classList.add('display-none');
      }
    }
    cheakTheme();
  
  
  }, []);
    // iconToggle
    const iconToggle  = ()  =>{
      document.querySelector(".sun-icon").classList.toggle("display-none");
      document.querySelector(".moon-icon").classList.toggle('display-none');
      setIsDarkMode(!isDarkMode);
    }
    // toggleTheme
    const toggleTheme = ()  =>{
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
        iconToggle();
      }else{
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
        iconToggle();
      }

    }
                                              // darkmode end
  return (
    <div id="theme-button" className="flex items-center justify-center rounded-md cursor-pointer" onClick={toggleTheme}>

                    {/* darkmod button */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-6 sun-icon`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 moon-icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>

</div>
  )
}
