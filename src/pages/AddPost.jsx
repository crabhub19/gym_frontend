import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addPost } from '../features/post/postSlice'
export default function AddPost() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [post, setPost] = useState({content:"",post_image:null,uploaded_post_image:null});
  const handleChange = (e) => {
    setPost({...post,[e.target.name]:e.target.value});
  }
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPost({
      ...post,
      [e.target.name]:e.target.files[0],
      uploaded_post_image: URL.createObjectURL(file),
    });
  }
  const handleAddPost = async (e) => {
    e.preventDefault();
    try{
      let postData;
      if (post.post_image){
        const formData = new FormData();
        formData.append("content", post.content);
        formData.append("post_image", post.post_image);
        postData = formData;
      }else{
          // If there's no image, send JSON
        postData = {
          content: post.content,
        };
      }

      const config = post.post_image
      ? { headers: { "content-type": ''}} // No need to manually set headers; browser sets 'Content-Type'
      : { headers: { "Content-Type": "application/json" } };
      navigate("/explore");
      await dispatch(addPost({postData,config}));
      setPost({content:"",post_image:null,uploaded_post_image:null});
    }catch(e){
      console.log(e);
    }
  }
  return (
    <>
    <section className='min-h-screen px-2 sm:px-0 flex items-center justify-center pt-32'> 
  <form onSubmit={handleAddPost} className="w-full md:max-w-screen-lg mx-auto">
      <div className="rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
            <div className="">
                <p className="font-medium text-3xl">Post Yourself</p>
                <p>Please fill out all the fields.</p>
            </div>

            <div className="lg:col-span-2">
                <div className="">
                    <label  className="uppercase text-sm font-bold" htmlFor='content'>Description</label>
                    <textarea data-aos="flip-right" id='content' name="content" rows={4} placeholder="Type your content here..." onChange={handleChange}
                    className={`border p-3 dark:bg-dark dark:text-gray-light  dark:border-gray-dark shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-light rounded-sm w-full outline-none relative`}></textarea>
                </div>
                
                <div className="flex items-center justify-center w-full">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray border-dashed cursor-pointer hover:bg-gray-dark dark:border-gray dark:hover:border-gray dark:hover:bg-gray overflow-hidden relative group">
                        <div>
                            <img className=' object-cover object-center' src={post.uploaded_post_image} alt="" />
                        </div>
                        <div className="flex flex-col items-center justify-center pt-5 pb-6 px-2 absolute backdrop-blur-sm bg-white dark:bg-dark bg-opacity-50 dark:bg-opacity-50 group-hover:bg-opacity-100">
                            <svg className="w-8 h-8 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                            </svg>
                            <p className="mb-2 text-sm"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs">PNG, JPG</p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" name='post_image' onChange={handleFileChange}/>
                    </label>
                </div> 

            </div>
              <div className="lg:col-span-5 text-right">
                <div className="inline-flex items-end">
                  <button type='submit' className="bg-blue text-white font-bold py-2 px-4 rounded">Post</button>
                </div>
              </div>
          </div>
      </div>
  </form>
    </section>
    </>
  )
}
