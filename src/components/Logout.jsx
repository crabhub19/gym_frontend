import React, { useEffect, useState } from 'react'
// LogoutButton.js
import { useDispatch } from 'react-redux';
import { logoutUser } from '../features/account/accountSlice';
import { useNavigate } from 'react-router-dom';
import LogoutModal from './LogoutModal';
export default function Logout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [logoutModalOpen, setLogoutModalOpen] = useState(true);
    useEffect(() => {
      if(!logoutModalOpen){
        navigate('/');
    }},[logoutModalOpen])
    const handleLogout = () => {
    // Dispatch the logout action
    dispatch(logoutUser());
    // Redirect to login page or home page after logout   
    navigate('/login'); // Or navigate('/') to go to home page
    }
  return (
    <div className='flex justify-center items-center h-screen'>
      <LogoutModal logoutModalOpen={logoutModalOpen} setLogoutModalOpen={setLogoutModalOpen} handleLogout={handleLogout}/>
    </div>
  )
}
