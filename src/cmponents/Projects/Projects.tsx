import React from 'react';
import style from './Projects.module.css'
import styleContainer from "../../common/styles/Container.module.css";
import {Project} from "./Project/Project";


export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${style.skillsContainer} ${styleContainer.container}`}>
                <h2>My Projects</h2>
                <div className={style.projects}>
                    <Project projectName={'TODOLIST'} description={'any description'}/>
                    <Project projectName={'Social network'} description={'any description'}/>
                </div>
            </div>
        </div>
    );
};