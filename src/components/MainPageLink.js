import React from 'react';
import { NavLink } from 'react-router-dom';


const MainPageLink = ({name, to, icon, description}) => {

    return (
        <NavLink className="mainpagelink" to={to}>
            <div className="mainpagelink__content">
                { icon  && 
                    <div className="mainpagelink__icon">
                        {icon}
                    </div>
                }
                <div className="mainpagelink__body">
                    <div className="mainpagelink__title">{name}</div>
                    <div className="mainpagelink__description">{description}</div>
                </div>
                
            </div>
            
            
            
            
        </NavLink> 
    )
}

export default MainPageLink;