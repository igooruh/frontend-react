import React, { useState } from 'react';

import './App.css';
import backgroundImage from './assets/background.jpeg';

import Header from './components/Header';

function App() {
    const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

    const handleAddProject = () => {
        setProjects([...projects, `Novo projeto ${Date.now()}`]);
    }

    return (
        <>
            <Header title='Projects' />

            <img width={500} src={backgroundImage} />

            <ul>
                { projects.map(project => <li key={project}>{ project }</li>) }
            </ul>

            <button type='button' onClick={handleAddProject}>Adiocionar projeto</button>
        </>
    );   
}

export default App;