/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { TBlog, TProject, TSkill } from "../utils/types";
import axios from "axios";

const DashBoard = () => {
  const {
    handleSubmit: handleSkillSubmit,
    register: handleSkillRegister,
    reset: handleskillreset,
  } = useForm<TSkill>();
  const {
    handleSubmit: handleprojectsubmit,
    register: projectregister,
    reset: projectreset,
  } = useForm<TProject>();
  const {
    handleSubmit: handleblogsubmit,
    register: blogregister,
    reset: blogreset,
  } = useForm<TBlog>();
  const handleAddSkills = async (data: TSkill) => {
    console.log(data);

    try {
      const res = await axios.post(
        "https://bond-porfolio-backend.vercel.app/portfolio/skills/skill",
        data
      );
      console.log(res);
    } catch (err: any) {
      console.log(err);
    }
    handleskillreset();
  };
  const handleAddProjects = async (data: TProject) => {
    console.log(data);

    try {
      const res = await axios.post(
        "https://bond-porfolio-backend.vercel.app/portfolio/projects/project",
        data
      );
      console.log(res);
    } catch (err: any) {
      console.log(err);
    }
    projectreset();
  };
  const handleAddBlogs = async (data: TBlog) => {
    console.log(data);

    try {
      const res = await axios.post(
        "https://bond-porfolio-backend.vercel.app/portfolio/blogs/blog",
        data
      );
      console.log(res);
    } catch (err: any) {
      console.log(err);
    }
    blogreset();
  };
  return (
    <div className="min-h-screen bg-[#D6C0B3] pb-20">
      <h1 className="text-center lg:text-5xl text-xl pt-5 font-extrabold text-[#493628]">
        BOND PORTFOLIO ADMIN PANEL
      </h1>
      <div className="grid lg:grid-cols-2 gap-5 pt-10 px-5">
        <div className="bg-[#E4E0E1] pb-20 px-5">
          <h1 className="text-2xl font-bold text-center py-2">Add Skills</h1>

          <form onSubmit={handleSkillSubmit(handleAddSkills)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Skill Name</span>
              </label>
              <input
                type="Skill Name"
                placeholder="Enter Skill name"
                className="input input-bordered"
                required
                {...handleSkillRegister("type")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Skill Category</span>
              </label>
              <input
                type="Skill Category"
                placeholder="Enter Skill Category | soft or tech ?"
                className="input input-bordered"
                required
                {...handleSkillRegister("category")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  Description (only for soft skills)
                </span>
              </label>
              <input
                type="Skill Description "
                placeholder="Enter Skill Description "
                className="input input-bordered"
                {...handleSkillRegister("description")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Level (only for tech skills)</span>
              </label>
              <input
                type="Skill level"
                placeholder="Enter Skill Level"
                className="input input-bordered"
                {...handleSkillRegister("level")}
              />
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn  bg-[#AB886D] border-none outline-none "
              >
                <span className="text-black">Add Skill</span>
              </button>
            </div>
          </form>
        </div>
        <div className="bg-[#E4E0E1] pb-20 px-5">
          <h1 className="text-2xl text-center py-2 font-bold">Add Blogs</h1>

          <form onSubmit={handleblogsubmit(handleAddBlogs)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Blog Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter project name"
                className="input input-bordered"
                required
                {...blogregister("name")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Blog Image</span>
              </label>
              <input
                type="text"
                placeholder="Enter blog image"
                className="input input-bordered"
                required
                {...blogregister("image")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                placeholder="Enter blog Description "
                className="input input-bordered"
                {...blogregister("description")}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Link</span>
              </label>
              <input
                type="text"
                placeholder="Enter Link of the blog"
                className="input input-bordered"
                {...blogregister("link")}
              />
            </div>

            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn  bg-[#AB886D] border-none outline-none "
              >
                <span className="text-black">Add Project</span>
              </button>
            </div>
          </form>
        </div>
        <div className="bg-[#E4E0E1] pb-20 px-5">
          <h1 className="text-2xl text-center py-2 font-bold">Add Projects</h1>
          <form onSubmit={handleprojectsubmit(handleAddProjects)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Project Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter project name"
                className="input input-bordered"
                required
                {...projectregister("name")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Project Image</span>
              </label>
              <input
                type="text"
                placeholder="Enter project image"
                className="input input-bordered"
                required
                {...projectregister("image")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                placeholder="Enter Project Description "
                className="input input-bordered"
                {...projectregister("description")}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Github Link</span>
              </label>
              <input
                type="text"
                placeholder="Enter Github Link"
                className="input input-bordered"
                {...projectregister("github_url")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Live Link</span>
              </label>
              <input
                type="text"
                placeholder="Enter Live Link"
                className="input input-bordered"
                {...projectregister("live_url")}
              />
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn  bg-[#AB886D] border-none outline-none "
              >
                <span className="text-black">Add Project</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
