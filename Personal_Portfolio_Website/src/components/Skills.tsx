import Bootstrap from "@/assets/logos/bootstrap-4-logo.svg";
import CSS from "@/assets/logos/css-3-logo.svg";
import Express from "@/assets/logos/express.svg";
import Firebase from "@/assets/logos/firebase-1-logo.svg";
import Git from "@/assets/logos/git.svg";
import Github from "@/assets/logos/github.svg";
import HTML from "@/assets/logos/html-5-logo.svg";
import JS from "@/assets/logos/javascript.svg";
import Mongo from "@/assets/logos/mongodb-logo.svg";
import MySQL from "@/assets/logos/mysql-logo.svg";
import Node from "@/assets/logos/node-js.svg";
import React from "@/assets/logos/react.svg";
import Tailwind from "@/assets/logos/tailwindcss.svg";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
  const skillsArray = [
    { skill: React, progress: 80 },
    { skill: Mongo, progress: 90 },
    { skill: Node, progress: 80 },
    { skill: Express, progress: 80 },
    { skill: JS, progress: 80 },
    { skill: Git, progress: 75 },
    { skill: Github, progress: 80 },
    { skill: HTML, progress: 100 },
    { skill: Firebase, progress: 70 },
    { skill: MySQL, progress: 60 },
    { skill: Tailwind, progress: 90 },
    { skill: CSS, progress: 95 },
    { skill: Bootstrap, progress: 90 },
  ];
  return (
    <div className="pt-20">
      <h2 className="text-4xl font-semibold ml-10 ">My Skills:</h2>
      <div className="grid lg:grid-cols-6 grid-cols-3 gap-10 w-[80%] m-auto mt-20">
        {skillsArray.map((skill, index) => {
          return (
            <CircularProgressbarWithChildren
              value={skill.progress}
              key={index}
              styles={{ path: { stroke: "#1ad1da" } }}
            >
              <img src={skill.skill} alt="Logo" className="w-[50%]" />
            </CircularProgressbarWithChildren>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
