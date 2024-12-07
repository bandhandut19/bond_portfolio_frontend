/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useEffect, useState } from "react";
import { SkillBar } from "react-skillbars";
import { TSkill } from "../utils/types";
const Skills = () => {
  const [softSkills, setSoftSkills] = useState([]);
  const [techSkills, setTechSkills] = useState([]);
  useEffect(() => {
    const skill = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/portfolio/skills/skill"
        );
        const skills = res?.data?.data;

        const soft = skills.filter(
          (skill: TSkill) => skill.category === "soft"
        );
        setSoftSkills(soft);
        const tech = skills.filter(
          (skill: TSkill) => skill.category === "tech"
        );
        setTechSkills(tech);
      } catch (err: any) {
        console.log(err);
      }
    };
    skill();
  }, []);
  return (
    <div className="min-h-screen pb-20">
      <div className="bg-[#AB886D] text-center lg:text-5xl text-2xl py-10 h-1/4 rounded-b-full text-[#E4E0E1] pt-10 mb-10">
        <span className="font-extrabold">Skills</span>
      </div>
      <div className="grid gap-10  lg:grid-cols-2">
        <div>
          <h1 className="text-center text-[#E4E0E1] font-bold text-2xl bg-[#493628] py-2 lg:rounded-e-badge">
            Technical Skills
          </h1>
          <div>
            <div className="text-center pt-10 flex flex-col gap-5">
              <SkillBar
                skills={techSkills}
                animationDelay={100}
                height={39}
              ></SkillBar>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-center text-[#E4E0E1] font-bold text-2xl bg-[#493628] py-2 lg:rounded-s-badge">
            Soft Skills
          </h1>
          <div className="text-center pt-10 flex flex-col gap-5">
            {softSkills.map((skill: TSkill, index) => (
              <div
                key={index}
                className="bg-[#AB886D] py-5 rounded-ss-badge flex flex-col gap-5 font-bold"
              >
                <span className="text-xl text-[#E4E0E1]">{skill.type}</span>

                <span className="text-[#493628] lg:block hidden">
                  {skill.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
