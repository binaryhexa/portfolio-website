import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialMediaBox = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto max-w-lg text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Keep in Touch with Me!
        </h2>
        <p className="text-gray-700 mb-8">
          I would be thrilled to connect and stay in touch with you. Feel free
          to follow me on my social media profiles below to keep up with my
          latest updates, projects, and insights. I look forward to engaging
          with you and sharing our experiences!
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/binaryhexa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-600 transition-colors"
            aria-label="Visit my GitHub profile"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/al-giffari/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-500 transition-colors"
            aria-label="Visit my LinkedIn profile"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaBox;
