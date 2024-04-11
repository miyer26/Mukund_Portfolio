import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from 'react';

import Image from "next/image";
import { FaGithub } from 'react-icons/fa';

export interface Project {
  title: string;
  image: string;
  description: string;
  githubRepo: string;
}

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="border rounded-lg p-4">
      <div className="relative h-40">
        <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" />
      </div>
      <h2 className="text-lg font-bold mt-4 mb-2">{project.title}</h2>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex justify-between">
        <a href={project.githubRepo} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"><FaGithub className="mr-1" />GitHub</a>
        {/* Add more links/buttons here if needed */}
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <header className="bg-gray-900 text-white w-full py-4 absolute top-0">
      <div className="mx-auto flex items-center justify-end h-5 px-10">
        {<nav>
          <ul className="flex gap-10">
            <li><a href="/" className="hover:text-blue-500">Home</a></li>
            <li><a href="/projects" className="hover:text-blue-500">Projects</a></li>
            <li><a href="#" className="hover:text-blue-500">Portfolio</a></li>
            <li><a href="#" className="hover:text-blue-500">Blog</a></li>
          </ul>
        </nav>}
      </div>
    </header>

  );
};

const Footer = () => {
  return (
    < footer className="bg-gray-900 text-white py-4 absolute bottom-0 w-full" >
      <div className="justify-end text-center p-1">
        <p>&copy; {new Date().getFullYear()} Mukund Iyer. All rights reserved.</p>
      </div>
    </footer >
  )
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface RootLayoutProps {
  children: React.ReactNode;
  showTitle: boolean;
}

export default function RootLayout({ children, showTitle }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* Your head section content */}
      </head>
      <body className={inter.className}>
        <Navbar /> {/* Render the Navbar component here */}
        <div className="container mx-auto flex">
          {showTitle && <h1 className="text-3xl font-bold mb-8">Projects</h1>}
        </div>
        {children} {/* Render the page content here */}
        <Footer />
      </body>
    </html>
  );
}