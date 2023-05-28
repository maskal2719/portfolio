import React, {FC} from 'react';
import style from './Title.module.css'

type TitlePropsType = {
    title: string
}

export const Title: FC<TitlePropsType> = ({title}) => {
    return (
        <div>
            <h2 className={style.title}>{title}</h2>
        </div>
    );
};

