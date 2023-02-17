import React from 'react';

import Header from '../components/Header';

const ScssSelectors = () => {


    return (
        <>
            <Header/>
            <main className='modulepage-container' style={{minHeight: '115rem', marginBottom: '10rem'}}>
                <h1>not last CSS Trick</h1>
                <div className="modulepage-body">
                    <div className="modulepage-body-1"></div>
                </div>
            </main>

        </>
    );
}

export default ScssSelectors;