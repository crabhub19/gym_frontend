import React from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { LockOpenIcon, LockClosedIcon } from "@heroicons/react/24/outline";
export default function ChangePasswordModal(props) {
  const {
    changePasswordModalOpen,
    setChangePasswordModalOpen,
    handleChangePassword,
    handleChangePasswordOnChange,
    oldPassword={oldPassword},
    confirmPassword={confirmPassword},
    changePasswordStatus={changePasswordStatus},
    
  } = props;
  return (
    <>
      <Dialog
        open={changePasswordModalOpen}
        onClose={setChangePasswordModalOpen}
        className="relative z-10"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />
        <div className="fixed backdrop-blur-sm inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white dark:bg-dark shadow-2xl drop-shadow-2xl  text-left transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-md data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="bg-white dark:bg-dark dark:text-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="">
                  <div className="">
                    <label
                      className="uppercase text-sm font-bold"
                      htmlFor="old_password"
                    >
                      Current Password
                    </label>
                    <div className="relative" data-aos="flip-right">
                      <input
                        id="old_password"
                        className={`border p-3 dark:bg-dark dark:text-gray-light  dark:border-gray-dark shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-light rounded-sm w-full outline-none pl-12 ${oldPassword?'outline-2 outline-double outline-red':''}`}
                        type="password"
                        placeholder="type old password"
                        name="old_password"
                        onChange={handleChangePasswordOnChange}
                        required
                      />
                      <div className="absolute left-4 inset-y-0 flex items-center">
                        <LockClosedIcon className="h-6 w-6" />
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <label
                      className="uppercase text-sm font-bold"
                      htmlFor="new_password"
                    >
                      New Password
                    </label>
                    <div className="relative" data-aos="flip-right">
                      <input
                        id="new_password"
                        className={`border p-3 dark:bg-dark dark:text-gray-light  dark:border-gray-dark shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-light rounded-sm w-full outline-none pl-12 `}
                        type="password"
                        placeholder="type new password"
                        name="new_password"
                        onChange={handleChangePasswordOnChange}
                        minLength={4}
                        required
                      />
                      <div className="absolute left-4 inset-y-0 flex items-center">
                        <LockOpenIcon className="h-6 w-6" />
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <label
                      className="uppercase text-sm font-bold"
                      htmlFor="confirm_password"
                    >
                      Confirm Password
                    </label>
                    <div className="relative" data-aos="flip-right">
                      <input
                        id="confirm_password"
                        className={`border p-3 dark:bg-dark dark:text-gray-light  dark:border-gray-dark shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-light rounded-sm w-full outline-none pl-12 ${confirmPassword?'outline-2 outline-double outline-red':''}`}
                        type="password"
                        placeholder="type confirm password"
                        name="confirm_password"
                        onChange={handleChangePasswordOnChange}
                        minLength={4}
                        required
                      />
                      <div className="absolute left-4 inset-y-0 flex items-center">
                        <LockOpenIcon className="h-6 w-6" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 gap-2">
                <button
                  type="button"
                  onClick={handleChangePassword}
                  className="inline-flex w-full justify-center text-sm font-semibold border-2  bg-red px-6 py-2 rounded-lg text-white sm:mt-0 sm:w-auto hover:scale-105"
                >
                  {changePasswordStatus === "loading" ? "Changing..." : "Change"}
                </button>
                <button
                  type="button"
                  data-autofocus
                  onClick={() => setChangePasswordModalOpen(false)}
                  className="mt-3 inline-flex w-full justify-center text-sm font-semibold border-2  bg-blue px-6 py-2 rounded-lg text-white sm:mt-0 sm:w-auto hover:scale-105"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
