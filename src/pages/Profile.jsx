import { NavLink } from 'react-router-dom'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile } from '../features/profile/profileSlice';
import profilePicture from '../assets/image/builtIn/profile_picture.png';
export default function Profile() {
  const dispatch = useDispatch();
  const userProfile  = useSelector((state) => state.profile.data);
  const userProfileStatus  = useSelector((state) => state.profile.status);

  useEffect(() => {
    if (userProfileStatus === 'idle'){
      dispatch(fetchUserProfile())
    }
  }, [dispatch,userProfileStatus]);
  return (
    <>
 <div className="min-h-screen flex flex-col pt-28">
    

    
    <section id="profile" className="flex-1 flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 py-12  drop-shadow-2xl shadow-md">
      <div className="md:w-1/2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">{userProfile?.account?.user?.first_name} {userProfile?.account?.user?.last_name}'s Profile</h1>
        <p className="text-lg sm:text-xl md:text-2xl font-medium">
          {userProfile?.bio}
        </p>
        <NavLink to="update-profile" className='mt-4 border-2 border-dark dark:border-white px-6 py-2 rounded-sm hover:bg-dark
        hover:text-white dark:hover:text-dark dark:hover:bg-white flex w-fit'><span><svg className='w-6 h-6 mr-2' fill='currentColor' xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"><path d="M9,12c3.309,0,6-2.691,6-6S12.309,0,9,0,3,2.691,3,6s2.691,6,6,6Zm0-10c2.206,0,4,1.794,4,4s-1.794,4-4,4-4-1.794-4-4,1.794-4,4-4Zm14.122,9.879c-1.134-1.134-3.11-1.134-4.243,0l-7.879,7.878v4.243h4.243l7.878-7.878c.567-.567,.879-1.32,.879-2.122s-.312-1.555-.878-2.121Zm-1.415,2.828l-7.292,7.293h-1.415v-1.415l7.293-7.292c.377-.378,1.036-.378,1.414,0,.189,.188,.293,.439,.293,.707s-.104,.518-.293,.707Zm-9.778,1.293H5c-1.654,0-3,1.346-3,3v5H0v-5c0-2.757,2.243-5,5-5H13c.289,0,.568,.038,.844,.085l-1.915,1.915Z"/></svg></span><span>UPDATE</span></NavLink>
      </div>
      <div className="md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
        <img src={userProfile?.profile_picture_url ? userProfile.profile_picture_url : profilePicture} alt="Profile Picture" className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-indigo-500 object-cover object-center shadow-2xl"/>
      </div>
    </section>

    {userProfile?.about &&
        <section id="about" className="px-6 sm:px-10 md:px-16 py-12  shadow-md">
        <h2 className=" text-3xl sm:text-4xl font-semibold mb-6 ">About Me</h2>
        <p className="text-lg sm:text-xl font-medium  ">
          {userProfile?.about}
        </p>
      </section>
    }


  {(userProfile?.age || userProfile?.weight || userProfile?.height) && (
    <section id="services" className="px-6 sm:px-10 md:px-16 py-12  shadow-md">
      <h2 className=" text-3xl sm:text-4xl font-semibold mb-6">Body Metrics</h2>
      <table className='min-w-full table-auto mx-auto text-center'>
        <thead>
          <tr>
            {userProfile?.age && <th>Age</th>}
            {userProfile?.weight && <th>Weight</th>}
            {userProfile?.height && <th>Height</th>}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{userProfile?.age}</td>
            <td>{userProfile?.weight}</td>
            <td>{userProfile?.height}</td>
          </tr>
        </tbody>
      </table>
    </section>
    )}
    
    <section id="projects" className="px-6 sm:px-10 md:px-16 py-12 shadow-lg">
      <h2 className=" text-3xl sm:text-4xl font-semibold mb-6">Contract Information</h2>
      <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {userProfile?.address && 
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
                        {userProfile.address}
                    </dd>
                </div>
            </div>
              }

              {userProfile?.account?.phone_number &&
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
                            {userProfile?.account?.phone_number}
                        </dd>
                    </div>
                </div> 
              }

              {userProfile?.account?.user?.email &&
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
                            {userProfile?.account?.user?.email}
                        </dd>
                    </div>
                </div>
              }

            </dl>
        </div>
    </section>

  </div>
    </>
  )
}
