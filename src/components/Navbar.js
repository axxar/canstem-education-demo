import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Transition } from "@headlessui/react";
import CSELogo from "../components/images/CSE-logo.png";
import "flowbite";

function Navbar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-white sticky top-0 z-10  border-b border-gray-200 text-green-600">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center text-lg tracking-wider">
              <NavLink to="/" className="flex items-center hover:text-blue-700">
                <img
                  className="h-10 lg:h-15 "
                  src={CSELogo}
                  alt="CSE logo white"
                />
                <span class="self-center text-md md:text-2xl align-middle font-semibold whitespace-nowrap">
                  CanSTEM Education
                </span>
              </NavLink>
            </div>

            <div className="-mr-2 flex">
              <div className="hidden md:block">
                <div className="ml-10 flex space-x-4 font-medium text-md">
                  <NavLink to="/" className="px-3 py-2 hover:text-blue-700">
                    Home
                  </NavLink>
                  <NavLink
                    to="/Services"
                    className="px-3 py-2 hover:text-blue-700"
                  >
                    Services
                  </NavLink>
                  <NavLink
                    to="/ContactUs"
                    className="px-3 py-2 hover:text-blue-700"
                  >
                    Contact Us
                  </NavLink>
                </div>
              </div>
              <div className="md:hidden ml-2">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div
              className="md:hidden font-AdventPro tracking-wide"
              id="mobile-menu"
            >
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <NavLink
                  to="/"
                  className="block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </NavLink>

                <NavLink
                  to="/Services"
                  className="block px-3 py-2 rounded-md text-base font-medium"
                >
                  Services
                </NavLink>

                <NavLink
                  to="/ContactUs"
                  className="block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact Us
                </NavLink>
              </div>
            </div>
          )}
        </Transition>
      </nav>
      <main>
        <div className="container mt-2 mx-auto sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
}

export default Navbar;
