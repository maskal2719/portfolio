import {socialNetworkImg, todoImg} from "../utils/images";


type ProjectsDataType = {
    projectName: string
    img: string
    linkCode: string
    linkPreview: string
    description: string
};

export const projectsData: Array<ProjectsDataType> = [
    {
        projectName: 'Social Network',
        img: socialNetworkImg,
        linkCode: '',
        linkPreview: '',
        description: 'Social Network is an online platform that allows people to create an account and interact with other people on the website. Users can build there virtual world on the site, make friends and share their thoughts and ideas by writing a post.'
    },
    {
        projectName: 'ToDo List',
        img: todoImg,
        linkCode: '',
        linkPreview: '',
        description: 'ToDo List is an online platform for organizing your personal or work tasks which can help you to increase the productivity, prioritise tasks, manage tasks effectively and improve time management.'
    },
    {
        projectName: 'Counter',
        img: socialNetworkImg,
        linkCode: '',
        linkPreview: '',
        description: 'Counter is a test project which (to tell the truth) doesn\'t have a lot of practical use. It allows to do some settings which influence on the way how the counter works.'
    },
    {
        projectName: 'Social Network',
        img: todoImg,
        linkCode: '',
        linkPreview: '',
        description: 'Social Network is an online platform that allows people to create an account and interact with other people on the website. Users can build there virtual world on the site, make friends and share their thoughts and ideas by writing a post.'
    },
    {
        projectName: 'ToDo List',
        img: socialNetworkImg,
        linkCode: '',
        linkPreview: '',
        description: 'ToDo List is an online platform for organizing your personal or work tasks which can help you to increase the productivity, prioritise tasks, manage tasks effectively and improve time management.'
    },
    {
        projectName: 'Counter',
        img: todoImg,
        linkCode: '',
        linkPreview: '',
        description: 'Counter is a test project which (to tell the truth) doesn\'t have a lot of practical use. It allows to do some settings which influence on the way how the counter works.'
    },
]
