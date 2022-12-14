import React from "react";
import background from "./images/home-classroom.jpg";

const Home = () => {
  return (
    <div class="relative container mx-auto">
      <img src={background} alt="Classroom with students" />
      <div class="absolute font-semibold text-center text-white mx-auto top-1/2 -translate-y-1/2 lg:top-1/4 lg:-translate-y-1/4 font-sans p-10">
        <p className="text-md lg:text-5xl leading-normal lg:leading-relaxed">Day School,</p>
        <p className="text-md lg:text-5xl leading-normal lg:leading-relaxed">High School Credit Courses,</p>
        <p className="text-md lg:text-5xl leading-normal lg:leading-relaxed">Tutoring And After School Help</p>
      </div>
    </div>
  );
};

export default Home;
