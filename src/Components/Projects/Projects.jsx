import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";

const projects = [
    {
        name: "Project One",
        image: "https://via.placeholder.com/400x300/ff7f7f/333333?text=Project+One",
        description: "This is a brief description of Project One.",
        techStack: "React, Node.js, MongoDB",
        liveLink: "#",
        githubLink: "#"
    },
    {
        name: "Project Two",
        image: "https://via.placeholder.com/400x300/7f7fff/333333?text=Project+Two",
        description: "This is a brief description of Project Two.",
        techStack: "Vue, Firebase, Tailwind CSS",
        liveLink: "#",
        githubLink: "#"
    },
    {
        name: "Project Three",
        image: "https://via.placeholder.com/400x300/7fff7f/333333?text=Project+Three",
        description: "This is a brief description of Project Three.",
        techStack: "Angular, Express, MySQL",
        liveLink: "#",
        githubLink: "#"
    }
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div id="projects" className="py-16 px-8 md:px-24 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
            <motion.h3
                className="text-4xl md:text-5xl font-bold text-center mb-12"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Projects
            </motion.h3>

            <div className="grid md:grid-cols-3 gap-10">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="bg-gray-700 rounded-lg shadow-lg p-6 text-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                    >
                        <img src={project.image} alt={project.name} className="w-full h-40 object-cover rounded-lg mb-4" />
                        <h4 className="text-2xl font-semibold text-blue-400 mb-4">{project.name}</h4>
                        <button 
                            onClick={() => setSelectedProject(project)}
                            className="text-green-400 text-lg font-semibold hover:underline"
                        >
                            View More / Details
                        </button>
                        <div className="flex justify-center gap-4 mt-4">
                            <a href={project.liveLink} className="text-yellow-400 text-2xl" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /></a>
                            <a href={project.githubLink} className="text-gray-300 text-2xl" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        </div>
                    </motion.div>
                ))}
            </div>

            {selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
                    <motion.div 
                        className="bg-white text-black p-6 rounded-lg shadow-lg max-w-lg relative"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <button 
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-4 right-4 text-gray-700 text-2xl"
                        >
                            <FaTimes />
                        </button>
                        <img src={selectedProject.image} alt={selectedProject.name} className="w-full h-60 object-cover rounded-lg mb-4" />
                        <h4 className="text-2xl font-semibold text-blue-600 mb-2">{selectedProject.name}</h4>
                        <p className="text-gray-700 mb-4">{selectedProject.description}</p>
                        <p className="text-gray-800 font-semibold mb-4">Tech Stack: {selectedProject.techStack}</p>
                        <div className="flex justify-center gap-4">
                            <a href={selectedProject.liveLink} className="text-yellow-500 text-2xl" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /></a>
                            <a href={selectedProject.githubLink} className="text-gray-600 text-2xl" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default Projects;
