import ProjectCard, { Project } from "./ProjectCard";

const projectsData: Project[] = [
    {
        title: "Pneumonia Detection",
        image: "/images/x-ray.jpeg",
        description: "I have always wanted to understand the impact of computer vision in the medical field. \
        In this project, I've developed a simple API, intended for use by doctors, which determined if a\
        chest x-ray shows signs of pneumonia.",
        githubRepo: "https://github.com/miyer26/pnuemonia-detection-app",
        demoUrl: "https://google.com"
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