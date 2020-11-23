import React from 'react';
import '../Stylesheets/ListOfProjects.css'
import ProjectItem from './ProjectItem';

function ListOfProjects() {
    return (
        <div className="ListOfProjects">
            <ProjectItem nameProject="Project 1" linkToProject="www,link1,com"
            descriptionProject="Neque porro quisquam est qui dolorem ipsum quia 
            dolor sit amet, consectetur, adipisci velit.."/>
         </div>
    )

}

export default ListOfProjects;