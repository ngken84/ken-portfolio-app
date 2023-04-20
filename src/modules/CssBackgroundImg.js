import React, { useState } from 'react';

import Header from '../components/Header';
import CssBlock from './csscode/CssBlock';
import CssItemBlock from './csscode/CssItemBlock';
import CssItemDropDown from './csscode/CssItemDropDown';


const CssBackgroundImg = () => {

    const [backsize, setBacksize] = useState('cover');
    const [backpos, setBackpos] = useState('top');

    return (
        <>
            <Header/>
            <div className="container" >
                <main 
                    className="modulepage-container backgrndimg-modules-container" 
                    style={{
                        backgroundColor: 'transparent', 
                        backgroundSize: backsize,
                        backgroundPosition: backpos
                    }}>
                    <h1 className="backgrndimg-modules-header">CSS Background Images</h1>

                    <div className="modulepage-body">
                        <div className="modulepage-body--1 backgrndimg-modules-body">
                            <p>Background images is a power tool that allows us to create vivid and dynamic web layouts. </p>
                            <p></p>
                            
                        </div>

                        <div className="modulepage-body--2">
                            <div className="modulepage--csscode--block">
                                <CssBlock title={{label: '.container'}} level={1}>
                                    <CssItemBlock level={2} items={
                                        [
                                            {
                                                label: 'background-image',
                                                item: { value: "url('/img/workspace.jpg')" }
                                            }
                                        ]
                                    }/>
                                    <CssItemDropDown
                                        optionList={[
                                            "cover",
                                            "contain",
                                            "30%",
                                            "60%",
                                            "100%"
                                        ]} 
                                        value={backsize}
                                        setValue={setBacksize}
                                        level={2}>
                                        background-size
                                    </CssItemDropDown>
                                    <CssItemDropDown
                                        optionList={[
                                            "top",
                                            "bottom",
                                            "center"
                                        ]} 
                                        value={backpos}
                                        setValue={setBackpos}
                                        level={2}>
                                        background-position
                                    </CssItemDropDown>
                                </CssBlock>
                            </div>
                        </div>
                    </div>


                </main>
            </div>
        </>
    );
}

export default CssBackgroundImg;