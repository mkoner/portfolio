import React from 'react';
import './Skills.css';
import skills from '../../data/skills';


const SkillCard = ({skill})=>{
    return (
        <article className="skill-card card">
            <h4> {skill.name} </h4>
            <div>
                <img src={skill.logo} alt={skill.name} />
            </div>
        </article>
    );
}

const Skills = () => {
    return (
        <main className="skills-container container-column" id='skills'>
            <h2 className='lightGreenColor'>Skills</h2>
            <section className="skills container-row">
                {skills.map((skill, index) => (
                    <SkillCard skill={skill}  key={index}/>
                ))}
            </section>
        </main>
    );
};

export default Skills;
