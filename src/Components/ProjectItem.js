import React from 'react';

function ProjectItem({nameProject, linkToProject, descriptionProject, pathToImage}) {
    return (
        <div className="ProjectItem">
            <img src={pathToImage} alt='Screenshot of Collecting Parts'></img>
            <h1>{nameProject}</h1>
            <a href={linkToProject}>{linkToProject}</a>
            <p>{descriptionProject}</p>
        </div>
    )
}

export default ProjectItem;