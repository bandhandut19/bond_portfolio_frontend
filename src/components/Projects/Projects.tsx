import { Link } from "react-router-dom";

const projects = [
  {
    name: "Project Management System",
    description:
      "A web application to manage projects, tasks, and teams efficiently.",
    github_url: "https://github.com/username/project-management-system",
    live_url: "https://www.projectmanagementsystem.com",
    image: "https://i.postimg.cc/CLYDXGct/best-project-design.png",
    used_technologies: {
      frontend: ["React", "TailwindCSS", "Redux"],
      backend: ["Node.js", "Express", "MongoDB"],
    },
  },
  {
    name: "E-Commerce Store",
    description:
      "An online marketplace to buy and sell products with integrated payment systems.",
    github_url: "https://github.com/username/e-commerce-store",
    live_url: "https://www.ecommercestore.com",
    image: "https://i.postimg.cc/CLYDXGct/best-project-design.png",
    used_technologies: {
      frontend: ["React", "Bootstrap", "Redux"],
      backend: ["Node.js", "Express", "MySQL"],
    },
  },
  {
    name: "Personal Portfolio",
    description:
      "A personal website showcasing my skills, projects, and blogs.",
    github_url: "https://github.com/username/personal-portfolio",
    live_url: "https://www.personalportfolio.com",
    image: "https://i.postimg.cc/CLYDXGct/best-project-design.png",
    used_technologies: {
      frontend: ["HTML", "CSS", "JavaScript", "React"],
      backend: ["None"],
    },
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen pb-20">
      <div className="bg-[#AB886D] text-center lg:text-5xl text-2xl py-10 h-1/4 rounded-b-full text-[#E4E0E1] pt-10 mb-10">
        <span className="font-extrabold">Projects</span>
      </div>
      <div className="grid lg:grid-cols-3 gap-5 px-5">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card rounded-sm card-compact bg-[#493628] text-[#E4E0E1]  shadow-xl"
          >
            <figure>
              <img src={project.image} alt="Project-Image" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.name}</h2>
              <p>{project.description}</p>
              <div className="grid grid-cols-2 gap-5 text-center font-bold cursor-pointer">
                <span className="bg-[#D6C0B3] text-black rounded-full py-2">
                  <Link to={project.github_url} target="_blank">
                    Github Repo
                  </Link>
                </span>
                <span className="bg-[#D6C0B3] text-black rounded-full py-2">
                  <Link to={project.live_url} target="_blank">
                    Live Link
                  </Link>
                </span>
              </div>
              <div>
                <h1 className="text-center bg-[#D6C0B3] text-[#493628] py-2 font-extrabold">
                  Techonlogies Used
                </h1>
                <div className="grid grid-cols-2 gap-5 text-center text-[#493628] py-1">
                  <div className="bg-[#E4E0E1] py-2">
                    <span className="font-bold">Frontend</span>
                    <div>
                      {project.used_technologies.frontend.map((tech, index) => (
                        <p key={index}>{tech}</p>
                      ))}
                    </div>
                  </div>
                  <div className="bg-[#E4E0E1] py-2">
                    <span className="font-bold">Backend</span>
                    <div>
                      {project.used_technologies.backend.map((tech, index) => (
                        <p key={index}>{tech}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
