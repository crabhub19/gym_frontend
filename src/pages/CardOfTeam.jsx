import React from 'react'

export default function CardOfTeam(props) {
    const { profile, handleAnotherUserProfile, profilePicture } = props;
  return (
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
  )
}
