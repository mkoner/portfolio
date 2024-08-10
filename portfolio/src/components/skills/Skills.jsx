import React from 'react';
import './Skills.css';
import skills from '../../data/skills';


const SkillCard = ({skill})=>{
    return (
        <div className="skill-card card">
            <h4> {skill.name} </h4>
            <div>
                <img src={skill.logo} alt={skill.name} />
            </div>
        </div>
    );
}

const Skills = () => {
    return (
        <div className="skills-container container-column" id='skills'>
            <h2>Skills</h2>
            <div className="skills container-row">
                {skills.map((skill, index) => (
                    <SkillCard skill={skill}  key={index}/>
                ))}
            </div>
        </div>
    );
};

export default Skills;
