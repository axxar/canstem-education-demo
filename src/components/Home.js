import React from "react";
import background from "./images/home-classroom.jpg";
import Services from "./Services";
import Register from "./Register";

const Home = () => {
  return (
    <div class="">
      <div class="relative container mx-auto">
        <img src={background} alt="Classroom with students" />
        <div class="absolute w-full lg:mx-0 font-semibold text-center text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-sans text-3xl lg:text-5xl ">
          <p className="leading-normal lg:leading-relaxed">
            Day School
          </p>
          <p className="leading-normal lg:leading-relaxed">
            High School Credit Courses
          </p>
          <p className="leading-normal lg:leading-relaxed">
            Tutoring
          </p>
        </div>
      </div>
      <Services />
      <Register />
    </div>
  );
};

export default Home;
