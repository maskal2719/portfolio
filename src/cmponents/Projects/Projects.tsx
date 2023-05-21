import React from 'react';
import style from './Projects.module.css'
import styleContainer from "../../common/styles/Container.module.css";
import styleBlock from "../../common/styles/Block.module.css"
import {Project} from "./Project/Project";
import {Title} from "../../common/components/Title/Title";
import {projectsData} from "../../data/projects";


export const Projects = () => {

    return (
        <div className={`${style.projectsBlock} ${styleBlock.block}`}>
            <div className={`${style.projectsContainer} ${styleContainer.container}`}>
                <Title title={'Projects'}/>
                <div className={style.projects}>
                    {
                        projectsData.map((el, index) => <Project
                            projectName={el.projectName}
                            description={el.description}
                            linkCode={el.linkCode}
                            linkPreview={el.linkPreview}
                            styleImg={{backgroundImage: `url(${el.img})`}}
                            key={index}
                        />)
                    }
                </div>
            </div>
        </div>
    );
};
