import Image from "next/image";
import { FaGithub } from 'react-icons/fa';

export interface Project {
    image: string;
    title: string;
    description: string;
    githubRepo: string;
    demoUrl?: string; // Optional property
}

interface ProjectCardProps {
    project: Project;
}


const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="flex border rounded-lg p-5 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
            {/* Image container with fixed width */}
            <div className="w-1/5 h-48 flex-none relative rounded-lg overflow-hidden">
                <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" />
            </div>

            {/* Content container with padding */}
            <div className="flex-grow ml-4">
                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-600 mb-4 text-base leading-relaxed">{project.description}</p>
                <div className="flex items-center">
                    {/* GitHub Icon */}
                    <a href={project.githubRepo} target="_blank" rel="noopener noreferrer" className="hoverable-icon mr-4">
                        <FaGithub className="text-black" size={28} />
                    </a>

                    {/* Demo Button - conditionally rendered if project.demoUrl is truthy */}
                    {project.demoUrl && (
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-white bg-blue-500 hover:bg-blue-600 rounded-lg px-4 py-2">
                            Demo
                        </a>
                    )}
                </div>
            </div>
        </div >
    );
};

export default ProjectCard;