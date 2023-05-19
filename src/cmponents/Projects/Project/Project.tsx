import React, {FC} from 'react';
import style from './Project.module.css'

type ProjectPropsType = {
    projectName: string
    description: string
    img?: {}
}

export const Project: FC<ProjectPropsType> = ({projectName, description, img}) => {
    return (
        <div className={style.project}>
            <div className={style.imgContainer} style={img}>

            </div>
            <div className={style.projectDetails}>
                <h3 className={style.projectName}>{projectName}</h3>
                <div className={style.description}>
                    {description}
                </div>
                <a href='#' className={style.viewBtn}>View</a>
            </div>
        </div>
    );
};

