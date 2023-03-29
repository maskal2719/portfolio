import React from 'react';
import './App.css';
import {Header} from "./cmponents/Header/Header";
import {Main} from "./cmponents/Main/Main";
import {Skills} from "./cmponents/Skills/Skills";
import {Projects} from "./cmponents/Projects/Projects";

function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
        </div>
    );
}

export default App

