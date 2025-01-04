
import React, { useEffect } from 'react';
import {  useSelector } from 'react-redux';
import profilePicture from '../assets/image/builtIn/profile_picture.png';
import { ThreeDot } from 'react-loading-indicators';
import {ShieldExclamationIcon} from '@heroicons/react/16/solid'
export default function AnotherUserProfile() {
  const allProfileStatus  = useSelector((state) => state.allProfile.status);
  const anotherUserProfileData  = useSelector((state) => state.allProfile.anotherUserProfile);
  const calculateBMI = (weight, heightFeet) => {
    if (!weight || !heightFeet) return null; // Ensure both values are present
    const heightMeters = heightFeet * 0.3048; // Convert feet to meters
    return (weight / (heightMeters ** 2)).toFixed(2); // Calculate BMI
  };
  return (
    <>
    {allProfileStatus === "loading" ? (
      <section className='h-screen w-full flex justify-center items-center'>
      <ThreeDot
              variant="bounce"
              color="#ff0000"
              size="large"
              text="loading..."
              textColor=""
            />
      </section>
    ):(
      
 <div className="min-h-screen flex flex-col pt-28">
    <section id="profile" className="flex-1 flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 py-12  drop-shadow-2xl shadow-md">
      <div className="md:w-1/2">
        <h1 data-aos="zoom-out" className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">{anotherUserProfileData?.account?.user?.first_name} {anotherUserProfileData?.account?.user?.last_name}'s Profile</h1>
        <p data-aos="zoom-out" className="text-lg sm:text-xl md:text-2xl font-medium">
          {anotherUserProfileData?.bio}
        </p>
        <b className='font-extrabold font-lovelo'>{anotherUserProfileData?.account?.role}</b>


      </div>
      <div className="md:w-1/2 flex justify-center items-center mb-6 md:mb-0 relative">
        <img data-aos="flip-right" src={anotherUserProfileData?.uploaded_profile_picture ? anotherUserProfileData?.uploaded_profile_picture : anotherUserProfileData?.profile_picture_url ? anotherUserProfileData.profile_picture_url : profilePicture} alt="Profile Picture" className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-indigo-500 object-cover object-center shadow-2xl"/>
        {!anotherUserProfileData?.account?.active && 
        <ShieldExclamationIcon className='absolute top-0 right-0 w-10 h-10'/>
        }
      </div>
    </section>

    {anotherUserProfileData?.about &&
        <section data-aos="fade-up" id="about" className="px-6 sm:px-10 md:px-16 py-12  shadow-md">
        <h2 className=" text-3xl sm:text-4xl font-semibold mb-6 ">About Me</h2>
        <p className="text-lg sm:text-xl font-medium  ">
          {anotherUserProfileData?.about}
        </p>
      </section>
    }


{(anotherUserProfileData?.age || anotherUserProfileData?.weight || anotherUserProfileData?.height || anotherUserProfileData?.gender) && (
    <section data-aos="fade-up" id="services" className="px-6 sm:px-10 md:px-16 py-12  shadow-md">
      <h2 className=" text-3xl sm:text-4xl font-semibold mb-6">Body Metrics</h2>
      <table className='w-full table-auto'>
        <thead>
          <tr>
            {anotherUserProfileData?.age &&    <th className=' border-r border-b pl-1'>Age</th>}
            {anotherUserProfileData?.weight && <th className=' border-r border-b pl-1'>Weight</th>}
            {anotherUserProfileData?.height && <th className=' border-r border-b pl-1'>Height</th>}
            {(anotherUserProfileData?.height && anotherUserProfileData?.weight) && <th className=' border-r border-b pl-1'>BMI</th>}
            {anotherUserProfileData?.gender && <th className=' pl-1 border-b'>Gender</th>}
          </tr>
        </thead>
        <tbody>
          <tr>
            {anotherUserProfileData?.age &&    <td className='text-center border-r pl-1'>{anotherUserProfileData?.age} Years</td>}
            {anotherUserProfileData?.weight && <td className='text-center border-r pl-1'>{anotherUserProfileData?.weight} KG</td>}
            {anotherUserProfileData?.height && <td className='text-center border-r pl-1'>{anotherUserProfileData?.height} Feet</td>}
            {(anotherUserProfileData?.height && anotherUserProfileData?.weight) && <td className='text-center border-r pl-1'>{calculateBMI(anotherUserProfileData?.weight,anotherUserProfileData?.height)}</td>}
            {anotherUserProfileData?.gender && <td className='text-center pl-1'>{anotherUserProfileData?.gender}</td>}
          </tr>
        </tbody>
      </table>
    </section>
    )}
    
    <section data-aos="fade-up" id="contarctInformation" className="px-6 sm:px-10 md:px-16 py-12 shadow-lg">
      <h2 className=" text-3xl sm:text-4xl font-semibold mb-6">Contract Information</h2>
      <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {anotherUserProfileData?.address && 
                <div className="flex">
                <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>

                    </div>
                </div>
                <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium">
                        Address
                    </dt>
                    <dd className="mt-2 text-base">
                        {anotherUserProfileData.address}
                    </dd>
                </div>
            </div>
              }

              {anotherUserProfileData?.account?.phone_number &&
                <div className="flex">
                    <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>

                        </div>
                    </div>
                    <div className="ml-4">
                        <dt className="text-lg leading-6 font-medium">
                            Contract number
                        </dt>
                        <dd className="mt-2 text-base">
                            {anotherUserProfileData?.account?.phone_number}
                        </dd>
                    </div>
                </div> 
              }

              {anotherUserProfileData?.account?.user?.email &&
                <div className="flex">
                    <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md ">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>

                        </div>
                    </div>
                    <div className="ml-4">
                        <dt className="text-lg leading-6 font-medium">
                            Email
                        </dt>
                        <dd className="mt-2 text-base">
                            {anotherUserProfileData?.account?.user?.email}
                        </dd>
                    </div>
                </div>
              }

            </dl>
        </div>
    </section>

  </div>
    )
    }
    </>
  )
}
