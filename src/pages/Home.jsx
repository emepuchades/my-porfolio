import React, { useState } from "react";
import Contact from "./Contact";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
//import Success from "./pages/Success";
import WorkExperience from "./WorkExperience";

function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <Hero />
      <Projects />
      <WorkExperience />
      <Contact />
    </div>
  );
}

export default Home;
