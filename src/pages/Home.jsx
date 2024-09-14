import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import SkillsAndTools from "../components/SkillsAndTools";
import selfPict from "../assets/images/selfPict.JPG";
import Contact from "../components/Contact";
import SocialMediaBox from "../components/SocialMediaBox";
import RB from "../assets/images/rb.jpg"

const Home = () => {
  useEffect(() => {
    function createRandomCircle() {
      const circle = document.createElement("div");
      const size = 150;
      const top = Math.random() * 50;
      const left = Math.random() * 100;

      circle.classList.add("circle");
      circle.style.width = `${size}px`;
      circle.style.height = `${size}px`;
      circle.style.top = `${top}%`;
      circle.style.left = `${left}%`;

      document.body.appendChild(circle);
    }

    for (let i = 0; i < 10; i++) {
      createRandomCircle();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(".fade-in");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div id="home">
      <Header />
      <main className="container py-32 px-8">
        <section
          id="about"
          className="text-left my-10 flex justify-between gap-4 fade-in"
        >
          <div className="flex items-start flex-col w-1/2">
            <h2 className="text-4xl font-semibold">Hi, Everyone!</h2>
            <p className="mt-4">
              I am <span className="text-lg font-semibold">Muhammad Al-Giffari</span>, a dedicated frontend developer with a
              deep passion for crafting modern, responsive web applications. My
              journey in web development is driven by a commitment to creating
              intuitive user experiences and leveraging the latest technologies
              to build seamless, high-performance websites. I thrive on turning
              complex design challenges into elegant, functional solutions, and
              I am constantly exploring new tools and methodologies to stay at
              the forefront of the industry. My goal is to deliver exceptional
              digital experiences that not only meet but exceed user
              expectations.
            </p>
          </div>
          <img
            src={selfPict}
            className="rounded-xl h-[450px] w-[450px] object-cover"
          />
        </section>

        <section id="projects" className="my-10 fade-in">
          <h2 className="text-4xl font-semibold text-center md:text-center">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10 justify-center">
            <ProjectCard
              title="Project Verstappen"
              description="A description of Project 1."
              image={RB}
              link="#"
            />
            <ProjectCard
              title="Project 2"
              description="A description of Project 2."
              image="https://via.placeholder.com/150"
              link="#"
            />
            <ProjectCard
              title="Project 3"
              description="A description of Project 3."
              image="https://via.placeholder.com/150"
              link="#"
            />
          </div>
        </section>

        <section id="skills" className="my-10 fade-in">
          <SkillsAndTools />
        </section>

        <section id="contact" className="my-10 fade-in flex gap-10">
          <SocialMediaBox />
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
