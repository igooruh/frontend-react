import React, { useState } from 'react';

import Header from './components/Header';

function App() {
    const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

    const handleAddProject = () => {
        setProjects([...projects, `Novo projeto ${Date.now()}`]);
    }

    return (
        <>
            <Header title='Projects' />

            <ul>
                { projects.map(project => <li key={project}>{ project }</li>) }
            </ul>

            <button type='button' onClick={handleAddProject}>Adiocionar projeto</button>
        </>
    );   
}

export default App;