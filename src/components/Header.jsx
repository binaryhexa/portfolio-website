import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full bg-transparent backdrop-blur-lg text-black py-4 px-8 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#">
          <h1 className="text-3xl font-semibold hover:text-blue-500 transition-all">a</h1>
        </a>
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none z-50"
        >
          {isOpen ? (
            <AiOutlineClose className="text-black text-2xl" />
          ) : (
            <AiOutlineMenu className="text-black text-2xl" />
          )}
        </button>

        <ul className="hidden md:flex space-x-6 font-semibold text-lg">
          <li>
            <a href="#home" className="hover:text-blue-500 transition-all">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-500 transition-all">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-500 transition-all">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-500 transition-all">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden absolute top-16 left-0 w-full bg-gray-900 transition-all duration-300 ease-in-out z-40`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4 text-white">
          <li>
            <a
              href="#home"
              className="hover:text-blue-500 transition-all"
              onClick={toggleMenu}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-blue-500 transition-all"
              onClick={toggleMenu}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-blue-500 transition-all"
              onClick={toggleMenu}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-blue-500 transition-all"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
