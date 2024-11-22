const skills = {
  SoftSkills: [
    {
      name: "Communication",
      description:
        "Ability to communicate complex ideas clearly to both technical and non-technical audiences.",
    },
    {
      name: "Teamwork",
      description:
        "Collaborating with colleagues to achieve common goals and foster a supportive team environment.",
    },
    {
      name: "Problem-Solving",
      description:
        "Ability to think critically and find creative solutions to challenges in a timely manner.",
    },
    {
      name: "Leadership",
      description:
        "Leading and motivating a team to reach business objectives and improve overall performance.",
    },
    {
      name: "Time Management",
      description:
        "Effectively prioritizing tasks to meet deadlines and manage workloads.",
    },
  ],
  techSkills: [
    {
      type: "MongoDB",
      level: 85,
    },
    {
      type: "Express.js",
      level: 80,
    },
    {
      type: "React",
      level: 90,
    },
    {
      type: "NextJs",
      level: 90,
    },
    {
      type: "Node.js",
      level: 85,
    },
    {
      type: "JavaScript",
      level: 90,
    },
    {
      type: "TypeScript",
      level: 90,
    },
    {
      type: "HTML5",
      level: 90,
    },
    {
      type: "CSS3",
      level: 80,
    },
    {
      type: "Git",
      level: 85,
    },
    {
      type: "Redux",
      level: 80,
    },
    {
      type: "JWT Authentication",
      level: 80,
    },
    {
      type: "RESTful APIs",
      level: 85,
    },
    {
      type: "NPM",
      level: 90,
    },
  ],
};
import { SkillBar } from "react-skillbars";
const Skills = () => {
  return (
    <div className="min-h-screen pb-20">
      <div className="bg-[#AB886D] text-center lg:text-5xl text-2xl py-10 h-1/4 rounded-b-full text-[#E4E0E1] pt-10 mb-10">
        <span className="font-extrabold">Skills</span>
      </div>
      <div className="grid gap-10  lg:grid-cols-2">
        <div>
          <h1 className="text-center text-[#E4E0E1] font-bold text-2xl bg-[#493628] py-2 rounded-e-badge">
            Technical Skills
          </h1>
          <div>
            <div className="text-center pt-10 flex flex-col gap-5">
              <SkillBar
                skills={skills.techSkills}
                animationDelay={100}
                height={39}
              ></SkillBar>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-center text-[#E4E0E1] font-bold text-2xl bg-[#493628] py-2 rounded-s-badge">
            Soft Skills
          </h1>
          <div className="text-center pt-10 flex flex-col gap-5">
            {skills.SoftSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-[#AB886D] py-5 rounded-ss-badge flex flex-col gap-5 font-bold"
              >
                <span className="text-xl text-[#E4E0E1]">{skill.name}</span>

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
