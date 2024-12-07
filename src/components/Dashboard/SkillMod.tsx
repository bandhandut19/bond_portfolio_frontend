/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TSkill } from "../utils/types";

const SkillMod = () => {
  let serialNo = 0;
  const [skills, setSkills] = useState([]);
  const [skillId, setSkillId] = useState("");

  const openModal = (id: string) => {
    setSkillId(id);
    const modal = document.getElementById(
      "my_modal_3"
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
  const fetchSkills = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/portfolio/skills/skill"
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
        );
        console.log(res);
        closeModal();
        fetchSkills();
      } catch (err: any) {
        console.log(err);
      }
    }
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
                    <button className="btn">Update</button>
                    {/* DELETE */}
                    <button
                      className="btn"
                      onClick={() => openModal(skill._id as string)}
                    >
                      Delete
                    </button>

                    <dialog id="my_modal_3" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <div className="flex flex-col gap-8">
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
