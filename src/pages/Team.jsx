import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAnotherUserProfile } from "../features/profile/allProfileSlice";
import { useDispatch, useSelector } from "react-redux";
import profilePicture from "../assets/image/builtIn/profile_picture.png";
import { ThreeDot } from "react-loading-indicators";
export default function Team() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allProfile = useSelector((state) => state.allProfile.data);
  const allProfileStatus = useSelector((state) => state.allProfile.status);


  const managers = allProfile.filter(
    (profile) => profile?.account?.role === "manager"
  );
  const trainers = allProfile.filter(
    (profile) => profile?.account?.role === "trainer"
  );
  const members = allProfile.filter(
    (profile) => profile?.account?.role === "member"
  );


  const handleAnotherUserProfile = async (id) => {
    dispatch(fetchAnotherUserProfile(id));
    navigate("anotherUserProfile");
  };

  return (
    <>
      <section className="min-h-screen pt-28 px-2 md:px-12 lg:px-20">
        <div className="mx-auto p-4 pb-0 max-w-screen-sm lg:mb-16">
          <h2
            data-aos="fade-down"
            className="mb-4 text-5xl lg:text-7xl tracking-tight text-stroke font-extrabold text-center dark:dark-text-stroke"
          >
            Meet The Team
          </h2>
          <p data-aos="fade-up" className="font-light sm:text-xl text-center">
            Explore the whole team members of gym
          </p>
        </div>
        {allProfileStatus === "loading" && (
          <div className="flex justify-center items-center pt-20">
            <ThreeDot
              variant="bounce"
              color="#ff0000"
              size="large"
              text="loading Team Page"
              textColor=""
            />
          </div>
        )}
        
        {managers?.length !== 0 && (
          <div>
            <h3 data-aos="fade-up" className="text-4xl font-bold text-center mb-8">Managers</h3>
        <hr className="w-full mb-8" />
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 sm:pt-0 sm:pb-8 py-8">
          {managers?.map((profile) => (
            <div
              onClick={() => handleAnotherUserProfile(profile.id)}
              data-aos="fade-up"
              key={profile.id}
              className="relative w-full h-96 overflow-hidden hover:cursor-pointer rounded-md shadow-2xl hover:drop-shadow-2xl group"
            >
              <img
                className="w-full h-full object-cover group-hover:scale-125"
                src={
                  profile?.profile_picture_url
                    ? profile.profile_picture_url
                    : profilePicture
                }
                alt=""
              />
              <div className="absolute bottom-0 p-2 w-full cursor-default bg-white dark:bg-dark">
                <h5 className="text-center  font-extrabold font-chococooky  text-2xl tracking-wide">
                  {profile?.account?.user?.first_name}{" "}
                  {profile?.account?.user?.last_name}
                </h5>
                <p className=" text-center font-bold ">
                  {profile?.account?.role}
                </p>
                {profile?.bio && (
                  <p className=" font-extralight text-sm ">
                    bio : {profile?.bio}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
          </div>
        )}
        {trainers?.length !== 0 && (
          <div>
            <h3 data-aos="fade-up" className="text-4xl font-bold text-center mb-8">Trainers</h3>
        <hr className="w-full mb-8" />
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 sm:pt-0 sm:pb-8 py-8">
          {trainers?.map((profile) => (
            <div
              onClick={() => handleAnotherUserProfile(profile.id)}
              data-aos="fade-up"
              key={profile.id}
              className="relative w-full h-96 overflow-hidden hover:cursor-pointer rounded-md shadow-2xl hover:drop-shadow-2xl group"
            >
              <img
                className="w-full h-full object-cover group-hover:scale-125"
                src={
                  profile?.profile_picture_url
                    ? profile.profile_picture_url
                    : profilePicture
                }
                alt=""
              />
              <div className="absolute bottom-0 p-2 w-full cursor-default bg-white dark:bg-dark">
                <h5 className="text-center  font-extrabold font-chococooky  text-2xl tracking-wide">
                  {profile?.account?.user?.first_name}{" "}
                  {profile?.account?.user?.last_name}
                </h5>
                <p className=" text-center font-bold ">
                  {profile?.account?.role}
                </p>
                {profile?.bio && (
                  <p className=" font-extralight text-sm ">
                    bio : {profile?.bio}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
          </div>
        )}
        {members?.length !== 0 && (
          <div>
            <h3 data-aos="fade-up" className="text-4xl font-bold text-center mb-8">Members</h3>
        <hr className="w-full mb-8" />
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 sm:pt-0 sm:pb-8 py-8">
          {members?.map((profile) => (
            <div
              onClick={() => handleAnotherUserProfile(profile.id)}
              data-aos="fade-up"
              key={profile.id}
              className="relative w-full h-96 overflow-hidden hover:cursor-pointer rounded-md shadow-2xl hover:drop-shadow-2xl group"
            >
              <img
                className="w-full h-full object-cover group-hover:scale-125"
                src={
                  profile?.profile_picture_url
                    ? profile.profile_picture_url
                    : profilePicture
                }
                alt=""
              />
              <div className="absolute bottom-0 p-2 w-full cursor-default bg-white dark:bg-dark">
                <h5 className="text-center  font-extrabold font-chococooky  text-2xl tracking-wide">
                  {profile?.account?.user?.first_name}{" "}
                  {profile?.account?.user?.last_name}
                </h5>
                <p className=" text-center font-bold ">
                  {profile?.account?.role}
                </p>
                {profile?.bio && (
                  <p className=" font-extralight text-sm ">
                    bio : {profile?.bio}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
          </div>
        )}
      </section>
    </>
  );
}
