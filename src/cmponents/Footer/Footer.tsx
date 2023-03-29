import React from 'react';
import style from './Footer.module.css'
import styleContainer from "../../common/styles/Container.module.css";
export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${style.footerContainer} ${styleContainer.container}`}>
                <h2>Stanislav Moskalenko</h2>
                <div className={style.links}>
                    <div className={style.link}></div>
                    <div className={style.link}></div>
                    <div className={style.link}></div>
                    <div className={style.link}></div>
                </div>
                <span>все права защищены</span>
            </div>
        </div>
    );
};