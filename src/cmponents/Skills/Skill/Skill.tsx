import React, {FC} from 'react';
import style from './Skill.module.css'

type SkillPropsType = {
    skillName: string
    description: string
}

export const Skill:React.FC<SkillPropsType> = ({skillName, description}) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
            <h3>{skillName}</h3>
            <div className={style.description}>
                {description}
            </div>
        </div>
    );
};

