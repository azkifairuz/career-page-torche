import { useState } from "react";
import { X } from "react-bootstrap-icons";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Firebase",
  "AWS",
  "Microsoft Azure",
  "UI/UX Design",
  "Photoshop",
  "Illustrator",
  "Sketch",
  "Figma",
  "InVision",
  "Git",
  "Jira",
  "Agile",
];

export default function SkillPopup(props) {
  const { onclick } = props;
  const [selectedSkills, setSelectedSkills] = useState([]);


  function handleCheckboxChange(e) {
    const skill = e.target.value;
    if (e.target.checked) {
      setSelectedSkills([...selectedSkills, skill]);
    } else {
      setSelectedSkills(
        selectedSkills.filter((selected) => selected !== skill)
      );
    }
  }

  function handleDelete(select) {
    console.log(select)
     setSelectedSkills((prevSkill)=>
      prevSkill.filter((skill)=>skill !== select)
     )
  }

  function isChecked(skill) {
    return selectedSkills.includes(skill)
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Selected skills:", selectedSkills);
  }

  return (
    <div className="card">
      <div className="card-header">
        <form className="rounded-lg z-50 w-[537px] bg-white" onSubmit={handleSubmit}>
          <div className="p-[16px_32px_16px_32px] border-b border-neutral-400 flex items-center justify-between">
            <h1 className="heading-s-bold">Skill</h1>
            <X
              size={25}
              color="#727272"
              className="cursor-pointer"
              onClick={onclick}
            />
          </div>
          <div className="px-[32px]  py-[16px] flex flex-col gap-[16px]">
            <input
              type="text"
              placeholder="e.g.Javascript"
              className="w-full placeholder:text-neutral-500 rounded-lg py-2 px-4 border focus:outline-none focus:border-primaryBlue-main border-neutral-500"
            />
            <div className="grid grid-cols-2 h-[196px] overflow-scroll border-b-2 pb-4 px-2">
              {skills.map((skill) => (
                <label key={skill}>
                  <div className="flex gap-2 mt-3">
                    <input
                      type="checkbox"
                      value={skill}
                      onChange={handleCheckboxChange}
                      checked={isChecked(skill)}
                      className="h-6 w-6 rounded-[4px] border border-neutral-500"
                    />
                    <p className="text-l-regular">{skill}</p>
                  </div>
                </label>
              ))}
            </div>
            <div className="">
              {selectedSkills.length === 0 ? (
                <p>Please select some skills</p>
              ) : (
                <ul className="grid grid-cols-2 gap-4">
                  {selectedSkills.map((skill) => (
                    <li onClick={()=>handleDelete(skill)} className="p-[8px_16px_8px_16px] w-fit text-white text-l-regular bg-primaryBlue-main rounded-lg flex gap-[8px] justify-between items-start" key={skill}>{skill}<X  size={30}/></li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="w-full border-t border-neutral-400 py-[16px] px-[32px] gap-[16px] flex justify-end items-center">
            <button
              onClick={onclick}
              type="button"
              className="py-[9px] px-[16px] hover:bg-neutral-300 font-rajdhani border border-neutral-700 rounded-lg"
            >
              Cancel
            </button>
            <button className="py-[9px] px-[24px] font-rajdhani bg-primaryBlue-main text-white active:bg-primaryBlue-pressed hover:bg-primaryBlue-hover rounded-lg">
              Save
            </button>
          </div>
        </form>
     
      </div>
    </div>
  );
}
