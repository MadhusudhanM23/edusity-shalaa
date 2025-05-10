import React from 'react'
import './About.css';
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';

const About = ({setPlayState}) => {
    return (
        <div className='about'>
            <div className='about-left'>
                <img src={about_img} alt="" className='about-img' />
                <img src={play_icon} alt="" className='play-icon' onClick={() =>{setPlayState(true)}} />
            </div>
            <div className='about-right'>
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>The University of Edinburgh, founded in 1582, is one of the oldest and most prestigious universities in the world, located in the heart of Scotland's vibrant capital city. 
                We offering a wide range of undergraduate, postgraduate, and research programs across disciplines such as science, engineering, humanities, and social sciences. </p>
            <p>The university is also known for its pioneering research initiatives and world-class faculty,making it a hub for intellectual growth and cultural exchange. 
                Would you like a similar paragraph about another university?</p>
            <p>Harvard is comprised of 13 schools and institutes, including the Harvard Business School, Harvard Law School, and the Harvard Medical School, each contributing
                 to its reputation as a leader in education, research, and public service. 
                The university's extensive library system, state-of-the-art research facilities, and vibrant campus culture create an environment where intellectual curiosity thrives. </p>
                </div>
        </div>
    )
}

export default About