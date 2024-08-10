import React from 'react';
import './Projects.css';
import projects from '../../data/projects';


const ProjectCard = ({project}) => {
    return (
        <div className="project-card card">
                <h4> {project.name} </h4>
                <p> {project.description} </p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
    );
}



const Projects = () => {
    return (
        <div className="projects-container container-column">
            <h2>Projects</h2>
            <div className="projects container-row">
            {projects.map((project, index) => (
                    <ProjectCard project={project} key={index}/>
                ))}
            </div>
        </div>
    );
};

export default Projects;
