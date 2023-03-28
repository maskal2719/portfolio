import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../../common/styles/Container.module.css'

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${style.skillsContainer} ${styleContainer.container}`}>
                <h2>My Skills</h2>
                <div className={style.skills}>

                </div>
            </div>
        </div>
    );
};

