import React, { useState } from 'react';

import Header from '../components/Header';
import CssBlock from './csscode/CssBlock';
import CssItemDropDown from './csscode/CssItemDropDown';
import CssItemBlock from './csscode/CssItemBlock';

const ClipPath = () => {

    const [clipPath, setClipPath] = useState("polygon(50% 0, 100% 50%, 50% 100%, 0 50%)");


    return (
        <>
            <Header/>
            <div className="container">
                <main className='modulepage-container'>
                    <h1>Clip Path</h1>
                    <div className="modulepage-body">
                        <div className="modulepage-body--1">
                            <p>Clip path allows us to shape blocks in our layout using css. </p>
                            <div style={{
                                width:'90%',
                                margin: '5%', 
                                height: '30rem', 
                                backgroundColor: 'grey', 
                                display: 'flex', 
                                justifyContent: 'center', 
                                alignItems: 'center',
                                clipPath: clipPath
                                    
                            }}>
                                My Clip Path Box
                            </div>
                        </div>
                        <div className="modulepage-body--2">
                            <div className="modulepage--csscode--block">
                                <CssBlock title={{label: '.clip-path-box'}} level={1}>
                                    <CssItemBlock 
                                        level={2}
                                        items={
                                            [
                                                {
                                                    label: 'width',
                                                    item: {value: '100', unit: '%'}
                                                },
                                                {
                                                    label: 'height',
                                                    item: {value: '30', unit: 'rem'}
                                                },
                                                {
                                                    label: 'margin',
                                                    item: {value: '5', unit: '%'}
                                                },
                                                {
                                                    label: 'background-color',
                                                    item: {value: 'grey'}
                                                },
                                                {
                                                    label: 'display',
                                                    item: { value: 'flex'}
                                                }, 
                                                {
                                                    label: 'justify-content',
                                                    item: { value: 'center'}
                                                },
                                                {
                                                    label: 'align-items',
                                                    item: { value: 'center'}
                                                }
                                            ]
                                        }
                                    
                                    />
                                     <CssItemDropDown
                                        optionList={[
                                            "polygon(50% 0, 100% 50%, 50% 100%, 0 50%)",
                                            "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                                            "polygon(0 0, 100% 0, 100% 50%, 50% 100%, 0 50%)",
                                            "polygon(0 50%, 50% 0, 100% 50%, 100% 100%, 0 100%)"
                                        ]} 
                                        value={clipPath}
                                        setValue={setClipPath}
                                        level={2}>
                                        clip-path
                                    </CssItemDropDown>
                                </CssBlock>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default ClipPath;