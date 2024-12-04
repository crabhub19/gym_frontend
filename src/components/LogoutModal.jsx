import React from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
export default function LogoutModal(props) {
    const { logoutModalOpen, setLogoutModalOpen, handleLogout } = props
  return (
    <Dialog open={logoutModalOpen} onClose={setLogoutModalOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <div className="fixed backdrop-blur-sm inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white dark:bg-dark shadow-2xl drop-shadow-2xl  text-left transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white dark:bg-dark dark:text-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full sm:mx-0 sm:size-10">
                  <ExclamationTriangleIcon aria-hidden="true" className="size-6 text-red-600" />
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                    Deactivate account
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Are you sure you want to logout your account?
                      This action cannot be undone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 gap-2">
              <button
                type="button"
                onClick={handleLogout}
                className="inline-flex w-full justify-center text-sm font-semibold border-2  bg-red px-6 py-2 rounded-lg text-white sm:mt-0 sm:w-auto hover:scale-105"
              >
                Logout
              </button>
              <button
                type="button"
                data-autofocus
                onClick={() => setLogoutModalOpen(false)}
                className="mt-3 inline-flex w-full justify-center text-sm font-semibold border-2  bg-blue px-6 py-2 rounded-lg text-white sm:mt-0 sm:w-auto hover:scale-105"
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
