import React from 'react';
import style from './Contact.module.css'
import styleContainer from "../../common/styles/Container.module.css";

export const Contact = () => {
    return (
        <div className={style.contactBlock}>
            <div className={`${style.contactContainer} ${styleContainer.container}`}>
                <h2>Contacts</h2>
                <div className={style.contact}>
                    <form className={style.form}>
                        <input type="text"/>
                        <input type="text"/>
                        <textarea></textarea>
                    </form>
                </div>
                <button>Post</button>
            </div>
        </div>
    );
};

