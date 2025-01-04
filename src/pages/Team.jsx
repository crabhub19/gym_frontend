import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAnotherUserProfile, fetchAllProfile } from "../features/profile/allProfileSlice";
import { useDispatch, useSelector } from "react-redux";
import profilePicture from "../assets/image/builtIn/profile_picture.png";
import { BlinkBlur, ThreeDot } from "react-loading-indicators";
import CardOfTeam from "./CardOfTeam";
import InfiniteScroll from "react-infinite-scroll-component";
export default function Team() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    status: allProfileStatus,
    data: allProfile,
    next: allProfileNext,
    count: allProfileCount,
  } = useSelector((state) => state.allProfile);

  const loadMoreProfiles = async () => {
    console.log("enter");
    
    if (allProfileNext) {
      const nextPage = new URL(allProfileNext).searchParams.get("page");
      await dispatch(fetchAllProfile(nextPage));
    }
  };
  const handleAnotherUserProfile = async (id) => {
    dispatch(fetchAnotherUserProfile(id));
    navigate("anotherUserProfile");
  };

  return (
    <>
      <section className="min-h-screen w-full pt-28 px-2 md:px-12 lg:px-20">
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
        {(allProfileStatus === "loading" && allProfileCount === 0) ? (
          <div className="flex justify-center items-center pt-20">
            <ThreeDot
              variant="bounce"
              color="#ff0000"
              size="large"
              text="loading Team Page"
              textColor=""
            />
          </div>
        ):(
          <>


          <InfiniteScroll
            dataLength={allProfile.length}
            next={loadMoreProfiles}
            hasMore={!!allProfileNext}
            loader={
              <div className="flex justify-center items-center py-4">
                <BlinkBlur color="#c20505" size="large" text="Loading..." />
              </div>
            }
            scrollThreshold={.1}
            endMessage={
              <p className="text-center mt-5">
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
        {allProfile?.filter((profile) => profile?.account?.role === "member").length > 0 && (
          
        <div>
            <h3 data-aos="fade-up" className="text-4xl font-bold text-center mb-8">Managers</h3>
        <hr className="w-full mb-8" />
        <div className="overflow-hidden grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 sm:pt-0 sm:pb-8 py-8">
              {allProfile?.filter((profile) => profile?.account?.role === "manager")?.map((profile) => (
                <CardOfTeam
                  key={profile.id}
                  profile={profile}
                  handleAnotherUserProfile={handleAnotherUserProfile}
                  profilePicture={profilePicture}
                />
              ))}
            </div>
        </div>
        )}
        { allProfile?.filter((profile) => profile?.account?.role === "trainer").length > 0 && (
        <div>
            <h3 data-aos="fade-up" className="text-4xl font-bold text-center mb-8">Trainers</h3>
        <hr className="w-full mb-8" />
        <div className="overflow-hidden grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 sm:pt-0 sm:pb-8 py-8">
              {allProfile?.filter((profile) => profile?.account?.role === "trainer")?.map((profile) => (
                <CardOfTeam
                  key={profile.id}
                  profile={profile}
                  handleAnotherUserProfile={handleAnotherUserProfile}
                  profilePicture={profilePicture}
                />
              ))}
            </div>
        </div>
        )}
        {allProfile?.filter((profile) => profile?.account?.role === "member").length > 0 && (
        <div>  
            <h3 data-aos="fade-up" className="text-4xl font-bold text-center mb-8">Members</h3>
        <hr className="w-full mb-8" />
        <div className="overflow-hidden grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 sm:pt-0 sm:pb-8 py-8">
              {allProfile?.filter((profile) => profile?.account?.role === "member")?.map((profile) => (
                <CardOfTeam
                  key={profile.id}
                  profile={profile}
                  handleAnotherUserProfile={handleAnotherUserProfile}
                  profilePicture={profilePicture}
                />
              ))}
          </div>
        </div>
        )}
          </InfiniteScroll>;
          {allProfileNext && <button onClick={loadMoreProfiles} className='block mx-auto bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-2 px-4 rounded'>Load More</button>}
          </>
        )}
      </section>
    </>
  );
}
