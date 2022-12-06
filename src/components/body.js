import React from "react";
import Intro from "./subcomponents/intro";
import Skills from "./subcomponents/skills";
import TechStack from "./subcomponents/techstack";
import Projects from "./subcomponents/projects";
import Education from "./subcomponents/education";

function body() {
  return (
    <>
    <Intro />
    <Skills/>
    <TechStack/>
    <Projects/>
    </>
  );
}
export default body;