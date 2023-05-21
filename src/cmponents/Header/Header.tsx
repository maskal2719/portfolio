import React from 'react';
import {Nav} from '../Nav/Nav';
import style from './Header.module.css'
import styleContainer from "../../common/styles/Container.module.css";


export const Header = () => {
    return (
        <div className={style.header}>
            <div className={styleContainer.container}>
                <img src="" alt=""/>
                <Nav/>
            </div>
        </div>
    );
};