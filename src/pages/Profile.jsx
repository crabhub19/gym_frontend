import { Link } from 'react-router-dom'
import React, { useEffect } from 'react';
import profilePicture from '../assets/image/builtIn/profile_picture.png';
import { Mosaic, BlinkBlur } from 'react-loading-indicators';
import { HeartIcon,ShieldExclamationIcon,TrashIcon } from '@heroicons/react/16/solid'
import { useSelector, useDispatch } from 'react-redux'
import { addOrRemovePostLike } from '../features/post/postLikeSlice';
import { updateUserPostLikeStatus } from '../features/post/userPostSlice';
import { fetchUserPosts,deleteUserPost,deleteUserPostOptimal } from '../features/post/userPostSlice';

import InfiniteScroll from 'react-infinite-scroll-component';
export default function Profile() {

  const userProfile  = useSelector((state) => state.profile.data);
  const userProfileStatus  = useSelector((state) => state.profile.status);
    const {status:userPostStatus, data:userPostData,next:postNext,count:postCount} = useSelector((state) => state.userPost);
  
  const dispatch = useDispatch();
  const loadMorePosts = async() => {
    if (postNext) {
      const nextPage = new URL(postNext).searchParams.get('page');
      await dispatch(fetchUserPosts(nextPage));
    }
  };
  const handleDeletePost = async(postId) => {
    console.log("deleted",postId);
    
    await dispatch(deleteUserPostOptimal(postId));
    await dispatch(deleteUserPost(postId));
  }
  const postLikeHandle = async(postId) => {
    console.log("liked",postId);
    
    await dispatch(updateUserPostLikeStatus(postId));
    await dispatch(addOrRemovePostLike(postId));
  };
  return (
    <>
    {userProfileStatus === "loading" ? (
      <>
      <section className='h-screen w-full flex justify-center items-center'>
      <Mosaic color={["#c20505", "#343a40", "#ff1313", "#d3dce6"]} size="large" text="fetching..."/>
      </section>
      </>
    ):(
      <>
       <div className="min-h-screen flex flex-col pt-28">
    <section id="profile" className="flex-1 flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 py-12  drop-shadow-2xl shadow-md">
      <div className="md:w-1/2">
        <h1 data-aos="zoom-out" className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">{userProfile?.account?.user?.first_name} {userProfile?.account?.user?.last_name}'s Profile</h1>
        <p data-aos="zoom-out" className="text-lg sm:text-xl md:text-2xl font-medium">
          {userProfile?.bio}
        </p>
        <b className='font-extrabold font-lovelo'>{userProfile?.account?.role}</b>
        <div data-aos="zoom-out" className='flex gap-4 mt-4'>
          <Link to="update-profile" className='mt-4 border-2 border-dark dark:border-white px-6 py-2 rounded-sm hover:bg-dark hover:text-white dark:hover:bg-white dark:hover:text-dark flex w-fit'><span><svg className='w-6 h-6 mr-2' fill='currentColor' id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"><path d="M9,12c3.309,0,6-2.691,6-6S12.309,0,9,0,3,2.691,3,6s2.691,6,6,6Zm0-10c2.206,0,4,1.794,4,4s-1.794,4-4,4-4-1.794-4-4,1.794-4,4-4Zm14.122,9.879c-1.134-1.134-3.11-1.134-4.243,0l-7.879,7.878v4.243h4.243l7.878-7.878c.567-.567,.879-1.32,.879-2.122s-.312-1.555-.878-2.121Zm-1.415,2.828l-7.292,7.293h-1.415v-1.415l7.293-7.292c.377-.378,1.036-.378,1.414,0,.189,.188,.293,.439,.293,.707s-.104,.518-.293,.707Zm-9.778,1.293H5c-1.654,0-3,1.346-3,3v5H0v-5c0-2.757,2.243-5,5-5H13c.289,0,.568,.038,.844,.085l-1.915,1.915Z"/></svg></span><span>EDIT</span></Link>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center items-center mb-6 md:mb-0 relative">
        <img data-aos="flip-right" src={userProfile?.uploaded_profile_picture ? userProfile?.uploaded_profile_picture : userProfile?.profile_picture_url ? userProfile.profile_picture_url : profilePicture} alt="Profile Picture" className="w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover object-center shadow-2xl"/>
        {!userProfile?.account?.active && 
        <ShieldExclamationIcon className='absolute top-0 right-0 w-10 h-10 text-red'/>
        }
      </div>
    </section>

    {userProfile?.about &&
        <section data-aos="fade-up" id="about" className="px-6 sm:px-10 md:px-16 py-12  shadow-md">
        <h2 className=" text-3xl sm:text-4xl font-semibold mb-6 ">About Me</h2>
        <p className="text-lg sm:text-xl font-medium  ">
          {userProfile?.about}
        </p>
      </section>
    }


  {(userProfile?.age || userProfile?.weight || userProfile?.height || userProfile?.gender) && (
    <section data-aos="fade-up" id="services" className="px-6 sm:px-10 md:px-16 py-12  shadow-md">
      <h2 className=" text-3xl sm:text-4xl font-semibold mb-6">Body Metrics</h2>
      <table className='w-full'>
        <thead>
          <tr>
            {userProfile?.age && <th className='text-start'>Age</th>}
            {userProfile?.weight && <th className='text-start'>Weight</th>}
            {userProfile?.height && <th className='text-start'>Height</th>}
            {userProfile?.gender && <th className='text-start'>Gender</th>}
          </tr>
        </thead>
        <tbody>
          <tr>
            {userProfile?.age && <td>{userProfile?.age}</td>}
            {userProfile?.weight && <td>{userProfile?.weight}</td>}
            {userProfile?.height && <td>{userProfile?.height}</td>}
            {userProfile?.gender && <td>{userProfile?.gender}</td>}
          </tr>
        </tbody>
      </table>
    </section>
    )}
    
    <section data-aos="fade-up" id="contarctInformation" className="px-6 sm:px-10 md:px-16 py-12 shadow-lg">
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
    )}
    {userPostStatus === "loading" && postCount === 0 ? (
        <section className='h-screen w-full flex justify-center items-center'>
        <BlinkBlur color={["#c20505", "#343a40", "#ff1313", "#d3dce6"]} size="large" text="fetching..."/>
        </section>
      ):(
        <>
                <section className='min-h-screen pt-32'>
        <InfiniteScroll
      dataLength={userPostData.length} // This is the length of the posts loaded so far
      next={loadMorePosts} // Function to load more data
      hasMore={!!postNext} // Boolean indicating whether more data is available
      scrollThreshold={.1} // Trigger next fetch when 50% scrolled
      loader={
        <div className="flex justify-center items-center py-4">
          <BlinkBlur variant="bounce" color="#c20505" size="large" text="Loading..." />
        </div>
      }
      endMessage={
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          <b>No more posts to show!</b>
        </p>
      }
    >
          {userPostData.map((post) => (
            <div key={post.id} className='w-full lg:w-10/12 shadow-lg block lg:flex flex-col lg:flex-row mx-auto my-10'>
                <div className='flex-1 lg:max-w-sm flex lg:flex-col items-center px-4 py-2 justify-between lg:justify-center'>
                    <img className='w-12 h-12 lg:w-24 lg:h-24 object-cover rounded-full' src={post.author.profile_picture_url?post.author.profile_picture_url:profilePicture} alt="" />
                    <h1 className='text-3xl ml-2'>{post.author.account.user.first_name}</h1>
                    <p className=''>{new Date(post.created_at).toISOString().split('T')[0]}</p>
                    <TrashIcon onClick={() => handleDeletePost(post.id)} className='text-red h-10 w-10 hover:scale-110 cursor-pointer'></TrashIcon>
                </div>

                {post.post_image_url && (
                <div className=' shrink-0 flex justify-center lg:max-w-sm overflow-hidden max-h-[600px]'>
                  <img className='w-full lg:w-full sm:max-w-sm  object-center object-cover' src={post.post_image_url} alt="" />
                </div>
                )}
                <div className='flex-1 p-2 flex flex-col justify-between'>
                    <div>
                      <p>{post.content}</p>
                    </div>
                    <div>
                      <hr className='mt-4'/>
                      <div className='flex'>
                        <HeartIcon onClick={() => postLikeHandle(post.id)} className={`${post.is_liked?"text-red":""} w-12 h-12 hover:scale-110 cursor-pointer`}/>
                        <i className='ml-1 font-RubikWetPaint text-2xl'>{post.like_count}</i>
                      </div>
                    </div>
                </div>
            </div>
          ))}
        </InfiniteScroll>
          {postNext && <button onClick={loadMorePosts} className='block mx-auto bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-2 px-4 rounded'>Load More</button>}
        </section>
        </>
      )}
    </>
  )
}
