import React from 'react';
import Header from '../components/Header';

const AboutMePage = () => {

    return (
        <>
            <Header/>

            <div className="aboutme-container">
                <div className="aboutme-header__container">
                    <h1 className="aboutme-header__title">About Me</h1>
                </div>
                
                <div className="aboutme-description">
                    <div className="aboutme-description__pane">
                        <h2 className="aboutme-description__title">About the site</h2>
                        <p className="aboutme-description__paragraph">I created this website to showcase and improve my fluency with the React framework and styling sites using advanced CSS and SASS.</p>
                        <p className="aboutme-description__paragraph">Some features that I used are </p>
                    </div>
                    <div className="aboutme-description__pane">
                        <br/>
                        <br/>
                        <h3>Technologies Used</h3>
                        <ul>
                            <li>React</li>
                            <li>SASS</li>
                            <li>Jest Testing Framework</li>
                        </ul>
                    </div>
                </div>
                <div className="aboutme-profile">
                    Test
                </div>
            </div>
        </>
        
    );

}

export default AboutMePage;