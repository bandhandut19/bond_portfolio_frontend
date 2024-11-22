import { Link } from "react-router-dom";

const projects = [
  {
    name: "Project Management System",
    description:
      "A web application to manage projects, tasks, and teams efficiently.",
    github_url: "https://github.com/username/project-management-system",
    live_url: "https://www.projectmanagementsystem.com",
    image: "https://i.postimg.cc/J0b6Fgq8/project1.png",
  },
  {
    name: "E-Commerce Store",
    description:
      "An online marketplace to buy and sell products with integrated payment systems.",
    github_url: "https://github.com/username/e-commerce-store",
    live_url: "https://www.ecommercestore.com",
    image: "https://i.postimg.cc/hjqmFgH1/project2.png",
  },
  {
    name: "Personal Portfolio",
    description:
      "A personal website showcasing my skills, projects, and blogs.",
    github_url: "https://github.com/username/personal-portfolio",
    live_url: "https://www.personalportfolio.com",
    image: "https://i.postimg.cc/PqT8sN7X/project3.png",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen pb-20">
      <div className="bg-[#AB886D] text-center lg:text-5xl text-2xl py-10 h-1/4 rounded-b-full text-[#E4E0E1] pt-10 mb-10">
        <span className="font-extrabold">Projects</span>
      </div>
      <div className="grid grid-cols-2 gap-5 px-5">
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
              <div className="grid grid-cols-2 gap-5 text-center font-bold">
                <span className="bg-[#D6C0B3] text-black rounded-full">
                  <Link to={project.github_url}>Github Repo</Link>
                </span>
                <span className="bg-[#D6C0B3] text-black rounded-full">
                  <Link to={project.live_url}>Live Link</Link>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
