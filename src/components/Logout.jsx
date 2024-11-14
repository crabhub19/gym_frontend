import React, { useEffect } from 'react'
// LogoutButton.js
import { useDispatch } from 'react-redux';
import { logoutUser } from '../features/account/accountSlice';
import { useNavigate } from 'react-router-dom';
export default function Logout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // Dispatch the logout action
    dispatch(logoutUser());
    // Redirect to login page or home page after logout
    useEffect(() => {     
        navigate('/login'); // Or navigate('/') to go to home page
    })
  return (
    <></>
  )
}
