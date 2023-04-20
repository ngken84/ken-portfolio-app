import React, { useState } from 'react';

import CssBlock from './csscode/CssBlock';
import CssItemDropDown from './csscode/CssItemDropDown';
import Header from '../components/Header';

const CssFlexBox = () => {

    const [contDisp, setContDisp] = useState("flex");
    const [flexDir, setFlexDir] = useState("row");
    const [alignItems, setAlignItems] = useState("flex-start");
    const [justifyContent, setJustifyContent] = useState("space-evenly");

    const alignSelfOptions = ["", "stretch", "center", "start", "end"];

    const [b1AlignSelf, setB1AlignSelf] = useState(alignSelfOptions[0]);
    const [b2AlignSelf, setB2AlignSelf] = useState(alignSelfOptions[0]);
    const [b3AlignSelf, setB3AlignSelf] = useState(alignSelfOptions[0]);
    const [b4AlignSelf, setB4AlignSelf] = useState(alignSelfOptions[0]);

    
    const getCssForBox = (alignSelf) => {
        if(alignSelf !== alignSelfOptions[0]) {
            return { alignSelf }
        }
        return {};
    }

    return (
        <>
            <Header/>
            <div className="container">
                <main className="modulepage-container">
                    <h1>CSS Flex Box</h1>
                    <div className="modulepage-body">
                        <div className="modulepage-body--1">
                            <div className="flexmodule-body">
                                <div className="flexmodule-body--title">
                                    container
                                </div>
                                <div style={{
                                        display: contDisp, 
                                        flexDirection: flexDir,
                                        alignItems: alignItems,
                                        justifyContent,
                                        backgroundColor: 'lightgrey'
                                    }}>
                                    <div className="flexmodule-box-1" style={getCssForBox(b1AlignSelf)}>
                                        <div className="flexmodule-box--title">
                                            1
                                        </div>
                                        Hello world, this is a box of text
                                    </div>
                                    <div className="flexmodule-box-2" style={getCssForBox(b2AlignSelf)}>
                                        <div className="flexmodule-box--title">
                                            2
                                        </div>
                                    </div>
                                    <div className="flexmodule-box-3" style={getCssForBox(b3AlignSelf)}>
                                        <div className="flexmodule-box--title">
                                            3
                                        </div>
                                        <br/>
                                        Hello World
                                    </div>
                                    <div className="flexmodule-box-4" style={getCssForBox(b4AlignSelf)}>
                                        <div className="flexmodule-box--title">
                                            4
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="modulepage-body-2">
                            <div className="modulepage--csscode--block">
                                <CssBlock title={{label: '.container'}} level={1}>
                                    <CssItemDropDown
                                        optionList={[
                                            "flex",
                                            "block"
                                        ]} 
                                        value={contDisp}
                                        setValue={setContDisp}
                                        level={2}>
                                        display
                                    </CssItemDropDown>
                                    <CssItemDropDown
                                        optionList={[
                                            "row",
                                            "column"
                                        ]} 
                                        value={flexDir}
                                        setValue={setFlexDir}
                                        level={2}>
                                        flex-direction
                                    </CssItemDropDown>
                                    <CssItemDropDown
                                        optionList={[
                                            "center",
                                            "baseline",
                                            "stretch",
                                            "flex-start",
                                            "flex-end"
                                        ]} 
                                        value={alignItems}
                                        setValue={setAlignItems}
                                        level={2}>
                                        align-items
                                    </CssItemDropDown>
                                    <CssItemDropDown
                                        optionList={[
                                            'flex-start',
                                            'flex-end',
                                            'center',
                                            'space-between',
                                            'space-around',
                                            'space-evenly'
                                        ]} 
                                        value={justifyContent}
                                        setValue={setJustifyContent}
                                        level={2}>
                                        justify-content
                                    </CssItemDropDown>
                                </CssBlock>

                                <CssBlock title={{label: '.block-1'}} level={1}>
                                    <CssItemDropDown
                                        optionList={alignSelfOptions}
                                        value={b1AlignSelf}
                                        setValue={setB1AlignSelf}
                                        level={2}>
                                        align-self    
                                    </CssItemDropDown>
                                </CssBlock>

                                <CssBlock title={{label: '.block-2'}} level={1}>
                                    <CssItemDropDown
                                        optionList={alignSelfOptions}
                                        value={b2AlignSelf}
                                        setValue={setB2AlignSelf}
                                        level={2}>
                                        align-self    
                                    </CssItemDropDown>
                                </CssBlock>

                                <CssBlock title={{label: '.block-3'}} level={1}>
                                    <CssItemDropDown
                                        optionList={alignSelfOptions}
                                        value={b3AlignSelf}
                                        setValue={setB3AlignSelf}
                                        level={2}>
                                        align-self    
                                    </CssItemDropDown>
                                </CssBlock>

                                <CssBlock title={{label: '.block-4'}} level={1}>
                                    <CssItemDropDown
                                        optionList={alignSelfOptions}
                                        value={b4AlignSelf}
                                        setValue={setB4AlignSelf}
                                        level={2}>
                                        align-self    
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

export default CssFlexBox;