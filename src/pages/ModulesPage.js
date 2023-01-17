import React from 'react';
import Header from '../components/Header';
import ModulesCard from '../components/ModulesCard';

import {ReactComponent as ListSvg} from '../img/SVG/list.svg';
import {ReactComponent as TreeSvg} from '../img/SVG/flow-tree.svg';
import {ReactComponent as EmbedSvg} from '../img/SVG/embed.svg';

import ModulesList from '../data/ModulesList';



const ModulesPage = () => {


    const getSVGforType = (type) => {
        switch(type) {
            case 'list':
                return <ListSvg/>
            case 'tree':
                return <TreeSvg/>
            case 'embed':
                return <EmbedSvg/>
            default:
                return 
        }
    }

    return (
        <>
            <Header/>
            <div className="container">
                
                <h1 className="modules-header">Modules Page</h1>
                <div className="modules-container">
                    { ModulesList.map((m) => (
                        <ModulesCard 
                            svg={getSVGforType(m.svg)}
                            name={m.name}
                            subtitle={m.subtitle}
                            description={m.description}
                            to={m.to}/>
                    ))
                    }

                </div>


                
            </div>
        </>
    )
}

export default ModulesPage;