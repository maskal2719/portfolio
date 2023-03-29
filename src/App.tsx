import React from 'react';
import './App.css';
import {Header} from "./cmponents/Header/Header";
import {Main} from "./cmponents/Main/Main";
import {Skills} from "./cmponents/Skills/Skills";
import {Projects} from "./cmponents/Projects/Projects";
import {Contact} from "./cmponents/Contact/Contact";
import {Footer} from "./cmponents/Footer/Footer";

function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App

