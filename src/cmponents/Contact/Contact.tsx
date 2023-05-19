import React from 'react';
import style from './Contact.module.css'
import styleContainer from "../../common/styles/Container.module.css";
import {Title} from "../../common/components/Title/Title";

export const Contact = () => {
    return (
        <div className={style.contactBlock}>
            <div className={`${style.contactContainer} ${styleContainer.container}`}>
                <Title title={'Contact'}/>
                <div className={style.contact}>
                    <form className={style.form}>
                        <input type="text"/>
                        <input type="text"/>
                        <textarea></textarea>
                    </form>
                </div>
                <button type={'submit'}>Post</button>
            </div>
        </div>
    );
};

