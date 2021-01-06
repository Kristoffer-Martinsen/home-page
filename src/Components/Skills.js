import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

function Skills() {
    return(
        <div className="Skills">
            <h1>Skills:</h1>
            <Container fluid>
                <Row>
                    <Col>
                        <h2>Languages</h2>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Java</ListGroup.Item>
                            <ListGroup.Item>C#</ListGroup.Item>
                            <ListGroup.Item>JavaScript</ListGroup.Item>
                            <ListGroup.Item>HTML5</ListGroup.Item>
                            <ListGroup.Item>CSS</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col>
                        <h2>Technology</h2>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Git</ListGroup.Item>
                            <ListGroup.Item>Jira</ListGroup.Item>
                            <ListGroup.Item>Confluence</ListGroup.Item>
                            <ListGroup.Item>Visual Studio Code</ListGroup.Item>
                            <ListGroup.Item>IntelliJ</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col>
                        <h2>Other</h2>
                        <ListGroup variant="flush">
                        <ListGroup.Item>Agile Methods</ListGroup.Item>
                        <ListGroup.Item>SCRUM</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Skills;