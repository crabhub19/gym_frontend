import React,{useEffect} from 'react'
import { fetcAllProfile } from '../features/profile/allProfileSlice';
import { useDispatch, useSelector } from 'react-redux';
import profilePicture from '../assets/image/builtIn/profile_picture.png';
export default function Team() {
    const dispatch = useDispatch();
    const allProfile  = useSelector((state) => state.allProfile.data);
    const allProfileStatus  = useSelector((state) => state.allProfile.status);

    useEffect(() => {
        if (allProfileStatus === 'idle'){
          dispatch(fetcAllProfile())
        }
      }, [dispatch,allProfileStatus]);
    
  return (
    <>
      <section className='min-h-screen pt-28 px-2 md:px-12 lg:px-20'>
      <div className="mx-auto p-4 pb-0 max-w-screen-sm lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">Meet The Team</h2>
          <p className="font-light sm:text-xl text-center">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
      </div> 
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 pb-8">
        {allProfile?.map((profile) => (
          <div key={profile.id} className='relative w-full h-96 overflow-hidden rounded-md'>
            <img className='w-full h-full object-cover hover:scale-125' src={profile?.profile_picture_url ? profile.profile_picture_url : profilePicture} alt="" />
            <div className='absolute bottom-0 p-2 w-full cursor-default'>
                <h5 className='text-center text-white font-extrabold font-chococooky mix-blend-difference text-2xl tracking-wide'>{profile?.account?.user?.first_name} {profile?.account?.user?.last_name}</h5>
                <p className='text-center text-white font-bold mix-blend-difference'>{profile?.account?.role}</p>
                {profile?.bio && (
                  <p className=' text-white font-extralight text-sm mix-blend-difference'>bio : {profile?.bio}</p>
                )}
            </div>
        </div>
        ))}
      </div>
      </section>
    </>
  )
}
