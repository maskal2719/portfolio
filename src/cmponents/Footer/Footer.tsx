import React from 'react';
import style from './Footer.module.css'
import styleContainer from "../../common/styles/Container.module.css";
import styleBlock from "../../common/styles/Block.module.css";
import {Title} from "../../common/components/Title/Title";
import {socialsData} from "../../data/social";
import Social from "./Social";

export const Footer = () => {
    return (
        <div className={`${style.footerBlock} ${styleBlock.block}`}>
            <div className={`${style.footerContainer} ${styleContainer.container}`}>
                <Title title={'Socials'}/>
                <div className={style.links}>
                    {
                        socialsData.map((el, index) => <Social key={index} link={el.link} alt={el.alt} path={el.path}/>)
                    }
                </div>
                <span>все права защищены</span>
            </div>
        </div>
    );
};
