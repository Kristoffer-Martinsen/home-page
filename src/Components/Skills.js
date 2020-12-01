import React from 'react';
import '../Stylesheets/Skills.css';

function Skills() {
    return(
        <div className="Skills">
            <h1>Skills:</h1>
            <div className="Languages">
                <h2>Languages</h2>
                <h3>Java</h3>
                <h3>C#</h3>
                <h3>JavaScript</h3>
                <h3>HTML5</h3>
                <h3>CSS</h3>
            </div>
            <div className="Technology">
                <h2>Technology</h2>
                <h3>Git</h3>
                <h3>Jira</h3>
                <h3>Confluence</h3>
                <h3>Vs Code</h3>
                <h3>IntelliJ</h3>
            </div>
            <div className="Other">
                <h2>Other</h2>
                <h3>Agile methods</h3>
                <h3>SCRUM</h3>
            </div>
        </div>
    )
}

export default Skills;