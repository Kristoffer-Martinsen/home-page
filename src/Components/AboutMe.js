import React from 'react';
import meClimbing from '../Images/meClimbing.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function AboutMe() {
    return(
        <div className="AboutMe">
            <div className="w-auto m-3">
                <Row>
                    <Col xs="auto">
                        <Image src={meClimbing} rounded style={{width: "18rem"}}/>
                    </Col>
                    <Col>
                        <div className="AboutMeText">
                            <h1>About Me:</h1>
                            <p>
                                I am a graduate who finished his bachelor in Computer Engineering 
                                at the Norwegian University of Science and Technology and I stayed 
                                two years in Milano studying at the State University of Milan. Now I 
                                am looking for new opportunities in the Oslo or Trondheim area. I am interested in 
                                fullstack development. I am an open and kind person who is looking for 
                                opportunities in Computer Engineering, programming and software development. 
                                I am social, positive and enjoy being around people and I am always interested 
                                in social gatherings.
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
            
        </div>
    )
}

export default AboutMe;