import React from 'react';
import '../Stylesheets/ProjectItem.css';

function ProjectItem({nameProject, linkToProject, descriptionProject, pathToImage}) {
    return (
        <a href={linkToProject} className="ProjectItem">
            <img src={pathToImage} alt='Screenshot of Collecting Parts'></img>
            <h1>{nameProject}</h1>
            <p>{descriptionProject}</p>
        </a>
    )
}

export default ProjectItem;