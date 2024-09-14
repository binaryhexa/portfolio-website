import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMui } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaBootstrap } from "react-icons/fa";

const skillsAndTools = [
  { name: "React", icon: <FaReact />, color: "#61DBFB" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS", icon: <FaCss3 />, color: "#1572B6" },
  { name: "JavaScript", icon: <IoLogoJavascript />, color: "#F7E03F" },
  { name: "TailwindCSS", icon: <RiTailwindCssFill />, color: "#38BDF8" },
  { name: "Material UI", icon: <SiMui />, color: "#0081CB" },
  { name: "VS Code", icon: <VscVscode />, color: "#007ACC" },
  { name: "Bootstrap", icon: <FaBootstrap />, color: "#563D7C" },
];

const SkillsAndTools = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8">
          Tools
        </h2>
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          style={{ justifyItems: "center" }}
        >
          {skillsAndTools.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center p-4 transition cursor-pointer duration-300 ${
                index === skillsAndTools.length - 1 ? "md:col-span-4" : ""
              }`}
              onMouseEnter={(e) => {
                e.currentTarget.querySelector(".icon").style.color = item.color;
                e.currentTarget.querySelector(".text").style.color = "#1f2937";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.querySelector(".icon").style.color = "gray";
                e.currentTarget.querySelector(".text").style.color = "gray";
              }}
            >
              <span className="icon text-gray-500 text-4xl mb-2 transition-transform hover:scale-110">
                {item.icon}
              </span>

              <span className="text text-gray-500 text-lg font-medium transition-colors">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsAndTools;
