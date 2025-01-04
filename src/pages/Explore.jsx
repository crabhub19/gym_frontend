import React,{useEffect} from 'react'
// import { HeartIcon } from '@heroicons/react/24/outline'
import { HeartIcon } from '@heroicons/react/16/solid';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BlinkBlur } from 'react-loading-indicators';
import { addOrRemovePostLike } from '../features/post/postLikeSlice';
import { updatePostLikeStatus,fetchPosts } from '../features/post/postSlice';
import { fetchAnotherUserProfile } from '../features/profile/allProfileSlice';
import InfiniteScroll from 'react-infinite-scroll-component';
import profilePicture from '../assets/image/builtIn/profile_picture.png';
export default function Explore() {
  // const postStatus = useSelector((state) => state.post.status);
  // const postData = useSelector((state) => state.post.data);
  const {status:postStatus, data:postData,next:postNext,count:postCount} = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loadMorePosts = async() => {
    if (postNext) {
      const nextPage = new URL(postNext).searchParams.get('page');
      await dispatch(fetchPosts(nextPage));
      
    }
  };
  const postLikeHandle = async(postId) => {
    await dispatch(updatePostLikeStatus(postId));
    await dispatch(addOrRemovePostLike(postId));
  };

  // const handleAnotherUserProfile = async (id) => {
  //   dispatch(fetchAnotherUserProfile(id));
  //   navigate("/team/anotherUserProfile");
  // };
  return (
    <>
      {postStatus === "loading" && postCount === 0 ? (
        <section className='h-screen w-full flex justify-center items-center'>
        <BlinkBlur color={["#c20505", "#343a40", "#ff1313", "#d3dce6"]} size="large" text="fetching..."/>
        </section>
      ):(
        <>
        <section className='min-h-screen pt-32'>
        <InfiniteScroll
      dataLength={postData.length} // This is the length of the posts loaded so far
      next={loadMorePosts} // Function to load more data
      hasMore={!!postNext} // Boolean indicating whether more data is available
      scrollThreshold={.1} // Trigger next fetch when 50% scrolled
      loader={
        <div className="flex justify-center items-center py-4">
          <BlinkBlur color="#c20505" size="large" text="Loading..." />
        </div>
      }
      endMessage={
        <p className='text-center mt-5'>
          <b>No more posts to show!</b>
        </p>
      }
    >
          {postData.map((post) => (
            <div key={post.id} className='w-full lg:w-10/12 shadow-lg block lg:flex flex-col lg:flex-row mx-auto my-10'>
                <div className='flex-1 lg:max-w-sm flex lg:flex-col items-center px-4 py-2 justify-between lg:justify-center'>
                    <img className='w-12 h-12 lg:w-24 lg:h-24 object-cover rounded-full cursor-pointer' src={post.author.profile_picture_url?post.author.profile_picture_url:profilePicture} alt="" />
                    <h1 className='text-3xl ml-2'>{post.author.account.user.first_name}</h1>
                    <p className=''>{new Date(post.created_at).toISOString().split('T')[0]}</p>
                    {post.author.account.role === "trainer" || post.author.account.role === "manager"
                       && (<p className='hidden lg:block'>{post.author.account.role}</p>)}
                </div>

                {post.post_image_url && (
                <div className=' shrink-0 flex justify-center lg:max-w-sm overflow-hidden max-h-[600px]'>
                  <img className='w-full min-w-96  lg:w-full sm:max-w-sm  object-center object-cover cursor-pointer' src={post.post_image_url} alt="" />
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
