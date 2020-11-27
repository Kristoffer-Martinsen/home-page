import React from 'react';
import '../Stylesheets/AboutMe.css';
import meClimbing from '../Images/meClimbing.jpg';


function AboutMe() {
    return(
        <div className="AboutMe">
            <h1>About Me:</h1>
            <img src={meClimbing} alt='Me standing in front of a climbing wall.'></img>
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
    )
}

export default AboutMe;