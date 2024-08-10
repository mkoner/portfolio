import React from 'react';
import './Banner.css';
import softSkills from '../../data/soft-skills';

const SoftSkillCard = ({ skill }) => {
    return (
        <div className="soft-skill container-column">
            <div className="soft-skill-icon">
                {skill.icon}
            </div>
            <div className="soft-skill-name">
                {skill.skill}
            </div>
        </div>
    );
};

const Image = () => {
    return (
        <div className="image-container">
            <img src="https://via.placeholder.com/150" alt="Profile" />
        </div>
    );
};

const About = () => {
    return (
        <div className="about-section container-column">
            <h2>Mamadou Koné</h2>
            <span>Software Engineer</span>
            <div className="soft-skills container-column">
                <p>Key Strengths</p>
                <div className="skills container-row">
                    {softSkills.map((skill, index) => (
                        <SoftSkillCard skill={skill} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const Banner = () => {
    return (
        <div className="banner container-row" id='about'>
            <Image />
            <About />
        </div>
    );
};

export default Banner;
