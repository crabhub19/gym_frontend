
import { NavLink,useLocation } from 'react-router-dom';
import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

import logo from '../assets/image/builtIn/gym.png'
import lightLogo from '../assets/image/builtIn/gym-light.png'
import { logoutUser } from '../features/account/accountSlice';

export default function NavBar(pros) {
  let {isDarkMode} = pros;
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathLocation = useLocation().pathname;
  let aditionalNavigation = localStorage.getItem('token')?[
    { name: 'Profile', to: '/profile', current: pathLocation==="/profile"?true:false },
    { name: 'logout', to: '/logout', current: pathLocation==="/logout"?true:false },

  ]:[
    { name: 'Register', to: '/register', current: pathLocation==="/register"?true:false },
    { name: 'Login', to: '/login', current: pathLocation==="/login"?true:false },
  ]
  let navigation = [
    { name: 'Home', to: '/', current: pathLocation==="/"?true:false },    
    { name: 'Team', to: '/team', current: pathLocation==="/team"?true:false },
    ...aditionalNavigation
  ]
  return (
    <header className="w-full absolute shadow-md">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between  p-6">
        <div className="flex lg:flex-1">
            <span className="sr-only">GYM</span>
          <a href="#" className="-m-1.5 p-1.5">
            <img
              alt=""
              src={isDarkMode?logo:pathLocation==="/"?logo:lightLogo}
              className="h-16 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className={`m-1 inline-flex items-center justify-center rounded-sm p-1 bg-theme text-white`}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className={`hidden lg:flex lg:gap-x-12 font-oswald text-lg font-semibold ${pathLocation==='/'?"text-white":"text-dark dark:text-white"}`}>
        {navigation.map((item) => (
            <NavLink
              key={item.name}
              as="Link"
              to={item.to}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'line-through decoration-double decoration-2' : '',
                'leading-6 hover:line-through hover:decoration-double hover:decoration-2 cursor-pointer',
              )}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="btn">
            Join Us <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 dark:bg-dark">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src={isDarkMode?logo:lightLogo}
                className="h-16 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="m-1 rounded-sm text-white p-1 bg-theme"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-black dark:divide-white">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <NavLink
                    onClick={() => setMobileMenuOpen(false)} // Close menu on link click
                    key={item.name}
                    as="Link"
                    to={item.to}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'line-through decoration-double decoration-2' : '',
                      'hover:line-through hover:decoration-double hover:decoration-2 cursor-pointer block rounded-lg px-3 py-2 font-semibold leading-7 font-oswald text-2xl text-dark dark:text-white',
                    )}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="btn"
                >
                  Log out
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
