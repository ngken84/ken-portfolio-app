import React from 'react';
import Header from '../components/Header';
import ResourceLink from '../components/ResourceLink';

import ResourceLinks from '../data/ResourceLinks';

const ResourceLinkPage = () => {

    
    console.log(ResourceLinks);

    return (
        <>
            <Header/>
            <div>
                {
                    ResourceLinks.map(link => (
                        <ResourceLink linkName={link.name}/>
                    ))
                }
            </div>
        </>
        
    );
}

export default ResourceLinkPage;