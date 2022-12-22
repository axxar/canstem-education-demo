import React from "react";
import DaySchool from "./images/Day-School.jpg";
import HighSchool from "./images/High-School.jpg";
import Tutoring from "./images/Tutoring.jpg";

export default function Services() {
  return (
    <div class="container mt-20 px-4">
      <h2 class="text-center py-4 font-bold text-4xl">Our Services</h2>
      <div className="grid lg:grid-cols-3 gap-4">
        <div class="bg-white border border-gray-200 rounded-lg shadow-md">
          <img class="rounded-t-lg" src={DaySchool} alt="" />
          <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
              Day School
            </h5>
          </div>
        </div>
        <div class="bg-white border border-gray-200 rounded-lg shadow-md">
          <img class="rounded-t-lg" src={HighSchool} alt="" />
          <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
              High School Credit Courses
            </h5>
          </div>
        </div>
        <div class="bg-white border border-gray-200 rounded-lg shadow-md">
          <img class="rounded-t-lg" src={Tutoring} alt="" />
          <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
              Tutoring
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
