import React from "react";
import CSELogo from "../components/images/CSE-logo.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="p-4 bg-green-300 sm:p-6 dark:bg-gray-900 mt-16">
      <div className="container mx-auto">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <NavLink to="/" class="flex items-center">
              <img src={CSELogo} class="h-12 inline-block" alt="CSE Logo" />
              <span class="self-center text-lg lg:text-2xl font-semibold whitespace-nowrap align-middle dark:text-white">
                CanSTEM Education
              </span>
            </NavLink>
            <ul class="text-gray-600 dark:text-gray-400 text-sm lg:text-md font-semibold mt-2">
              <li class="mb-3">
                <svg
                  className="w-5 h-5 font-bold inline-block mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                647-709-0258
              </li>
              <li class="mb-3">
                <svg
                  className="w-5 h-5 font-bold inline-block mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                647-568-0258
              </li>
              <li>
                <a href="mailto:canstem.education@gmail.com" target="_blank" rel="noreferrer">
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
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
            <div>
              <h2 class="mb-6 text-sm lg:text-md font-semibold text-gray-900 uppercase dark:text-white">
                <NavLink to="/">Services</NavLink>
              </h2>
              <ul class="text-gray-600 dark:text-gray-400 text-xs lg:text-sm">
                <li class="mb-4">Day School</li>
                <li class="mb-4">High School Credit Courses</li>
                <li>Tutoring And After School Help</li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm lg:text-md font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul class="text-gray-600 dark:text-gray-400 text-xs lg:text-sm">
                <li class="mb-4">
                  <NavLink to="/" class="hover:underline">
                    Privacy Policy
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" class="hover:underline">
                    Terms &amp; Conditions
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-xs lg:text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2022{" "}
            <NavLink to="/" class="hover:underline">
              CanSTEM Education™
            </NavLink>
            . All Rights Reserved.
          </span>
          <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a
              href="https://www.facebook.com/Sajjalapsankhe/"
              target="_blank"
              rel="noreferrer"
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="sr-only">Facebook page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
