import React from 'react';
import Header from '../components/Header';
import ModulesCard from '../components/ModulesCard';

import ModulesList from '../data/ModulesList';



const ModulesPage = () => {


    return (
        <>
            <Header/>
            <div className="container">
                
                <h1 className="modules-header">Modules Page</h1>
                <div className="modules-container">
                    { ModulesList.map((m) => (
                        <ModulesCard 
                            key={m.to}
                            svg={m.svg}
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