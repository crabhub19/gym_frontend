import React from 'react'
// import { HeartIcon } from '@heroicons/react/24/outline'
import { HeartIcon } from '@heroicons/react/16/solid'
export default function Explore() {
  return (
    <>
        <section className='min-h-[300vh] pt-32'>
            <div className='w-full lg:w-10/12 shadow-lg block lg:flex flex-col lg:flex-row mx-auto my-10'>
                <div className='flex-1 flex lg:flex-col items-center px-4 py-2 md:justify-center'>
                    <img className='w-12 h-12 lg:w-24 lg:h-24 object-cover rounded-full' src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                    <h1 className='text-3xl ml-2'>Profile Name</h1>
                    <q className='hidden lg:block'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero illum maxime dolor nostrum!</q>
                </div>

                <div className='flex-none lg:max-w-sm'>
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                </div>
                <div className='flex-1 p-2 flex flex-col justify-between'>
                    <div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero illum maxime dolor nostrum! Expedita officiis maxime nostrum sed mollitia officia laboriosam illum, magnam repudiandae dolorum rerum totam? Vel, ea optio.</p>
                    </div>
                    <div>
                      <hr className='mt-4'/>
                      <div className='flex'>
                        <HeartIcon className='w-12 h-12 hover:scale-110 cursor-pointer'/>
                      </div>
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-10/12 shadow-lg block lg:flex flex-col lg:flex-row mx-auto my-10'>
                <div className='flex-1 flex lg:flex-col items-center px-4 py-2 md:justify-center'>
                    <img className='w-12 h-12 lg:w-24 lg:h-24 object-cover rounded-full' src="https://unsplash.com/photos/8--kuxbxuKU/download?force=true&w=640" alt="" />
                    <h1 className='text-3xl ml-2'>Profile Name</h1>
                    <q className='hidden lg:block'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero illum maxime dolor nostrum!</q>
                </div>

                <div className='flex-none lg:max-w-sm'>
                    <img src="https://unsplash.com/photos/8--kuxbxuKU/download?force=true&w=640" alt="" />
                </div>
                <div className='flex-1 p-2 flex flex-col justify-between'>
                    <div className=''>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero illum maxime dolor nostrum! Expedita officiis maxime nostrum sed mollitia officia laboriosam illum, magnam repudiandae dolorum rerum totam? Vel, ea optio.</p>
                    </div>
                    <div>
                      <hr className='mt-4'/>
                      <div className='flex'>
                        <HeartIcon className='w-12 h-12 hover:scale-110 cursor-pointer'/>
                      </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
