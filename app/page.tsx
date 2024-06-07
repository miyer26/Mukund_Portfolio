import Image from "next/image";
import RootLayout from "./layout";

import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';


import ProjectsSection from './components/Projects/ProjectsSection';
import SkillsSection from './components/Skills/SkillsSection';

export default function Home() {
  return (
    <RootLayout>
      {/* Introduction */}
      <div className="flex flex-col justify-center items-center text-center min-h-screen">
        <div className="relative md:w-96 md:h-96">
          <Image src="/images/mukund.jpeg" alt="Your Name" layout="fill" objectFit="cover" />
        </div>
        <div className="container">
          <h1 className="text-5xl font-bold mb-0 mt-3">Mukund Iyer</h1>
          <p className="text-lg text-gray-600">Data Scientist | AI Enthusiast</p>
        </div>
        <div className="flex justify-center w-full mt-2">
          <a href="https://www.linkedin.com/in/mukund-iyer19/" target="_blank" rel="noopener noreferrer" className="mr-4"><FaLinkedin className="text-3xl hover:scale-110" /></a>
          <a href="https://github.com/miyer26" target="_blank" rel="noopener noreferrer" className="mr-4"><FaGithub className="text-3xl hover:scale-110" /></a>
          <a href="mailto:mukund.s.iyer@gmail.com" className="mr-4"><MdEmail className="text-3xl hover:scale-110" /></a>
        </div>
        <div className="md:w-96 container justify-fill w-60"><p className="text-gray-600 mt-2 flex-grow">Hi, welcome to my portfolio 👋
          Feel free to explore my projects or learn about my data science journey.
        </p></div>

      </div>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen bg-white py-10">
        <div className="container mx-auto px-4">
          <ProjectsSection />
        </div>
      </section>


      {/* Skills Section */}
      <section id="skills" className="min-h-screen bg-white py-10">
        <div className="container mx-auto px-4">
          <SkillsSection />
        </div>
      </section>


      {/* Navigation Links */}
      <div className="fixed bottom-3 right-1 transform -translate-x-1/2 bg-white shadow-md p-3 rounded-lg">
        <div className="flex space-x-5">
          <a href="#home" className="text-lg hover:text-blue-500">Home</a>
          <a href="#projects" className="text-lg hover:text-blue-500">Projects</a>
          <a href="#skills" className="text-lg hover:text-blue-500">Skills</a>
        </div>
      </div>

    </RootLayout>
  );
}