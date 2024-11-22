/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { TSkill } from "../utils/types";
import axios from "axios";

const DashBoard = () => {
  const { handleSubmit, register, reset } = useForm<TSkill>();
  const handleAddSkills = async (data: TSkill) => {
    console.log(data);

    try {
      const res = await axios.post(
        "http://localhost:5000/portfolio/skills/skill",
        data
      );
      console.log(res);
    } catch (err: any) {
      console.log(err);
    }
    reset();
  };
  return (
    <div className="min-h-screen bg-[#D6C0B3] pb-20">
      <h1 className="text-center lg:text-5xl text-xl pt-5 font-extrabold text-[#493628]">
        BOND PORTFOLIO ADMIN PANEL
      </h1>
      <div className="grid lg:grid-cols-2 gap-5 pt-10 px-5">
        <div className="bg-[#E4E0E1] pb-20 px-5">
          <h1 className="text-2xl font-bold text-center py-2">Add Skills</h1>

          <form onSubmit={handleSubmit(handleAddSkills)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Skill Name</span>
              </label>
              <input
                type="Skill Name"
                placeholder="Enter Skill name"
                className="input input-bordered"
                required
                {...register("name")}
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
                {...register("category")}
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
                {...register("description")}
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
                {...register("level")}
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
        <div className="bg-[#E4E0E1]">
          <h1 className="text-2xl text-center py-2 font-bold">Add Blog</h1>
        </div>
        <div className="bg-[#E4E0E1]">
          <h1 className="text-2xl text-center py-2 font-bold">Add Projects</h1>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
