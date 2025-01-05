
import React, { useEffect } from 'react';
import {  useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AnotherUserProfileItems from './AnotherUserProfileItems';
import { refresh } from 'aos';
export default function AnotherUserProfile() {
    const {
      anotherUserProfile: anotherUserProfileData,
    } = useSelector((state) => state.allProfile); 
  const postUserProfileData = useSelector((state) => state.post.postUserProfile);

  
  const navigate = useNavigate();
  useEffect(() => {
    if (!anotherUserProfileData && !postUserProfileData) {
      navigate(-1);
    }
  }, []);
  return (
    <>
    {anotherUserProfileData?
      <AnotherUserProfileItems profileData={anotherUserProfileData}/>
      :
      <AnotherUserProfileItems profileData={postUserProfileData}/>
    }
    </>
  )
}
