import React from 'react';
import '../Stylesheets/ListOfProjects.css'
import CollectingParts from '../Images/CollectingParts.png'
import ProjectItem from './ProjectItem';

function ListOfProjects() {
    return (
            <div className="ListOfProjects">
                <h1 className="ProjectHeader">Projects:</h1>
                <ProjectItem nameProject="Collecting Parts" linkToProject="https://github.com/Kristoffer-Martinsen/Collecting-Parts"
                descriptionProject="My entry in the Ludum Dare 45 Game Jam. The Theme was 
                starting with nothing. My entry is a platformer where you have to collect all your abilities
                from jumping to shooting." pathToImage={CollectingParts}/>
            </div>
    )
}

export default ListOfProjects;