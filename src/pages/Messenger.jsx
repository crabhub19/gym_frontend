import React from 'react'

export default function Messenger() {
  return (
    <>
      <section className='h-screen w-full flex pt-32'>

    <div className="flex-1 flex flex-col">
        <main className="flex-grow flex flex-row">
            <section className="flex flex-col flex-none overflow-auto md:w-sm w-full group transition-all duration-300 ease-in-out">
                <div className="search-box p-4 flex-none">
                    <form>
                        <div className="relative">
                            <label>
                                <input className="rounded-full py-2 pr-6 pl-10 w-full border border-gray-800 focus:border-gray bg-white dark:bg-dark focus:bg-gray focus:outline-none focus:shadow-md transition duration-300 ease-in"
                                       type="text" name="search" placeholder="Search Messenger"/>
                                <span className="absolute top-0 left-0 mt-2 ml-3 inline-block">
                                    <svg viewBox="0 0 24 24" className="w-6 h-6">
                                        <path fill="#bbb"
                                              d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/>
                                    </svg>
                                </span>
                            </label>
                        </div>
                    </form>
                </div>
                <div className="contacts p-2 flex-1 overflow-y-scroll">
                    <div className="flex justify-between items-center p-3 hover:bg-gray rounded-lg relative">
                        <div className="w-16 h-16 relative flex flex-shrink-0">
                            <img className="shadow-md rounded-full w-full h-full object-cover"
                                 src="https://randomuser.me/api/portraits/women/61.jpg"
                                 alt=""
                            />
                        </div>
                        <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                            <p>Angelina Jolie</p>
                            <div className="flex items-center text-sm text-gray-600">
                                <div className="min-w-0">
                                    <p className="truncate">Ok, see you at the subway in a bit.</p>
                                </div>
                                <p className="ml-2 whitespace-no-wrap">Just now</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
                        <div className="w-16 h-16 relative flex flex-shrink-0">
                            <img className="shadow-md rounded-full w-full h-full object-cover"
                                 src="https://randomuser.me/api/portraits/men/97.jpg"
                                 alt=""
                            />
                            <div className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
                                <div className="bg-green-500 rounded-full w-3 h-3"></div>
                            </div>
                        </div>
                        <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                            <p className="font-bold">Tony Stark</p>
                            <div className="flex items-center text-sm font-bold">
                                <div className="min-w-0">
                                    <p className="truncate">Hey, Are you there?</p>
                                </div>
                                <p className="ml-2 whitespace-no-wrap">10min</p>
                            </div>
                        </div>
                        <div className="bg-blue w-3 h-3 rounded-full flex flex-shrink-0 md:block group-hover:block"></div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800 rounded-lg relative">
                        <div className="w-16 h-16 relative flex flex-shrink-0">
                            <img className="shadow-md rounded-full w-full h-full object-cover"
                                 src="https://randomuser.me/api/portraits/women/33.jpg"
                                 alt=""
                            />
                        </div>
                        <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                            <p>Scarlett Johansson</p>
                            <div className="flex items-center text-sm text-gray-600">
                                <div className="min-w-0">
                                    <p className="truncate">You sent a photo.</p>
                                </div>
                                <p className="ml-2 whitespace-no-wrap">1h</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
                        <div className="w-16 h-16 relative flex flex-shrink-0">
                            <img className="shadow-md rounded-full w-full h-full object-cover"
                                 src="https://randomuser.me/api/portraits/men/12.jpg"
                                 alt=""
                            />
                        </div>
                        <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                            <p>John Snow</p>
                            <div className="flex items-center text-sm text-gray-600">
                                <div className="min-w-0">
                                    <p className="truncate">You missed a call John.
                                    </p>
                                </div>
                                <p className="ml-2 whitespace-no-wrap">4h</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
                        <div className="w-16 h-16 relative flex flex-shrink-0">
                            <img className="shadow-md rounded-full w-full h-full object-cover"
                                 src="https://randomuser.me/api/portraits/women/23.jpg"
                                 alt="User2"
                            />
                        </div>
                        <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                            <p>Emma Watson</p>
                            <div className="flex items-center text-sm text-gray-600">
                                <div className="min-w-0">
                                    <p className="truncate">You sent a video.
                                    </p>
                                </div>
                                <p className="ml-2 whitespace-no-wrap">11 Feb</p>
                            </div>
                        </div>
                        <div className="w-4 h-4 flex flex-shrink-0 md:block group-hover:block">
                            <img className="rounded-full w-full h-full object-cover" alt="user2"
                                 src="https://randomuser.me/api/portraits/women/23.jpg"/>
                        </div>
                    </div>
                    <div className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
                        <div className="w-16 h-16 relative flex flex-shrink-0">
                            <img className="shadow-md rounded-full w-full h-full object-cover"
                                 src="https://randomuser.me/api/portraits/women/87.jpg"
                                 alt="User2"
                            />
                            <div className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
                                <div className="bg-green-500 rounded-full w-3 h-3"></div>
                            </div>
                        </div>
                        <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                            <p>Sunny Leone</p>
                            <div className="flex items-center text-sm text-gray-600">
                                <div className="min-w-0">
                                    <p className="truncate">Ah, it was an awesome one night stand.
                                    </p>
                                </div>
                                <p className="ml-2 whitespace-no-wrap">1 Feb</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
                        <div className="w-16 h-16 relative flex flex-shrink-0">
                            <img className="shadow-md rounded-full w-full h-full object-cover"
                                 src="https://randomuser.me/api/portraits/men/45.jpg"
                                 alt="User2"
                            />
                        </div>
                        <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                            <p>Bruce Lee</p>
                            <div className="flex items-center text-sm text-gray-600">
                                <div className="min-w-0">
                                    <p className="truncate">You are a great human being.
                                    </p>
                                </div>
                                <p className="ml-2 whitespace-no-wrap">23 Jan</p>
                            </div>
                        </div>
                        <div className="w-4 h-4 flex flex-shrink-0 md:block group-hover:block">
                            <img className="rounded-full w-full h-full object-cover" alt="user2"
                                 src="https://randomuser.me/api/portraits/men/45.jpg"/>
                        </div>
                    </div>
                    <div className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
                        <div className="w-16 h-16 relative flex flex-shrink-0">
                            <img className="shadow-md rounded-full w-10 h-10 object-cover absolute ml-6"
                                 src="https://randomuser.me/api/portraits/men/22.jpg"
                                 alt="User2"
                            />
                            <img className="shadow-md rounded-full w-10 h-10 object-cover absolute mt-6"
                                 src="https://randomuser.me/api/portraits/men/55.jpg"
                                 alt="User2"
                            />
                            <div className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
                                <div className="bg-green-500 rounded-full w-3 h-3"></div>
                            </div>
                        </div>
                        <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                            <p>TailwindCSS Group</p>
                            <div className="flex items-center text-sm text-gray-600">
                                <div className="min-w-0">
                                    <p className="truncate">Adam: Hurray, Version 2 is out now!!.
                                    </p>
                                </div>
                                <p className="ml-2 whitespace-no-wrap">23 Jan</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
                        <div className="w-16 h-16 relative flex flex-shrink-0">
                            <img className="shadow-md rounded-full w-full h-full object-cover"
                                 src="https://randomuser.me/api/portraits/men/34.jpg"
                                 alt="User2"
                            />
                        </div>
                        <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                            <p>Will Smith</p>
                            <div className="flex items-center text-sm text-gray-600">
                                <div className="min-w-0">
                                    <p className="truncate">WTF dude!! absofuckingloutely.
                                    </p>
                                </div>
                                <p className="ml-2 whitespace-no-wrap">13 Dec</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
                        <div className="w-16 h-16 relative flex flex-shrink-0">
                            <img className="shadow-md rounded-full w-full h-full object-cover"
                                 src="https://randomuser.me/api/portraits/men/22.jpg"
                                 alt="User2"
                            />
                        </div>
                        <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                            <p>Brad Pitt</p>
                            <div className="flex items-center text-sm text-gray-600">
                                <div className="min-w-0">
                                    <p className="truncate">you called Brad.
                                    </p>
                                </div>
                                <p className="ml-2 whitespace-no-wrap">31 Dec</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
                        <div className="w-16 h-16 relative flex flex-shrink-0">
                            <img className="shadow-md rounded-full w-full h-full object-cover"
                                 src="https://randomuser.me/api/portraits/men/99.jpg"
                                 alt="User2"
                            />
                            <div className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
                                <div className="bg-green-500 rounded-full w-3 h-3"></div>
                            </div>
                        </div>
                        <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                            <p>Tom Hanks</p>
                            <div className="flex items-center text-sm text-gray-600">
                                <div className="min-w-0">
                                    <p className="truncate">Tom called you.
                                    </p>
                                </div>
                                <p className="ml-2 whitespace-no-wrap">31 Dec</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
                        <div className="w-16 h-16 relative flex flex-shrink-0">
                            <img className="shadow-md rounded-full w-full h-full object-cover"
                                 src="https://randomuser.me/api/portraits/men/41.jpg"
                                 alt="User2"
                            />
                        </div>
                        <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                            <p>Dwayne Johnson</p>
                            <div className="flex items-center text-sm text-gray-600">
                                <div className="min-w-0">
                                    <p className="truncate">How can i forget about that man!.
                                    </p>
                                </div>
                                <p className="ml-2 whitespace-no-wrap">12 Nov</p>
                            </div>
                        </div>
                        <div className="w-4 h-4 flex flex-shrink-0 md:block group-hover:block">
                            <img className="rounded-full w-full h-full object-cover" alt="user2"
                                 src="https://randomuser.me/api/portraits/men/41.jpg"/>
                        </div>
                    </div>
                    <div className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
                        <div className="w-16 h-16 relative flex flex-shrink-0">
                            <img className="shadow-md rounded-full w-full h-full object-cover"
                                 src="https://randomuser.me/api/portraits/men/70.jpg"
                                 alt="User2"
                            />
                        </div>
                        <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                            <p>Johnny Depp</p>
                            <div className="flex items-center text-sm text-gray-600">
                                <div className="min-w-0">
                                    <p className="truncate">Alright! let's catchup tomorrow!.
                                    </p>
                                </div>
                                <p className="ml-2 whitespace-no-wrap">4 Nov</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
                        <div className="w-16 h-16 relative flex flex-shrink-0">
                            <img className="shadow-md rounded-full w-full h-full object-cover"
                                 src="https://randomuser.me/api/portraits/men/20.jpg"
                                 alt="User2"
                            />
                            <div className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
                                <div className="bg-green-500 rounded-full w-3 h-3"></div>
                            </div>
                        </div>
                        <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                            <p>Leonardo Dicaprio</p>
                            <div className="flex items-center text-sm text-gray-600">
                                <div className="min-w-0">
                                    <p className="truncate">How can you leave Rose dude. I hate you!
                                    </p>
                                </div>
                                <p className="ml-2 whitespace-no-wrap">26 Oct</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
                        <div className="w-16 h-16 relative flex flex-shrink-0">
                            <img className="shadow-md rounded-full w-full h-full object-cover"
                                 src="https://randomuser.me/api/portraits/men/32.jpg"
                                 alt="User2"
                            />
                        </div>
                        <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                            <p>Tom Cruise</p>
                            <div className="flex items-center text-sm text-gray-600">
                                <div className="min-w-0">
                                    <p className="truncate">Happy birthday to you my friend!
                                    </p>
                                </div>
                                <p className="ml-2 whitespace-no-wrap">2 Oct</p>
                            </div>
                        </div>
                        <div className="w-4 h-4 flex flex-shrink-0 md:block group-hover:block">
                            <img className="rounded-full w-full h-full object-cover" alt="user2"
                                 src="https://randomuser.me/api/portraits/men/32.jpg"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="hidden md:flex md:flex-col md:flex-auto border-l">
                <div className="chat-header px-6 py-4 flex flex-row flex-none justify-between items-center shadow">
                    <div className="flex">
                        <div className="w-12 h-12 mr-4 relative flex flex-shrink-0">
                            <img className="shadow-md rounded-full w-full h-full object-cover"
                                 src="https://randomuser.me/api/portraits/women/33.jpg"
                                 alt=""
                            />
                        </div>
                        <div className="text-sm">
                            <p className="font-bold">Scarlett Johansson</p>
                            <p>Active 1h ago</p>
                        </div>
                    </div>

                </div>
                <div className="chat-body p-4 flex-1 overflow-y-scroll">
                    <div className="flex flex-row justify-start">
                        <div className="w-8 h-8 relative flex flex-shrink-0 mr-4">
                            <img className="shadow-md rounded-full w-full h-full object-cover"
                                 src="https://randomuser.me/api/portraits/women/33.jpg"
                                 alt=""
                            />
                        </div>
                        <div className="messages text-sm text-gray-700 grid grid-flow-row gap-2">
                            <div className="flex items-center group">
                                <p className="px-6 py-3 rounded-t-full rounded-r-full bg-gray-800 max-w-xs lg:max-w-md text-gray-200">Hey! How are you?</p>
                                
                            </div>
                            <div className="flex items-center group">
                                <p className="px-6 py-3 rounded-r-full bg-gray-800 max-w-xs lg:max-w-md text-gray-200">Shall we go for Hiking this weekend?</p>
                                
                            </div>
                            <div className="flex items-center group">
                                <p className="px-6 py-3 rounded-b-full rounded-r-full bg-gray-800 max-w-xs lg:max-w-md text-gray-200">Lorem ipsum
                                    dolor sit
                                    amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.</p>
                                
                            </div>
                        </div>
                    </div>
                    <p className="p-4 text-center text-sm text-gray-500">FRI 3:04 PM</p>
                    <div className="flex flex-row justify-end">
                        <div className="messages text-sm text-white grid grid-flow-row gap-2">
                            <div className="flex items-center flex-row-reverse group">
                                <p className="px-6 py-3 rounded-t-full rounded-l-full bg-blue-700 max-w-xs lg:max-w-md">Hey! How are you?</p>
                                
                            </div>
                            <div className="flex items-center flex-row-reverse group">
                                <p className="px-6 py-3 rounded-l-full bg-blue-700 max-w-xs lg:max-w-md">Shall we go for Hiking this weekend?</p>
                                
                            </div>
                            <div className="flex items-center flex-row-reverse group">
                                <p className="px-6 py-3 rounded-b-full rounded-l-full bg-blue-700 max-w-xs lg:max-w-md">Lorem ipsum
                                    dolor sit
                                    amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.</p>
                                
                            </div>
                        </div>
                    </div>
                    <p className="p-4 text-center text-sm text-gray-500">SAT 2:10 PM</p>
                    <div className="flex flex-row justify-start">
                        <div className="w-8 h-8 relative flex flex-shrink-0 mr-4">
                            <img className="shadow-md rounded-full w-full h-full object-cover"
                                 src="https://randomuser.me/api/portraits/women/33.jpg"
                                 alt=""
                            />
                        </div>
                        <div className="messages text-sm text-gray-700 grid grid-flow-row gap-2">
                            <div className="flex items-center group">
                                <p className="px-6 py-3 rounded-t-full rounded-r-full bg-gray-800 max-w-xs lg:max-w-md text-gray-200">Hey! How are you?</p>
                                
                            </div>
                            <div className="flex items-center group">
                                <p className="px-6 py-3 rounded-r-full bg-gray-800 max-w-xs lg:max-w-md text-gray-200">Shall we go for Hiking this weekend?</p>
                                
                            </div>
                            <div className="flex items-center group">
                                <p className="px-6 py-3 rounded-b-full rounded-r-full bg-gray-800 max-w-xs lg:max-w-md text-gray-200">Lorem ipsum
                                    dolor sit
                                    amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.</p>
                                
                            </div>
                        </div>
                    </div>
                    <p className="p-4 text-center text-sm text-gray-500">12:40 PM</p>
                    <div className="flex flex-row justify-end">
                        <div className="messages text-sm text-white grid grid-flow-row gap-2">
                            <div className="flex items-center flex-row-reverse group">
                                <p className="px-6 py-3 rounded-t-full rounded-l-full bg-blue-700 max-w-xs lg:max-w-md">Hey! How are you?</p>
                                
                            </div>
                            <div className="flex items-center flex-row-reverse group">
                                <p className="px-6 py-3 rounded-l-full bg-blue-700 max-w-xs lg:max-w-md">Shall we go for Hiking this weekend?</p>
                                
                            </div>
                            <div className="flex items-center flex-row-reverse group">
                                <a className="block w-64 h-64 relative flex-shrink-0 max-w-xs lg:max-w-md" href="#">
                                    <img className="absolute shadow-md w-full h-full rounded-l-lg object-cover" src="https://unsplash.com/photos/8--kuxbxuKU/download?force=true&w=640" alt="hiking"/>
                                </a>
                                
                            </div>
                            <div className="flex items-center flex-row-reverse group">
                                <p className="px-6 py-3 rounded-b-full rounded-l-full bg-blue-700 max-w-xs lg:max-w-md">Lorem ipsum
                                    dolor sit
                                    amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="chat-footer flex-none w-9/12">
                    <div className="flex flex-row items-center p-4">
                        <div className="relative flex-grow">
                            <label>
                                <input className="rounded-full py-2 pl-3 pr-10 w-full border border-dark dark:border-white focus:border-gray focus:bg-gray focus:outline-none focus:shadow-md transition duration-300 ease-in shadow bg-white dark:bg-dark"
                                       type="text" placeholder="Aa"/>
                            </label>
                        <button type="button" className="absolute right-1 shadow py-1 top-1 px-6 rounded-full bg-black text-white">
                            send
                        </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
</div>
      </section>

    </>
  )
}
