import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Transition } from "@headlessui/react";
import CSELogo from "../components/images/CSE-logo.png";
import "flowbite";

function Navbar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div class="bg-gray-700">
        <div class="container mx-auto pl-5 py-2">
          <ul class="text-gray-200 dark:text-gray-400 text-sm lg:text-md font-semibold">
            <li class="lg:inline-block">
              <a href="tel:647-709-0258" target="_blank" rel="noreferrer">
                <svg
                  className="w-5 h-5 font-bold inline-block mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                647-709-0258
              </a>
            </li>
            <li class="my-2 lg:my-0 lg:mx-10 lg:inline-block">
              <a href="tel:647-568-0258" target="_blank" rel="noreferrer">
                <svg
                  className="w-5 h-5 font-bold inline-block mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                647-568-0258
              </a>
            </li>
            <li className="lg:inline-block">
              <a
                href="mailto:canstem.education@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  class="w-5 h-5 font-bold inline-block mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                canstem.education@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <nav className="bg-white sticky top-0 z-10  border-b border-gray-200 text-green-600">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center text-lg tracking-wider">
              <NavLink to="/" className="flex items-center hover:text-blue-700">
                <img
                  className="h-12 lg:h-16"
                  src={CSELogo}
                  alt="CSE logo white"
                />
                <span class="self-center text-lg md:text-2xl align-middle font-semibold whitespace-nowrap">
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
