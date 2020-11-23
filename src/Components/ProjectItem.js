import React from 'react';

function ProjectItem({nameProject, linkToProject, descriptionProject}) {
    return (
        <div className="ProjectItem">
            <h1>{nameProject}</h1>
            <h3>{linkToProject}</h3>
            <p>{descriptionProject}</p>
        </div>
    )
}

export default ProjectItem;