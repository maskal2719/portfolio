import React from 'react';
import style from './Projects.module.css'
import styleContainer from "../../common/styles/Container.module.css";
import {Project} from "./Project/Project";
import {Title} from "../../common/components/Title/Title";
import todoImg from "./../../assets/image/todo.jpg"
import socialNetworkImg from "./../../assets/image/socialNetwork.jpg"


export const Projects = () => {

    const socialNetwork = {
        backgroundImage: `url(${socialNetworkImg})`,
    }

    const todo = {
        backgroundImage: `url(${todoImg})`
    }

    return (
        <div className={style.projectsBlock}>
            <div className={`${style.projectsContainer} ${styleContainer.container}`}>
                <Title title={'Projects'}/>
                <div className={style.projects}>
                    <Project projectName={'Todo list'} img={todo} description={'any description'}/>
                    <Project projectName={'Social network'} img={socialNetwork} description={'any description'}/>
                    <Project projectName={'Social network'} description={'any description'}/>
                    <Project projectName={'Social network'} description={'any description'}/>
                    <Project projectName={'Social network'} description={'any description'}/>
                    <Project projectName={'Social network'} description={'any description'}/>
                </div>
            </div>
        </div>
    );
};
