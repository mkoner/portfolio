import React from 'react';
import './Projects.css';
import projects from '../../data/projects';


const ProjectCard = ({project}) => {
    return (
        <div className="project-card">
                <h4> {project.name} </h4>
                <p> {project.description} </p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
    );
}



const Projects = () => {
    return (
        <div className="projects">
            <h2>Projects</h2>
                {projects.map((project, index) => (
                    <ProjectCard project={project} key={index}/>
                ))}
        </div>
    );
};

export default Projects;
