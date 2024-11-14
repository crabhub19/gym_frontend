import React from 'react'
import { Mosaic } from "react-loading-indicators";
import { useSelector } from 'react-redux';
export default function Loading() {
  const loading = useSelector((state) => state.loading);
  return (
    loading && (<div className='h-screen fixed top-0 left-0 w-full flex justify-center items-center backdrop-blur-lg'>
      <Mosaic color={["#c20505", "#343a40", "#ff1313", "#d3dce6"]} size="large" text=""/>
    </div>)
  )
}
