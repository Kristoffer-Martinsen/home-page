import React from 'react';
import CollectingParts from '../Images/CollectingParts.png';
import Homepage from '../Images/home-page.png';
import ProjectItem from './ProjectItem';
import CardColumns from 'react-bootstrap/CardColumns';
import Container from 'react-bootstrap/Container';

function ListOfProjects() {
    const initalProjectList = [
        {
            id: "name",
            link: "link",
            description: "description",
            path: "Path to image",
            tag: "Tag"
        },
        
    ]

    return (
        <div className="ListOfProjects w-100">
            <h1 className="ProjectHeader">Projects:</h1>
            <Container fluid >
                <CardColumns>
                    <ProjectItem nameProject="Collecting Parts" linkToProject="https://github.com/Kristoffer-Martinsen/Collecting-Parts"
                    descriptionProject="My entry in the Ludum Dare 45 Game Jam. The Theme was 
                    starting with nothing. My entry is a platformer where you have to collect all your abilities
                    from jumping to shooting." pathToImage={CollectingParts}/>
                    <ProjectItem nameProject="This website!" linkToProject="https://github.com/Kristoffer-Martinsen/home-page"
                    descriptionProject="My portfolio website made with ReactJS (create-react-app) where
                        I show the projects I've made during my software developer journey." pathToImage={Homepage}/>
                </CardColumns>
            </Container>
        </div>
    )
}

export default ListOfProjects;