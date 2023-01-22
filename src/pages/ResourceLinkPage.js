import React from 'react';
import Header from '../components/Header';
import ResourceLink from '../components/ResourceLink';

import ResourceLinks from '../data/ResourceLinks';

const ResourceLinkPage = () => {

    
    console.log(ResourceLinks);

    return (
        <>
            <Header/>
            <div className="container resourcelink-pagecontainer">

                <h1 className="resourcelink--header">Resource Links</h1>
                <div className="resourcelink--linkscontainer">
                
                    {
                        ResourceLinks.map(link => (
                            <ResourceLink data={link}/>
                        ))
                    }
                </div>
            </div>
        </>
        
    );
}

export default ResourceLinkPage;