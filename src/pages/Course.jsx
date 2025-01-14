import React from 'react'
import { ThreeDot } from 'react-loading-indicators';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function Course() {
    const courseData = useSelector((state) => state.course.data);
    const courseStatus = useSelector((state) => state.course.status);
    const navigate = useNavigate()
    const handleCourseClick = (course_id) => {
        navigate(`/register`, { state: { course_id } });
    }
  return (
    <>
    {courseStatus === 'loading' &&
              <div className="flex justify-center items-center pt-20 min-h-screen">
              <ThreeDot
                variant="bounce"
                color="#ff0000"
                size="large"
                text="loading Team Page"
                textColor=""
              />
            </div>
    }
    <section className='pt-32 min-h-screen'>
        <h1 className='text-4xl text-center'>Course</h1>
        <div className='p-8 '>
            <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2  gap-8'>
                {courseData.map((course) => (
                <div onClick={() => handleCourseClick(course.id)} key={course.id} className=' overflow-hidden relative h-96 cursor-pointer group transition-all w-full shadow-lg rounded-lg drop-shadow-lg'>
                    <img className='w-full h-full object-cover absolute' src={course.thumbnail_url} alt="" />
                    <div className=' text-white overflow-hidden absolute group-hover:bg-theme bg-opacity-35 w-full h-full justify-center items-center flex flex-col transition-all duration-500 ease-linear bottom-0 p-4'>
                        <h3 className='text-5xl'>{course.name}</h3>
                        <p>{course.description}</p>
                        <q>{course.price} tk</q>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </section>
    </>
  )
}
