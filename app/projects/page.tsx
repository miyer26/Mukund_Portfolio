import Image from "next/image";
import RootLayout from "../layout";
import { Project, ProjectCard } from "../layout";


import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const projectsData: Project[] = [
  {
    title: "Project 1",
    image: "/images/project1.jpg",
    description: "Description of Project 1",
    githubRepo: "https://github.com/username/project1"
  },
  {
    title: "Project 2",
    image: "/images/project2.jpg",
    description: "Description of Project 2",
    githubRepo: "https://github.com/username/project2"
  },
  // Add more projects as needed
];

export default function Home() {
  return (
    <RootLayout showTitle={true}>
      <div className="flex flex-col justify-start min-h-screen">
        <h1 className="text-3xl font-bold mb-8 text-center">Projects</h1>
        <div className="grid grid-cols-1 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </RootLayout>
  );
}