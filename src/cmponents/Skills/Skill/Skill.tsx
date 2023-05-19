import React from 'react';
import style from './Skill.module.css'

type SkillPropsType = {
    icon?: string
    alt?: string
}

export const Skill: React.FC<SkillPropsType> = ({icon, alt}) => {
    return (
        <div className={style.skill}>
            <img className={style.icon} src={icon} alt={alt}/>
        </div>
    );
};

