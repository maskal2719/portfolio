import React, {FC} from 'react';
import style from './Project.module.css'

type ProjectPropsType = {
    projectName: string
    description: string
    linkCode: string
    linkPreview: string
    styleImg: {
        backgroundImage: string
    }
}

export const Project: FC<ProjectPropsType> = ({projectName, description, styleImg, linkPreview, linkCode}) => {
    return (
        <div className={style.project}>
            <div className={style.imgContainer} style={styleImg}></div>
            <div className={style.projectDetails}>
                <h3 className={style.projectName}>{projectName}</h3>
                <div className={style.description}>
                    {description}
                </div>
                <div className={style.btns}>
                    <LinkToProject link={linkCode} name={'Code'}/>
                    <LinkToProject link={linkPreview} name={'Preview'}/>
                </div>
            </div>
        </div>
    );
};


type LinkToProjectPropsType = {
    link: string
    name: string
}
const LinkToProject: FC<LinkToProjectPropsType> = ({link, name}) => {
    return (
        <a href={link} className={style.viewBtn}>{name}</a>
    )
}

