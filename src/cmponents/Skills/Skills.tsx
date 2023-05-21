import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import styleBlock from "../../common/styles/Block.module.css"
import {Skill} from "./Skill/Skill";
import {Title} from "../../common/components/Title/Title"
import {skillsData} from "../../data/icons"

export const Skills = () => {
    return (
        <div className={`${style.skillsBlock} ${styleBlock.block}`}>
            <div className={`${style.skillsContainer} ${styleContainer.container}`}>
                <Title title={'Skills'}/>
                <div className={style.skills}>
                    {
                        skillsData.map((el, index) => <Skill icon={el.path} alt={el.alt} key={index}/>)
                    }
                </div>
            </div>
        </div>
    );
};

