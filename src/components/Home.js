import React from "react";
import background from "./images/home-classroom.jpg";

const Home = () => {
  return (
    <div class="relative container mx-auto">
      <img src={background} alt="Classroom with students" />
      <div class="absolute font-semibold text-center text-white top-1/4 -translate-y-1/4 font-sans p-10">
        <p className="text-5xl leading-normal">Day School,</p>
        <p className="text-5xl leading-normal">High School Credit Courses,</p>
        <p className="text-5xl leading-normal">Tutoring And After School Help</p>
      </div>
    </div>
  );
};

export default Home;
