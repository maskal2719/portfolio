import {
    axiosIcon,
    css3Icon,
    gitIcon,
    html5Icon,
    javascriptIcon,
    materialUiIcon,
    reactIcon,
    reduxIcon, sassIcon, typescriptIcon
} from "../utils/iscons";


type SkillsDataType = {
    path: string
    alt: string
};
export const skillsData: Array<SkillsDataType> = [
    {
        path: reactIcon,
        alt: 'React'
    },
    {
        path: axiosIcon,
        alt: 'Axios'
    },
    {
        path: css3Icon,
        alt: 'CSS3'
    },
    {
        path: html5Icon,
        alt: 'HTML5'
    },
    {
        path: gitIcon,
        alt: 'Git'
    },
    {
        path: javascriptIcon,
        alt: 'JavaScript'
    }, {
        path: materialUiIcon,
        alt: 'Material UI'
    },
    {
        path: reduxIcon,
        alt: 'Redux'
    },
    {
        path: sassIcon,
        alt: 'SASS'
    },
    {
        path: typescriptIcon,
        alt: 'TypeScript'
    },
]
