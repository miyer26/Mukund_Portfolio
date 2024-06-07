import ProjectCard, { Project } from "./ProjectCard";

const projectsData: Project[] = [
    {
        title: "Pneumonia Detection API",
        image: "/images/x-ray.jpeg",
        description: "Description of Project 1",
        githubRepo: "https://github.com/miyer26/pnuemonia-detection-app",
        demoUrl: "https://google.com"
    },
    {
        title: "Project 2",
        image: "/images/project2.jpg",
        description: "Description of Project 2",
        githubRepo: "https://github.com/username/project2"
    },
    // Add more projects as needed
];

export default function ProjectSection() {
    return (
        <div className="flex flex-col justify-start px-2">
            <h1 className="text-3xl font-bold mb-2 text-center">Projects</h1>
            <div className="text-lg mb-8 text-center"> Projects to explore various domains</div>
            <div className="grid grid-cols-1 gap-5">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
}