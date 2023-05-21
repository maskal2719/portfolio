import React from 'react';
import style from './Main.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import styleBlock from "../../common/styles/Block.module.css";
import {programmerImg} from "../../utils/images";

export const Main = () => {
    return (
        <div className={`${style.mainBlock} ${styleBlock.block}`}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span className={style.topTitle}>Hello, I’m</span>
                    <h1 className={style.title}>Stanislav Moskalenko</h1>
                    <p className={style.bottomTitle}>Front-end developer</p>
                </div>
                <div className={style.photo}>
                    <img src={programmerImg} alt="programmer"/>
                </div>
            </div>
        </div>
    );
};

