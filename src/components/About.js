import React, { Component } from 'react';
import tmdbLogo from '../images/tmdbLogo.png';

class About extends Component {
    render() {
        return (
            <div>
                <h2>About</h2>
                <div className="about-desc">
                    <p>The Showtime movie application is a dynamic, up-to-date movie website built with React.js and Sass. This application uses The Movie DB API for fetching and displaying movie data but is not endorsed or certified by TMDb.</p>
                    <p>Developed by Denise Nguyen</p>
                    <img src={tmdbLogo} alt="TMDB Logo"></img>
                </div>
            </div>
        );
    }
}

export default About;
