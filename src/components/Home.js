import React from "react";
import background from "./images/home-classroom.jpg";

const Home = () => {
  return (
    <div class="">
      <div class="relative container mx-auto">
        <img src={background} alt="Classroom with students" />
        <div class="absolute w-full lg:mx-0 font-semibold text-center text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-sans text-2xl lg:text-5xl ">
          <p className="leading-normal lg:leading-relaxed">
            Day School,
          </p>
          <p className="leading-normal lg:leading-relaxed">
            High School Credit Courses,
          </p>
          <p className="leading-normal lg:leading-relaxed">
            Tutoring And After School Help
          </p>
        </div>
      </div>

    </div>
  );
};

export default Home;
