import React, { useState } from 'react';
import Header from '../components/Header';

const CssFlexBox = () => {

    const [contDisp, setContDisp] = useState("flex");
    const [flexDir, setFlexDir] = useState("row");
    const [alignItems, setAlignItems] = useState("flex-start");
    const [justifyContent, setJustifyContent] = useState("space-evenly");


    return (
        <>
            <Header/>
            <div className="container">
                <main className="modulepage-container">
                    <h1>CSS Flex Box</h1>
                    <div className="flexmodule-body">
                        <div className="flexmodule-body--title">
                            Body
                        </div>
                        <div style={{
                                display: contDisp, 
                                flexDirection: flexDir,
                                alignItems: alignItems,
                                justifyContent
                            }}>
                            <div className="flexmodule-box-1">
                                <div className="flexmodule-box--title">
                                    1
                                </div>
                            </div>
                            <div className="flexmodule-box-2">
                                <div className="flexmodule-box--title">
                                    2
                                </div>
                            </div>
                            <div className="flexmodule-box-3">
                                <div className="flexmodule-box--title">
                                    3
                                </div>
                                <br/>
                                Hello World
                            </div>
                            <div className="flexmodule-box-4">
                                <div className="flexmodule-box--title">
                                    4
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="flexmodule-controls-container">
                        <div className="flexmodule-controls-row">
                            <div className="flexmodule-controls-row--title">
                                Body
                            </div>
                            <label>
                                display:{' '}
                                <select value={contDisp} onChange={(e) => {setContDisp(e.target.value)}}>
                                    <option>block</option>
                                    <option>flex</option>
                                </select>
                            </label>
                            <label>
                                flex-direction:{' '}
                                <select value={flexDir} onChange={(e) => {setFlexDir(e.target.value)}}>
                                    <option>row</option>
                                    <option>column</option>
                                </select>
                            </label>
                            <label>
                                align-items:{' '}
                                <select value={alignItems} onChange={(e) => {setAlignItems(e.target.value)}}>
                                    <option>flex-start</option>
                                    <option>flex-end</option>
                                    <option>center</option>
                                    <option>baseline</option>
                                    <option>stretch</option>
                                </select>
                            </label>
                            <label>
                                justify-content:{' '}
                                <select value={justifyContent} onChange={(e) => {setJustifyContent(e.target.value)}}>
                                    <option>flex-start</option>
                                    <option>flex-end</option>
                                    <option>center</option>
                                    <option>space-between</option>
                                    <option>space-around</option>
                                    <option>space-evenly</option>
                                </select>
                            </label>
                        </div>
                        
                    </div>
                        

                    <div className="modulepage-body">
                        <div className="modulepage-body--1">
                        
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default CssFlexBox;