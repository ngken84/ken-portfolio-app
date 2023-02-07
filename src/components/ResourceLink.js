import React from 'react';
import SvgElement from './SvgElement';

const ResourceLink = ({data}) => {

    return (
        <a className="resourcelink-container" href={data.url}>

            <div className="resourcelink--svg-container">
                <SvgElement svgName="presentation"/>  
            </div>  
            <h2 className="resourcelink--title">{data.name}</h2>
            <p className="resourcelink--body">{data.description}</p>

            
        </a>
    );
}

export default ResourceLink;