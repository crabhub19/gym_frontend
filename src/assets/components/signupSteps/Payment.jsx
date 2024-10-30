import React, { useState } from "react";

export default function Payment() {
  const [expandedDivs, setExpandedDivs] = useState(1);

  // Function to toggle the expansion for a specific div
  const toggleExpand = (id) => {
    setExpandedDivs(id);
  };
  return (
    <div className="shadow-2xl drop-shadow-2xl rounded-sm dark:border md:max-w-[460px]">
      <h1 className="text-5xl bg-dark dark:bg-white p-3 dark:text-dark text-gray-light font-lato">
        Payment
      </h1>
      <div className="px-4 flex min-h-28 relative font-lato">
        {/* Button 1 and Div 1 */}
        <div className="">
          <button
            onClick={() => toggleExpand(1)}
            className="px-4 py-2 hover:bg-black dark:hover:bg-white border-r-2 border-dark dark:border-white"
          >
            <img
              className="h-8"
              src="https://th.bing.com/th?id=OIP.C-uJDyVtwmkmqVS3vAPvvAHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
              alt=""
            />
          </button>
          {expandedDivs === 1 && (
            <div className="absolute left-0 w-full">
              <table className="w-full mx-auto border-collapse">
                <thead>
                  <tr className="bg-dark text-white">
                    <th>Method</th>
                    <th>Type</th>
                    <th>Number</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center font-bold">
                    <td>bkash</td>
                    <td>Agent</td>
                    <td>01703055918</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
        <div className="">
          <button
            onClick={() => toggleExpand(2)}
            className="px-4 py-2  rounded hover:bg-blue-700"
          >
            <img
              className="h-8"
              src="https://www.logo.wine/a/logo/Nagad/Nagad-Logo.wine.svg"
              alt=""
            />
          </button>
          {expandedDivs === 2 && (
            <div className="absolute left-0 w-full">
              <table className="w-full mx-auto border-collapse">
                <thead>
                  <tr className="bg-dark text-white">
                    <th>Method</th>
                    <th>Type</th>
                    <th>Number</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center font-bold">
                    <td>Nagad</td>
                    <td>Agent</td>
                    <td>01703055918</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
        <div className="">
          <button
            onClick={() => toggleExpand(3)}
            className="px-4 py-2  rounded hover:bg-blue-700"
          >
            <img
              className="h-8"
              src="https://www.logo.wine/a/logo/BKash/BKash-bKash-Logo.wine.svg"
              alt=""
            />
          </button>
          {expandedDivs === 3 && (
            <div className="absolute left-0 w-full">
              <table className="w-full mx-auto border-collapse">
                <thead>
                  <tr className="bg-dark text-white">
                    <th>Method</th>
                    <th>Type</th>
                    <th>Number</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center font-bold">
                    <td>Rocket</td>
                    <td>Agent</td>
                    <td>01703055918</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      <div className="px-4 mx-auto">
        <div className="m-4 relative">
          <input
            id="tel"
            className="border p-3 dark:bg-dark dark:text-gray-light  dark:border-gray-dark shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-light rounded-lg w-full outline-none pl-12"
            type="tel"
            placeholder="Tel: 01739362582"
            required
          />
          <div className="absolute left-1 inset-y-0 flex items-center">
            <svg
              className="h-8 w-8 ml-1 p-1 dark:text-white text-dark"
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M11.675,9.046c.38,.388,.38,1.008,0,1.397l-2.925,2.997h.001l-.004,.004c-.744,.744-2.058,.746-2.823-.019l-1.515-1.575c-.372-.387-.372-.999,0-1.386,.393-.408,1.047-.409,1.44,0l1.496,1.553,2.899-2.971c.392-.402,1.038-.402,1.43,0h0Zm12.325-1.546v6c0,2.481-2.019,4.5-4.5,4.5h-3.5v1c0,2.5-2.342,5-5,5H5c-2.761,0-5-2.239-5-5V5.5C0,2.467,2.468,0,5.5,0h5c2.132,0,3.98,1.222,4.893,3h4.107c2.481,0,4.5,2.019,4.5,4.5Zm-14,13.5c0-.552-.448-1-1-1h-2c-.552,0-1,.448-1,1s.448,1,1,1h2c.552,0,1-.448,1-1Zm3-15.5c0-1.378-1.121-2.5-2.5-2.5H5.5c-1.379,0-2.5,1.122-2.5,2.5v12.5H13V5.5Zm8,5.5h-5v4h3.5c.827,0,1.5-.673,1.5-1.5v-2.5Zm0-3.5c0-.827-.673-1.5-1.5-1.5h-3.5v2h5v-.5Z" />
            </svg>
          </div>
        </div>
        <div className="m-4 relative">
          <input
            id="transactionID"
            className="border p-3 dark:bg-dark dark:text-gray-light  dark:border-gray-dark shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-light rounded-lg w-full outline-none pl-12"
            type="text"
            placeholder="Transaction ID: 17c34ds1"
            required
          />
          <div className="absolute left-1 inset-y-0 flex items-center">
            <svg
              className="h-8 w-8 ml-1 p-1 dark:text-white text-dark"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="currentColor"
              version="1.1"
              id="Capa_1"
              viewBox="0 0 560.209 560.209"
              xml:space="preserve"
            >
              <g>
                <g>
                  <polygon points="141.449,241.854 390.074,241.854 390.074,174.917 141.449,174.917 141.449,124.351 0,206.014 141.449,287.678       " />
                  <polygon points="170.136,385.292 418.762,385.292 418.762,435.858 560.209,354.194 418.762,272.531 418.762,318.354     170.136,318.354   " />
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div className="m-4 relative">
          <input
            id="amount"
            className="border p-3 dark:bg-dark dark:text-gray-light  dark:border-gray-dark shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-light rounded-lg w-full outline-none pl-12"
            type="number"
            placeholder="Amount: Our Join Fee 3000 Taka"
            required
          />
          <div className="absolute left-1 inset-y-0 flex items-center">
            <svg
              className="h-8 w-8 ml-1 p-1 dark:text-white text-dark"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8.5,23a9.069,9.069,0,0,0,3.5-.68,8.92,8.92,0,0,0,3.5.68c3.645,0,6.5-1.945,6.5-4.429V14.429C22,11.945,19.145,10,15.5,10c-.169,0-.335.008-.5.017V5.333C15,2.9,12.145,1,8.5,1S2,2.9,2,5.333V18.667C2,21.1,4.855,23,8.5,23ZM20,18.571C20,19.72,18.152,21,15.5,21S11,19.72,11,18.571v-.925a8.329,8.329,0,0,0,4.5,1.211A8.329,8.329,0,0,0,20,17.646ZM15.5,12c2.652,0,4.5,1.28,4.5,2.429s-1.848,2.428-4.5,2.428S11,15.577,11,14.429,12.848,12,15.5,12Zm-7-9C11.152,3,13,4.23,13,5.333S11.152,7.667,8.5,7.667,4,6.437,4,5.333,5.848,3,8.5,3ZM4,8.482A8.466,8.466,0,0,0,8.5,9.667,8.466,8.466,0,0,0,13,8.482V10.33a6.47,6.47,0,0,0-2.9,1.607,7.694,7.694,0,0,1-1.6.174c-2.652,0-4.5-1.23-4.5-2.333Zm0,4.445a8.475,8.475,0,0,0,4.5,1.184c.178,0,.35-.022.525-.031A3.1,3.1,0,0,0,9,14.429v2.085c-.168.01-.33.042-.5.042-2.652,0-4.5-1.23-4.5-2.334Zm0,4.444a8.466,8.466,0,0,0,4.5,1.185c.168,0,.333-.013.5-.021v.036a3.466,3.466,0,0,0,.919,2.293A7.839,7.839,0,0,1,8.5,21C5.848,21,4,19.77,4,18.667Z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="px-4 text-center pb-4">
        <blockquote className="font-oswald">
          <b>Note: </b>Our Join Fee is 3000 Taka. And we charge 900 Taka per
          month.
        </blockquote>
      </div>
    </div>
  );
}
