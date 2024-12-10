/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TSkill } from "../utils/types";

const SkillMod = () => {
  let serialNo = 0;
  const [skills, setSkills] = useState([]);
  const [skillId, setSkillId] = useState("");
  const {
    handleSubmit: handleSkillSubmit,
    register: handleSkillRegister,
    // reset: handleskillreset,
  } = useForm<TSkill>();
  const openModal = (id: string) => {
    setSkillId(id);
    const modal = document.getElementById(
      "my_modal_3"
    ) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };
  const openModal_1 = (id: string) => {
    setSkillId(id);
    const modal = document.getElementById(
      "my_modal_4"
    ) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };

  const closeModal = () => {
    const modal = document.getElementById(
      "my_modal_3"
    ) as HTMLDialogElement | null;
    modal?.close();
  };
  //   const closeModal_1 = () => {
  //     const modal = document.getElementById(
  //       "my_modal_4"
  //     ) as HTMLDialogElement | null;
  //     modal?.close();
  //   };
  const fetchSkills = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/portfolio/skills/skill"
        // "https://bond-porfolio-backend.vercel.app/portfolio/skills/skill"
      );
      setSkills(res.data.data);
    } catch (err: any) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchSkills();
  }, []);
  const handleDelete = async () => {
    console.log("deleted", skillId);
    if (skillId) {
      try {
        const res = await axios.delete(
          `http://localhost:5000/portfolio/skills/skill/${skillId}`
          // "https://bond-porfolio-backend.vercel.app/portfolio/skills/skill/${skillId}"
        );
        console.log(res);
        closeModal();
        fetchSkills();
      } catch (err: any) {
        console.log(err);
      }
    }
  };
  const handleUpdate = async (data: TSkill) => {
    console.log("updated");
    console.log(data);
  };
  return (
    <div className="bg-[#E4E0E1] pb-20 px-5">
      <button className="btn rounded-none">
        <Link to={"/adminpanel"}>⬅️ Go back to Dashboard HomePage</Link>
      </button>
      <h1 className="text-center text-4xl font-bold mb-20">Skills</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Skill Name</th>
              <th>Category</th>
              <th>Description</th>
              <th>Level</th>
              <th>Modify</th>
            </tr>
          </thead>
          <tbody>
            {skills?.map((skill: TSkill, index) => (
              <tr key={index}>
                <th>{++serialNo}</th>
                <td>{skill.type}</td>
                <td>{skill.category}</td>
                <td>
                  {skill?.description ? skill.description : "Not Applicable"}
                </td>
                <td>{skill.level ? skill.level : "Not Applicable"}</td>
                <td>
                  <div className="flex gap-2">
                    {/* UPDATE */}
                    <div className="flex flex-col gap-8 rounded-none">
                      <button
                        className="btn bg-green-700 text-white hover:bg-green-700"
                        onClick={() => openModal_1(skill._id as string)}
                      >
                        Update
                      </button>

                      <dialog id="my_modal_4" className="modal rounded-none">
                        <div className="modal-box rounded-none">
                          <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                              ✕
                            </button>
                          </form>
                          <div className="flex flex-col gap-8 rounded-none">
                            <h3 className="font-bold text-xl">Update Skill</h3>
                            <form onSubmit={handleSkillSubmit(handleUpdate)}>
                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text">Skill Name</span>
                                </label>
                                <input
                                  type="Skill Name"
                                  placeholder={skill.type}
                                  className="input input-bordered"
                                  required
                                  {...handleSkillRegister("type")}
                                />
                              </div>
                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text">
                                    Skill Category
                                  </span>
                                </label>
                                <input
                                  type="Skill Category"
                                  placeholder={skill.category}
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
                                  placeholder={skill.description}
                                  className="input input-bordered"
                                  {...handleSkillRegister("description")}
                                />
                              </div>
                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text">
                                    Level (only for tech skills)
                                  </span>
                                </label>
                                <input
                                  type="Skill level"
                                  placeholder={String(skill.level)}
                                  className="input input-bordered"
                                  {...handleSkillRegister("level")}
                                />
                              </div>
                              <div className="form-control mt-6 flex gap-3">
                                <button
                                  type="submit"
                                  className="btn bg-green-700 text-white hover:bg-green-700"
                                >
                                  Update
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </dialog>
                    </div>

                    {/* DELETE */}
                    <button
                      className="btn bg-red-700 text-white hover:bg-red-700"
                      onClick={() => openModal(skill._id as string)}
                    >
                      Delete
                    </button>

                    <dialog id="my_modal_3" className="modal rounded-none">
                      <div className="modal-box rounded-none">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <div className="flex flex-col gap-8 rounded-none">
                          <h3 className="font-bold text-xl">Delete Skill</h3>
                          <p className="py-4 text-center text-4xl font-bold ">
                            Are You Sure ?
                          </p>
                          <button
                            className="btn bg-red-700 text-white hover:bg-red-700"
                            onClick={handleDelete}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </dialog>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SkillMod;
