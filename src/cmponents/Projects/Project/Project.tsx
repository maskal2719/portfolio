import React, {FC} from 'react';
import style from './Project.module.css'

type ProjectPropsType = {
    projectName: string
    description: string
    img?: string
}

export const Project:React.FC<ProjectPropsType> = ({projectName, description, img}) => {
    return (
        <div className={style.project}>
            <div className={style.img}>
                <button>View</button>
            </div>
            <h3 className={style.projectName}>{projectName}</h3>
            <div className={style.description}>
                {description}
            </div>
        </div>
    );
};

