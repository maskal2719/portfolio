import React from 'react';
import style from './Contact.module.css'
import styleContainer from "../../common/styles/Container.module.css";
import styleBlock from "../../common/styles/Block.module.css";
import {Title} from "../../common/components/Title/Title";

export const Contact = () => {
    return (
        <div className={`${style.contactBlock} ${styleBlock.block}`}>
            <div className={`${style.contactContainer} ${styleContainer.container}`}>
                <Title title={'Contact me'}/>
                <div className={style.contact}>
                    <form className={style.form}>
                        <input placeholder={'Full name'} type="text"/>
                        <input placeholder={'Email'} type="email"/>
                        <textarea placeholder={'Message'}></textarea>
                    </form>
                </div>
                <button className={style.btn} type={'submit'}>Post</button>
            </div>
        </div>
    );
};

