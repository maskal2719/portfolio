import {
    gitSocial, instaSocial,
    linkedinSocial,
    telegaSocial, vkSocial
} from "../utils/iscons";


type SocialsDataType = {
    path: string
    alt: string
    link: string
};
export const socialsData: Array<SocialsDataType> = [
    {
        path: gitSocial,
        alt: 'Git',
        link: ''
    },
    {
        path: instaSocial,
        alt: 'Instagram',
        link: ''
    },
    {
        path: vkSocial,
        alt: 'VK',
        link: ''
    },
    {
        path: telegaSocial,
        alt: 'Telegram',
        link: ''
    },
    {
        path: linkedinSocial,
        alt: 'Linkedin',
        link: ''
    }
]
