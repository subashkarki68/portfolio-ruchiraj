import Bootstrap from "@/assets/logos/bootstrap-4-logo.svg";
import CSS from "@/assets/logos/css-3-logo.svg";
import {
  default as Express,
  default as Firebase,
} from "@/assets/logos/express.svg";
import Git from "@/assets/logos/git.svg";
import Github from "@/assets/logos/github.svg";
import React from "@/assets/logos/react.svg";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
  const skillsArray = [
    { skill: Bootstrap, progress: 90 },
    { skill: React, progress: 80 },
    { skill: CSS, progress: 95 },
    { skill: Express, progress: 80 },
    { skill: Firebase, progress: 70 },
    { skill: Git, progress: 75 },
    { skill: Github, progress: 80 },
  ];
  return (
    <div>
      <CircularProgressbarWithChildren value={80}>
        <img src={React} alt='React Logo' className='w-60' />
      </CircularProgressbarWithChildren>
      {skillsArray.map((skill, index) => {
        return (
          <CircularProgressbarWithChildren value={skill.progress}>
            <img
              src={skill.skill}
              alt={skill.skill.split("/").pop()?.replace(".svg", "")}
              className='w-60'
            />
            {skill.skill.split("/").pop()?.replace(".svg", "")}
          </CircularProgressbarWithChildren>
        );
      })}
    </div>
  );
};

export default Skills;
