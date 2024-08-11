import React from 'react';
import './Projects.css';
import projects from '../../data/projects';


const ProjectCard = ({project}) => {
    return (
        <article className="project-card card">
                <h4 className='lightGreenColor'> {project.name} </h4>
                <p> {project.description} </p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className='lightGreenColor'>View on GitHub</a>
        </article>
    );
}



const Projects = () => {
    return (
        <main className="projects-container container-column" id='projects'>
            <h2 className='darkGreenColor'>Projects</h2>
            <section className="projects container-row">
            {projects.map((project, index) => (
                    <ProjectCard project={project} key={index}/>
                ))}
            </section>
        </main>
    );
};

export default Projects;
