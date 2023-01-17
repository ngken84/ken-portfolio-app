import React from 'react';
import { NavLink } from 'react-router-dom';

const ModulesCard = ({svg, name, subtitle, description, to}) => {

    return (
        <div className="modules-card">
            <div className="modules-card__side modules-card__side--front">
                {svg && 
                    <div className="modules-card__icon">
                        {svg}
                    </div>
                        
                }
                <div className="modules-card__subtitle">{subtitle}</div>
                <h2 className="modules-card__title">{name}</h2>
            </div>
            <div className="modules-card__side modules-card__side--back">
                <p className="modules-card__description">
                    { description }
                </p>
                <NavLink to={`/modules/${to}`}>Check it out!</NavLink>
                
            </div>
        </div>
    );
}

export default ModulesCard;

