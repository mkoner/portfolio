import React from 'react';
import './Banner.css';
import softSkills from '../../data/soft-skills';
import profile from '../../profile.png'
import summary from '../../data/summary';

const SoftSkillCard = ({ skill }) => {
    return (
        <article className="soft-skill container-column">
            <div className="soft-skill-icon">
                {skill.icon}
            </div>
            <div className="soft-skill-name">
                {skill.skill}
            </div>
        </article>
    );
};

const Image = () => {
    return (
        <div className="image-container">
            <img src={profile} alt="Profile"/>
        </div>
    );
};

const About = () => {
    return (
        <main className="about-section container-column paleYellowColor">
            <h2>Mamadou Koné</h2>
            <div className='container-column'>
                <span>Software Engineer</span>
                <p> {summary} </p>
            </div>
            <div className="soft-skills container-column">
                <p className='paleYellowColor'>Key Strengths</p>
                <section className="skills container-row">
                    {softSkills.map((skill, index) => (
                        <SoftSkillCard skill={skill} key={index} />
                    ))}
                </section>
            </div>
        </main>
    );
};

const Banner = () => {
    return (
        <div className="banner container-row lightGreenBg" id='about'>
            <Image />
            <About />
        </div>
    );
};

export default Banner;
