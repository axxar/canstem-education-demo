import React from "react";

const Register = () => {
  return (
    <div className="flex mx-auto">
      <div className="container">
        <div class="md:flex">
          <div class="md:shrink-0 sm:p-0 px-2 md:w-6/12">
            <h1 className="text-4xl leading-normal">Register</h1>
            <form
              name="register"
              method="POST"
              data-netlify-recaptcha="true"
              netlify-honeypot="bot-field"
              data-netlify="true"
              className=""
            >
              <div class="mb-6">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <p>
                  <input
                    type="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="name@flowbite.com"
                    required
                  />
                </p>
              </div>
              <div class="mb-6">
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your message
                </label>
                <p>
                  <textarea
                    id="message"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    required
                  ></textarea>
                </p>
              </div>
              <p>
                <input
                  type="submit"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                  value="Submit"
                />
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
