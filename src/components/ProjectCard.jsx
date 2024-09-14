/* eslint-disable react/prop-types */
const ProjectCard = ({ title, description, image, link }) => {
  return (
    <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg">
      <img className="w-full object-cover h-[350px]" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-semibold text-xl mb-2">{title}</div>
        <p className="text-base">{description}</p>
      </div>
      <div className="px-6 pt-2 pb-6">
        <button className="bg-blue-500 p-2 px-6 rounded-full hover:bg-blue-700 transition-all text-white">
          <a href={link}>View Project</a>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
