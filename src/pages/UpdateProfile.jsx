import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  updateUserProfile,
  deleteUserProfile,
  updateProfileData,
} from "../features/profile/profileSlice";
import { changePassword } from "../features/user/userSlice";
import DeleteModal from "../components/DeleteModal";
import profilePicture from "../assets/image/builtIn/profile_picture.png";
import { toast } from "sonner";
import ChangePasswordModal from "../components/ChangePasswordModal";
import { Mosaic } from "react-loading-indicators";
export default function UpdateProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //fetch profile
  const userProfileStatus  = useSelector((state) => state.profile.status);


  //update profile Data
  const userProfile = useSelector((state) => state.profile.data);
  const [profileData, setProfileData] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    bio: "",
    about: "",
    age: "",
    weight: "",
    height: "",
    address: "",
    gender:"",
    profile_picture_url: null, // to handle fetching
    profile_picture: null, // to handle file input
    uploaded_profile_picture: null, // to handle upload file input
  });
  useEffect(() => {
    const storedProfileData = localStorage.getItem("profileData");
    if (storedProfileData) {
      setProfileData(JSON.parse(storedProfileData));
    }
  },[])
  useEffect(() => {
    if (userProfile) {
      setProfileData({
        first_name: userProfile?.account?.user?.first_name || "",
        last_name: userProfile?.account?.user?.last_name || "",
        phone_number: userProfile?.account?.phone_number || "",
        bio: userProfile?.bio || "",
        about: userProfile?.about || "",
        age: userProfile?.age || "",
        weight: userProfile?.weight || "",
        height: userProfile?.height || "",
        address: userProfile?.address || "",
        gender: userProfile?.gender || "",
        profile_picture_url: userProfile?.profile_picture_url || null,
        profile_picture: userProfile?.profile_picture || null,
      });
    }
  }, [userProfile]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedProfileData = { ...profileData, [name]: value };
    setProfileData(updatedProfileData);
    localStorage.setItem("profileData", JSON.stringify(updatedProfileData));
  };

  // Handle file input change (for profile picture)
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfileData({
      ...profileData,
      profile_picture: file,
      uploaded_profile_picture: URL.createObjectURL(file),
    });
  };

  // Handle form submission to update the profile
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Prepare form data to be sent to the backend (including the profile picture)
      const formData = new FormData();
      // Nest account > user fields
      formData.append("account.user.first_name", profileData.first_name);
      formData.append("account.user.last_name", profileData.last_name);
      formData.append("account.phone_number", profileData.phone_number);

      // Add other fields
      formData.append("bio", profileData.bio);
      formData.append("about", profileData.about);
      formData.append("age", profileData.age);
      formData.append("weight", profileData.weight);
      formData.append("height", profileData.height);
      formData.append("address", profileData.address);
      formData.append("gender", profileData.gender);

      // Optionally append profile picture
      if (profileData.profile_picture) {
        formData.append("profile_picture", profileData.profile_picture);
      }
      const updatedProfileData = { 
        account: {
          user: {
            first_name: profileData.first_name,
            last_name: profileData.last_name,
          },
          phone_number: profileData.phone_number,
        },
        bio: profileData.bio,
        about: profileData.about,
        age: profileData.age,
        weight: profileData.weight,
        height: profileData.height,
        address: profileData.address,
        gender: profileData.gender,
        uploaded_profile_picture: profileData.uploaded_profile_picture,
        // Add other fields as needed
      };

      // Dispatch the updateUserProfile action with the form data
      navigate("/profile");
      toast.success("Profile updated successfully");
      await dispatch(updateProfileData(updatedProfileData));
      await dispatch(updateUserProfile(formData));
    } catch (error) {
      toast.error("Error updating profile");
    }
  };

  //delete user profile
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const handleDelete = async (e) => {
    e.preventDefault();
    setDeleteModalOpen(false);
    await dispatch(deleteUserProfile());
    dispatch(logoutUser());
    navigate("/");
  };






  //change password funtion
  const [changePasswordModalOpen, setChangePasswordModalOpen] = useState(false);
  const [oldPassword, setOldPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const changePasswordStatus = useSelector((state) => state.user.status);
  const [changePasswordData, setChangePasswordData] = useState({
    old_password: "",
    new_password: "",
    confirm_password: "",
  });
  const handleChangePasswordOnChange = (e) => {
    const { name, value } = e.target;
    setChangePasswordData({ ...changePasswordData, [name]: value });
  }
  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (changePasswordData.new_password !== changePasswordData.confirm_password) {
      toast.error("Passwords do not match");
      setConfirmPassword(true);
      setOldPassword(false);
      return;
    }
    dispatch(changePassword(changePasswordData)).then((action) => {
      if (changePassword.fulfilled.match(action)) {
        setChangePasswordData({
          old_password: "",
          new_password: "",
          confirm_password: "",
        });
        setChangePasswordModalOpen(false);
        toast.success("Password changed successfully");
      } else if (changePassword.rejected.match(action)) {
        if (action.payload.target === "old_password") {
          setOldPassword(true);
          setConfirmPassword(false);
        }
        const errorMessage = action.payload?.detail || "An error occurred";
        toast.error(errorMessage);
      }
    })
  }

  return (
    <>
      <DeleteModal
        deleteModalOpen={deleteModalOpen}
        setDeleteModalOpen={setDeleteModalOpen}
        handleDelete={handleDelete}
      />
      <ChangePasswordModal
        changePasswordModalOpen={changePasswordModalOpen}
        setChangePasswordModalOpen={setChangePasswordModalOpen}
        handleChangePasswordOnChange={handleChangePasswordOnChange}
        handleChangePassword={handleChangePassword}
        oldPassword={oldPassword}
        confirmPassword={confirmPassword}
        changePasswordStatus={changePasswordStatus}
      />
      {userProfileStatus === "loading" ? (
      <section className='h-screen w-full flex justify-center items-center'>
      <Mosaic color={["#c20505", "#343a40", "#ff1313", "#d3dce6"]} size="large" text="fetching..."/>
      </section>
    ):(
      <>
      <section className="pt-32 lg:px-12 px-4 md:px-8">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row md:justify-between justify-center items-center mb-5 md:items-start">
              <h2 data-aos="fade-right" className="mt-10 md:mb-0 mb-5 tracking-wide md:text-7xl text-5xl font-oswald  font-bold dark:dark-text-stroke text-stroke">
                Update Profile
              </h2>
              <div className="text-center">
                <div className="">
                  <img data-aos="zoom-in"
                    src={
                      profileData?.uploaded_profile_picture
                        ? profileData.uploaded_profile_picture
                        : profileData?.profile_picture_url
                        ? profileData.profile_picture_url
                        : profilePicture
                    }
                    alt="Profile Picture"
                    className="rounded-full w-32 h-32 object-cover hover:scale-105 cursor-pointer border-4 border-gray dark:border-white hover:border-none"
                  />
                  <input
                    type="file"
                    name="profile"
                    id="upload_profile"
                    onChange={handleFileChange}
                    hidden
                  />
                  <label
                    htmlFor="upload_profile"
                    className="inline-flex items-center cursor-pointer pt-2"
                  >
                    <svg
                      data-slot="icon"
                      className="w-8 h-8 hover:scale-110 hover:text-theme"
                      fill="none"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                      ></path>
                    </svg>
                  </label>
                </div>
              </div>
            </div>

            <div>
              <div>
                <h3 className="text-3xl font-bold">Personal Information</h3>
                <div className="flex w-full">
                  <div className="flex flex-wrap w-full justify-center md:justify-normal">
                    <div
                      className="md:p-2 relative w-full md:w-1/2 lg:w-1/3"
                      data-aos="flip-right"
                    >
                      <label
                        htmlFor="first_name"
                        className="block text-sm font-lato"
                      >
                        First Name
                      </label>
                      <input
                        id="first_name"
                        className={`border p-3 dark:bg-dark dark:text-gray-light  dark:border-gray-dark shadow-md placeholder:text-base focus:scale-105 border-gray-light rounded-lg w-full outline-none pl-12`}
                        type="text"
                        placeholder="First Name"
                        name="first_name"
                        value={profileData.first_name}
                        onChange={handleChange}
                        required
                      />
                      <div className="absolute md:left-2 left-0 top-5 inset-y-0 flex items-center">
                        <svg
                          className="h-10 w-10 ml-1 p-1 dark:text-white text-dark"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <g id="User / User_Card_ID">
                            <path
                              id="Vector"
                              d="M6 18C6.06366 18 6.12926 18 6.19691 18H12M6 18C5.01173 17.9992 4.49334 17.9868 4.0918 17.7822C3.71547 17.5905 3.40973 17.2837 3.21799 16.9074C3 16.4796 3 15.9203 3 14.8002V9.2002C3 8.08009 3 7.51962 3.21799 7.0918C3.40973 6.71547 3.71547 6.40973 4.0918 6.21799C4.51962 6 5.08009 6 6.2002 6H17.8002C18.9203 6 19.4796 6 19.9074 6.21799C20.2837 6.40973 20.5905 6.71547 20.7822 7.0918C21 7.5192 21 8.07899 21 9.19691V14.8031C21 15.921 21 16.48 20.7822 16.9074C20.5905 17.2837 20.2837 17.5905 19.9074 17.7822C19.48 18 18.921 18 17.8031 18H12M6 18C6.00004 16.8954 7.34317 16 9 16C10.6569 16 12 16.8954 12 18M6 18C6 18 6 17.9999 6 18ZM18 14H14M18 11H15M9 13C7.89543 13 7 12.1046 7 11C7 9.89543 7.89543 9 9 9C10.1046 9 11 9.89543 11 11C11 12.1046 10.1046 13 9 13Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div
                      className="md:p-2 relative w-full md:w-1/2 lg:w-1/3"
                      data-aos="flip-right"
                      data-aos-delay="200"
                    >
                      <label
                        htmlFor="last_name"
                        className="block text-sm font-lato"
                      >
                        Last Name
                      </label>
                      <input
                        id="last_name"
                        className="border p-3 dark:bg-dark dark:text-gray-light  dark:border-gray-dark shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-light rounded-lg w-full outline-none pl-12"
                        type="text"
                        placeholder="Last Name"
                        name="last_name"
                        value={profileData.last_name}
                        onChange={handleChange}
                      />
                      <div className="absolute md:left-2 left-0 top-5 inset-y-0 flex items-center">
                        <svg
                          className="h-10 w-10 ml-1 p-1 dark:text-white text-dark"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <g id="User / User_Card_ID">
                            <path
                              id="Vector"
                              d="M6 18C6.06366 18 6.12926 18 6.19691 18H12M6 18C5.01173 17.9992 4.49334 17.9868 4.0918 17.7822C3.71547 17.5905 3.40973 17.2837 3.21799 16.9074C3 16.4796 3 15.9203 3 14.8002V9.2002C3 8.08009 3 7.51962 3.21799 7.0918C3.40973 6.71547 3.71547 6.40973 4.0918 6.21799C4.51962 6 5.08009 6 6.2002 6H17.8002C18.9203 6 19.4796 6 19.9074 6.21799C20.2837 6.40973 20.5905 6.71547 20.7822 7.0918C21 7.5192 21 8.07899 21 9.19691V14.8031C21 15.921 21 16.48 20.7822 16.9074C20.5905 17.2837 20.2837 17.5905 19.9074 17.7822C19.48 18 18.921 18 17.8031 18H12M6 18C6.00004 16.8954 7.34317 16 9 16C10.6569 16 12 16.8954 12 18M6 18C6 18 6 17.9999 6 18ZM18 14H14M18 11H15M9 13C7.89543 13 7 12.1046 7 11C7 9.89543 7.89543 9 9 9C10.1046 9 11 9.89543 11 11C11 12.1046 10.1046 13 9 13Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div
                      className="md:p-2 relative w-full md:w-1/2 lg:w-1/3"
                      data-aos="flip-right"
                      data-aos-delay="300"
                    >
                      <label htmlFor="name" className="block text-sm font-lato">
                        Contract Number
                      </label>
                      <input
                        id="phone_number"
                        className={`border p-3 dark:bg-dark dark:text-gray-light  dark:border-gray-dark shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-light rounded-lg w-full outline-none pl-12 `}
                        type="tel"
                        placeholder="Contract Number"
                        name="phone_number"
                        value={profileData.phone_number}
                        onChange={handleChange}
                        required
                      />
                      <div className="absolute md:left-2 left-0 top-5 inset-y-0 flex items-center">
                        <svg
                          className="h-8 w-8 ml-2 p-1 dark:text-white text-dark"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          version="1.1"
                          id="_x32_"
                          viewBox="0 0 512 512"
                          xmlSpace="preserve"
                        >
                          <g>
                            <path
                              className="st0"
                              d="M500.177,55.798c0,0-21.735-7.434-39.551-11.967C411.686,31.369,308.824,24.727,256,24.727   S100.314,31.369,51.374,43.831c-17.816,4.534-39.551,11.967-39.551,11.967c-7.542,2.28-12.444,9.524-11.76,17.374l8.507,97.835   c0.757,8.596,7.957,15.201,16.581,15.201h84.787c8.506,0,15.643-6.416,16.553-14.878l4.28-39.973   c0.847-7.93,7.2-14.138,15.148-14.815c0,0,68.484-6.182,110.081-6.182c41.586,0,110.08,6.182,110.08,6.182   c7.949,0.676,14.302,6.885,15.148,14.815l4.29,39.973c0.9,8.462,8.038,14.878,16.545,14.878h84.777   c8.632,0,15.832-6.605,16.589-15.201l8.507-97.835C512.621,65.322,507.72,58.078,500.177,55.798z"
                            />
                            <path
                              className="st0"
                              d="M357.503,136.629h-55.365v46.137h-92.275v-46.137h-55.365c0,0-9.228,119.957-119.957,207.618   c0,32.296,0,129.95,0,129.95c0,7.218,5.857,13.076,13.075,13.076h416.768c7.218,0,13.076-5.858,13.076-13.076   c0,0,0-97.654,0-129.95C366.73,256.586,357.503,136.629,357.503,136.629z M338.768,391.42v37.406h-37.396V391.42H338.768z    M338.768,332.27v37.406h-37.396V332.27H338.768z M301.372,310.518v-37.396h37.396v37.396H301.372z M274.698,391.42v37.406h-37.396   V391.42H274.698z M274.698,332.27v37.406h-37.396V332.27H274.698z M274.698,273.122v37.396h-37.396v-37.396H274.698z    M210.629,391.42v37.406h-37.397V391.42H210.629z M210.629,332.27v37.406h-37.397V332.27H210.629z M210.629,273.122v37.396h-37.397   v-37.396H210.629z"
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap justify-center">
                <div
                  className="md:p-2 relative w-full md:w-1/2"
                  data-aos="flip-right"
                >
                  <label htmlFor="bio" className="block text-sm font-lato">
                    Bio
                  </label>
                  <input
                    id="bio"
                    className={`border p-3 dark:bg-dark dark:text-gray-light  dark:border-gray-dark shadow-md placeholder:text-base focus:scale-105 border-gray-light rounded-lg w-full outline-none`}
                    type="text"
                    placeholder="Bio"
                    name="bio"
                    value={profileData.bio}
                    onChange={handleChange}
                  />
                </div>
                <div
                  className="md:p-2 relative w-full md:w-1/2"
                  data-aos="flip-right"
                >
                  <label htmlFor="address" className="block text-sm font-lato">
                    Address
                  </label>
                  <input
                    id="address"
                    className={`border p-3 dark:bg-dark dark:text-gray-light  dark:border-gray-dark shadow-md placeholder:text-base focus:scale-105 border-gray-light rounded-lg w-full outline-none pl-12`}
                    type="text"
                    placeholder="Address"
                    name="address"
                    value={profileData.address}
                    onChange={handleChange}
                  />
                  <div className="absolute md:left-2 left-0 top-5 inset-y-0 flex items-center">
                    <svg
                      className="h-8 w-8 ml-2 p-1 dark:text-white text-dark"
                      viewBox="0 0 1024 1024"
                      fill="currentColor"
                      version="1.1"
                    >
                      <path d="M512 1012.8c-253.6 0-511.2-54.4-511.2-158.4 0-92.8 198.4-131.2 283.2-143.2h3.2c12 0 22.4 8.8 24 20.8 0.8 6.4-0.8 12.8-4.8 17.6-4 4.8-9.6 8.8-16 9.6-176.8 25.6-242.4 72-242.4 96 0 44.8 180.8 110.4 463.2 110.4s463.2-65.6 463.2-110.4c0-24-66.4-70.4-244.8-96-6.4-0.8-12-4-16-9.6-4-4.8-5.6-11.2-4.8-17.6 1.6-12 12-20.8 24-20.8h3.2c85.6 12 285.6 50.4 285.6 143.2 0.8 103.2-256 158.4-509.6 158.4z m-16.8-169.6c-12-11.2-288.8-272.8-288.8-529.6 0-168 136.8-304.8 304.8-304.8S816 145.6 816 313.6c0 249.6-276.8 517.6-288.8 528.8l-16 16-16-15.2zM512 56.8c-141.6 0-256.8 115.2-256.8 256.8 0 200.8 196 416 256.8 477.6 61.6-63.2 257.6-282.4 257.6-477.6C768.8 172.8 653.6 56.8 512 56.8z m0 392.8c-80 0-144.8-64.8-144.8-144.8S432 160 512 160c80 0 144.8 64.8 144.8 144.8 0 80-64.8 144.8-144.8 144.8zM512 208c-53.6 0-96.8 43.2-96.8 96.8S458.4 401.6 512 401.6c53.6 0 96.8-43.2 96.8-96.8S564.8 208 512 208z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="lg:p-2">
                <label htmlFor="about" className="block text-sm font-lato">
                  About
                </label>
                <textarea
                  rows={4}
                  name="about"
                  id="about"
                  value={profileData?.about}
                  onChange={handleChange}
                  className="border p-3 dark:bg-dark dark:text-gray-light  dark:border-gray-dark shadow-md placeholder:text-base focus:scale-105 border-gray-light rounded-lg w-full outline-none"
                >
                  {profileData?.about}
                </textarea>
              </div>
              <div>
                <h3 className="text-3xl font-bold py-2">Body Metrics</h3>
                <div className="flex flex-wrap justify-between md:justify-start  pb-2">
                  <div className="lg:p-2 w-24">
                    <label htmlFor="height" className="block text-sm font-lato">
                      Height
                    </label>
                    <input
                      id="height"
                      className={`border p-3 dark:bg-dark dark:text-gray-light  dark:border-gray-dark shadow-md placeholder:text-base focus:scale-105 border-gray-light rounded-lg w-full outline-none`}
                      type="text"
                      placeholder="5.8 Feet"
                      name="height"
                      value={profileData?.height}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="lg:p-2 w-24">
                    <label htmlFor="weight" className="block text-sm font-lato">
                      Weight
                    </label>
                    <input
                      id="weight"
                      className={`border p-3 dark:bg-dark dark:text-gray-light  dark:border-gray-dark shadow-md placeholder:text-base focus:scale-105 border-gray-light rounded-lg w-full outline-none`}
                      type="text"
                      placeholder="68 KG"
                      name="weight"
                      value={profileData?.weight}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="lg:p-2 w-24">
                    <label htmlFor="age" className="block text-sm font-lato">
                      Age
                    </label>
                    <input
                      id="age"
                      className={`border p-3 dark:bg-dark dark:text-gray-light  dark:border-gray-dark shadow-md placeholder:text-base focus:scale-105 border-gray-light rounded-lg w-full outline-none`}
                      type="text"
                      placeholder="23 Years"
                      name="age"
                      value={profileData?.age}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="lg:p-2">
                    <label className="block text-sm font-lato">
                      Gender
                    </label>
                    <div className="flex gap-2 dark:bg-dark dark:text-gray-light dark:border-gray-dark p-3 rounded-lg items-center shadow-md drop-shadow-md">
                    <div className="flex">
                    <input
                      className={``}
                      type="radio"
                      placeholder="male"
                      name="gender"
                      value="male"
                      checked={profileData?.gender === "male"}

                      onChange={handleChange}
                    />Male
                    </div>
                    <div className="flex">
                    <input
                      
                      className={``}
                      type="radio"
                      name="gender"
                      value="female"
                      checked={profileData?.gender === "female"}
                      onChange={handleChange}
                    />Female
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-4 space-x-2">
            <button
              className="border-2  border-blue hover:bg-blue px-6 py-2 rounded-lg text-blue hover:text-white"
              type="submit"
            >
              Update
            </button>
            <button type="button" onClick={() => navigate(-1)} className="border-2  dark:border-white hover:bg-theme px-6 py-2 rounded-lg hover:text-white">
              Cancel
            </button>
          </div>
        </form>

        <div className="py-6 ">
          <h1 className=" mb-5 tracking-widest md:text-7xl text-5xl font-oswald  font-bold dark:dark-text-stroke text-stroke">
            Security
          </h1>
          <div className="flex gap-4">
            {/* change password */}
            <button
              onClick={() => setChangePasswordModalOpen(true)}
              className="mt-4 bg-blue border-2 border-blue hover:border-dark hover:dark:border-white px-6 py-2 rounded-sm hover:bg-dark
          text-white dark:hover:text-dark dark:hover:bg-white flex w-fit"
            >
              <span>
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <g id="Change_password">
                    <path d="M464.4326,147.54a9.8985,9.8985,0,0,0-17.56,9.1406,214.2638,214.2638,0,0,1-38.7686,251.42c-83.8564,83.8476-220.3154,83.874-304.207-.0088a9.8957,9.8957,0,0,0-16.8926,7.0049v56.9a9.8965,9.8965,0,0,0,19.793,0v-34.55A234.9509,234.9509,0,0,0,464.4326,147.54Z" />

                    <path d="M103.8965,103.9022c83.8828-83.874,220.3418-83.8652,304.207-.0088a9.8906,9.8906,0,0,0,16.8926-6.9961v-56.9a9.8965,9.8965,0,0,0-19.793,0v34.55C313.0234-1.3556,176.0547,3.7509,89.9043,89.9012A233.9561,233.9561,0,0,0,47.5674,364.454a9.8985,9.8985,0,0,0,17.56-9.1406A214.2485,214.2485,0,0,1,103.8965,103.9022Z" />

                    <path d="M126.4009,254.5555v109.44a27.08,27.08,0,0,0,27,27H358.5991a27.077,27.077,0,0,0,27-27v-109.44a27.0777,27.0777,0,0,0-27-27H153.4009A27.0805,27.0805,0,0,0,126.4009,254.5555ZM328,288.13a21.1465,21.1465,0,1,1-21.1465,21.1464A21.1667,21.1667,0,0,1,328,288.13Zm-72,0a21.1465,21.1465,0,1,1-21.1465,21.1464A21.1667,21.1667,0,0,1,256,288.13Zm-72,0a21.1465,21.1465,0,1,1-21.1465,21.1464A21.1667,21.1667,0,0,1,184,288.13Z" />

                    <path d="M343.6533,207.756V171.7538a87.6533,87.6533,0,0,0-175.3066,0V207.756H188.14V171.7538a67.86,67.86,0,0,1,135.7208,0V207.756Z" />
                  </g>
                </svg>
              </span>
              <span>Change Password</span>
            </button>

            {/* delete modal */}
            <button
              onClick={() => setDeleteModalOpen(true)}
              className="mt-4 bg-red border-2 border-red hover:border-dark hover:dark:border-white px-6 py-2 rounded-sm hover:bg-dark
          text-white dark:hover:text-dark dark:hover:bg-white flex w-fit"
            >
              <span>
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M10 12V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 12V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 7H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>Delete Account</span>
            </button>
          </div>
        </div>
      </section>
      </>
      )}
    </>
  );
}
