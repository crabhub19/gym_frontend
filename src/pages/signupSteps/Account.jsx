import React from 'react'
export default function Account(props) {
  const {formData,handleChange,email,password,retypePassword} = props
  return (
    <>
    <div className='shadow-2xl drop-shadow-2xl rounded-sm md:max-w-[460px] dark:bg-dark'>
        <h1 className='text-5xl bg-dark dark:bg-white p-3 dark:text-dark text-gray-light font-lato'>Account</h1>
        <div className='p-4 mx-auto'>
            <div className='m-4 relative' data-aos="flip-right" data-aos-delay="100">
              <input
                id="email"
                className={`border p-3 dark:bg-dark dark:text-gray-light  dark:border-gray-dark shadow-md  focus:scale-105 border-gray-light rounded-lg w-full outline-none pl-12 ${email?'':' outline-2  outline-theme'}`}
                type="email"
                placeholder="Email:email@gmail.com"
                onChange={handleChange}
                name='email'
                value={formData.email}
                required
              />
              <div className='absolute left-0 inset-y-0 flex items-center'>
                <svg className='h-8 w-8 ml-1 p-1 dark:text-white text-dark' fill="currentColor" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M12,0A12.013,12.013,0,0,0,0,12c-.125,9.574,11.159,15.429,18.9,9.817a1.5,1.5,0,1,0-1.727-2.453C11.42,23.582,2.863,19.146,3,12,3.472.07,20.529.072,21,12v1.5a1.5,1.5,0,0,1-3,0V12C17.748,4.071,6.251,4.072,6,12a6.017,6.017,0,0,0,10.078,4.388A4.5,4.5,0,0,0,24,13.5V12A12.013,12.013,0,0,0,12,0Zm0,15a3,3,0,0,1,0-6A3,3,0,0,1,12,15Z"/></svg>
              </div>
            </div>
            <div className='m-4 relative' data-aos="flip-right" data-aos-delay="200">
              <input
                id="password"
                className={`border p-3 dark:bg-dark dark:text-gray-light  dark:border-gray-dark shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-light rounded-lg w-full outline-none pl-12 ${password?'':' outline-2  outline-theme'}`}
                type="password"
                placeholder="Password: ****"
                onChange={handleChange}
                name='password'
                minLength={4}
                value={formData.password}
                required
              />
              <div className='absolute left-0 inset-y-0 flex items-center'>
                <svg className='h-10 w-10 ml-1 p-1 dark:text-white text-dark' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M16 8.00169L16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8.00169M16 8.00169C15.7563 8 15.4907 8 15.2 8H8.8C8.50929 8 8.24373 8 8 8.00169M16 8.00169C17.1649 8.00979 17.8313 8.05658 18.362 8.32698C18.9265 8.6146 19.3854 9.07354 19.673 9.63803C20 10.2798 20 11.1198 20 12.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V12.8C4 11.1198 4 10.2798 4.32698 9.63803C4.6146 9.07354 5.07354 8.6146 5.63803 8.32698C6.16873 8.05658 6.83507 8.00979 8 8.00169M10 11V18M14 11V18M8.5 12.5H15.5M8.5 16.5H15.5" strokeWidth="2"  fill='transparent'/>
                </svg>
              </div>
            </div>
            <div className='m-4 relative' data-aos="flip-right" data-aos-delay="300">
              <input
                id="retypePassword"
                className={`border p-3 dark:bg-dark dark:text-gray-light  dark:border-gray-dark shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-light rounded-lg w-full outline-none pl-12 ${retypePassword?'':' outline-2  outline-theme'}`}
                type="password"
                placeholder="Retype_Password: ****"
                onChange={handleChange}
                value={formData.retypePassword}
                name='retypePassword'
                minLength={4}
                required
              />
              <div className='absolute left-0 inset-y-0 flex items-center'>
                <svg className='h-10 w-10 ml-1 p-1 dark:text-white text-dark' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M16 8.00169L16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8.00169M16 8.00169C15.7563 8 15.4907 8 15.2 8H8.8C8.50929 8 8.24373 8 8 8.00169M16 8.00169C17.1649 8.00979 17.8313 8.05658 18.362 8.32698C18.9265 8.6146 19.3854 9.07354 19.673 9.63803C20 10.2798 20 11.1198 20 12.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V12.8C4 11.1198 4 10.2798 4.32698 9.63803C4.6146 9.07354 5.07354 8.6146 5.63803 8.32698C6.16873 8.05658 6.83507 8.00979 8 8.00169M10 11V18M14 11V18M8.5 12.5H15.5M8.5 16.5H15.5" strokeWidth="2"  fill='transparent'/>
                </svg>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}
