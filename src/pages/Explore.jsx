import React,{useEffect} from 'react'
// import { HeartIcon } from '@heroicons/react/24/outline'
import { HeartIcon } from '@heroicons/react/16/solid'
import { useSelector } from 'react-redux'
import { ThreeDot } from 'react-loading-indicators';
import profilePicture from '../assets/image/builtIn/profile_picture.png';
export default function Explore() {
  const postStatus = useSelector((state) => state.post.status);
  const postData = useSelector((state) => state.post.data);
  return (
    <>
        {postStatus === "loading" ? (
          <>
            <section className='h-screen w-full flex justify-center items-center pt-32'>
            <ThreeDot variant="bounce" color="#c20505" size="large" text="loading..."/>
            </section>
          </>
        ):(
          <>
        <section className='min-h-screen pt-32'>
          {postData.map((post) => (
            <div key={post.id} className='w-full lg:w-10/12 shadow-lg block lg:flex flex-col lg:flex-row mx-auto my-10'>
                <div className='flex-1 lg:max-w-sm flex lg:flex-col items-center px-4 py-2 justify-normal lg:justify-center'>
                    <img className='w-12 h-12 lg:w-24 lg:h-24 object-cover rounded-full' src={post.author.profile_picture_url?post.author.profile_picture_url:profilePicture} alt="" />
                    <h1 className='text-3xl ml-2'>{post.author.account.user.first_name}</h1>
                    <q className='hidden lg:block'>{post.author.bio}</q>
                </div>

                {post.post_image_url && (
                <div className=' shrink-0 flex justify-center lg:max-w-sm'>
                  <img className='w-full lg:w-full sm:max-w-sm h-full object-cover' src={post.post_image_url} alt="" />
                </div>
                )}
                <div className='flex-1 p-2 flex flex-col justify-between'>
                    <div>
                      <p>{post.content}</p>
                    </div>
                    <div>
                      <hr className='mt-4'/>
                      <div className='flex'>
                        <HeartIcon className='w-12 h-12 hover:scale-110 cursor-pointer'/>
                        <i className='ml-1 font-RubikWetPaint text-2xl'>{post.like_count}</i>
                      </div>
                    </div>
                </div>
            </div>
          ))}
        </section>
          </>
        )}

    </>
  )
}
