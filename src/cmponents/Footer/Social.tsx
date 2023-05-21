import React, {FC} from 'react';
import style from './Footer.module.css'

type SocialPropsType = {
    path: string
    alt: string
    link: string
}

const Social: FC<SocialPropsType> = ({path, alt, link}) => {
    return (
        <div className={style.socials}>
            <a href={link} className={style.socialLinks}>
                <img className={style.link} src={path} alt={alt}/>
            </a>
        </div>
    );
};

export default Social;