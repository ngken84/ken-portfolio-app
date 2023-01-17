import React from 'react';

import MainPageLink from '../components/MainPageLink';

import {ReactComponent as FileText} from '../img/SVG/file-text2.svg';
import {ReactComponent as Embed2} from '../img/SVG/embed2.svg';
import {ReactComponent as Images} from '../img/SVG/images.svg';
import {ReactComponent as ListSvg} from '../img/SVG/list.svg';
import {ReactComponent as UserTie} from '../img/SVG/user-tie.svg';

const HomePage = () => {

    return (
        <div className="home-page">
            <header className="main-header">
                <div className="main-header__header-box">
                    <div className="main-header__header-box-subtitle">
                        A Portfolio App by
                    </div>
                    <div className="main-header__header-box-title">
                        Ken Ng
                    </div>
                </div>
            </header>
            <main>
                <div className="home-page__links">
                    <MainPageLink
                        to="./resume"
                        name="Resume"
                        description="Check out my resume! It's cool! I promise..."
                        icon={
                            <FileText/>
                        }/>
                    <MainPageLink
                        to="./modules"
                        name="Modules"
                        description="Check out these modules! I made some stuff!"
                        icon={
                            <Embed2/>
                        }/>
                    <MainPageLink
                        to="./gallery"
                        name="Gallery"
                        description="Here are some cool pictures!"
                        icon={
                            <Images/>
                        }/>
                    <MainPageLink
                        to="./resources"
                        name="Resources"
                        description="List of useful links! Useful stuff for building apps"
                        icon={
                            <ListSvg/>
                        }/>
                    <MainPageLink
                        to="./resume"
                        name="Resume"/>
                    <MainPageLink
                        to="./about"
                        name="About Me"
                        description="Stuff about me and this website. Check it out!"
                        icon={
                            <UserTie/>
                        }/>
                    
                </div>
                
            </main>
            <footer>
                <div className="home-footer">
                        Footers
                </div>
            </footer>
        </div>
    );
}

export default HomePage;