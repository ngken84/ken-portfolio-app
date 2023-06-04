import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <header className='header-container'>
            <div className="container">
                <div className="header">
                    
                    
                    <NavLink className="header-title" to="/">Ken's Portfolio</NavLink>

                    <nav>
                        <NavLink className="header__link" to="/resume">Resume</NavLink>
                        <NavLink className="header__link" to="/modules">Modules</NavLink>
                        <NavLink className="header__link" to="/gallery">Gallery</NavLink>
                    </nav>
                    
                </div>
            </div>
           
        </header>
    );
}

export default Header;