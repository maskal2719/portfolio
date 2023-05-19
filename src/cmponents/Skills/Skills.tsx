import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";
import {Title} from "../../common/components/Title/Title";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${style.skillsContainer} ${styleContainer.container}`}>
                <Title title={'Skills'}/>
                <div className={style.skills}>
                    <Skill skillName={'react'} description={'any description'}/>
                    <Skill skillName={'angular'} description={'any description'}/>
                    <Skill skillName={'type script'} description={'any description'}/>
                </div>
            </div>
        </div>
    );
};

