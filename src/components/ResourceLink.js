import React from 'react';

const ResourceLink = ({data}) => {

    return (
        <a className="resourcelink-container" href={data.url}>
            <div>
                <h2 className="resourcelink--title">{data.name}</h2>
                <p className="resourcelink--body">{data.description}</p>
            </div>
            
        </a>
    );
}

export default ResourceLink;