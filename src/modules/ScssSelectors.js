import React from 'react';

import Header from '../components/Header';
import CssBlock from './csscode/CssBlock';
import CssItemBlock from './csscode/CssItemBlock';

const ScssSelectors = () => {


    return (
        <>
            <Header/>
            <div className="container">
                <main className='modulepage-container' style={{ marginBottom: '10rem'}}>
                    <h1>SCSS Selectors</h1>
                    <div className="modulepage-body">
                        <div className="modulepage-body-1">
                            <p>A good way to reduce redundant code is to use SCSS Selectors</p>
                            <div className="modulepage--csscode--block">
                                <CssBlock title={{label: '.my-container'}}>
                                    <CssBlock title={{label: '[class^="row-"]'}} level={2}>
                                        <CssItemBlock level={3} items={[
                                            {
                                                label: 'width',
                                                item: { value: 100, unit: '%' }
                                            },
                                            {
                                                label: 'height',
                                                item: { value: 3, unit: 'rem' }
                                            }
                                        ]}/>
                                        <br/>
                                        <CssBlock title={{label: ':not(:last-child)', red: '&'}} level={3}>
                                            <CssItemBlock level={4} items={[
                                                {
                                                    label: 'margin-bottom',
                                                    item: { value: 2, unit: 'rem' }
                                                }
                                            ]}/>
                                        </CssBlock>
                                    </CssBlock>

                                    <CssBlock title={{label: '.row-black'}} level={2}>
                                        <CssItemBlock level={3} items={[
                                            {
                                                label: 'background-color',
                                                item: { value: 'black' }
                                            },
                                            {
                                                label: 'color',
                                                item: { value: 'white'}
                                            }
                                        ]}/>
                                    </CssBlock>

                                    <CssBlock title={{label: '.row-blue'}} level={2}>
                                        <CssItemBlock level={3} items={[
                                            {
                                                label: 'background-color',
                                                item: { value: 'blue' }
                                            },
                                            {
                                                label: 'color',
                                                item: { value: 'white'}
                                            }
                                        ]}/>
                                    </CssBlock>

                                    <CssBlock title={{label: '.row-red'}} level={2}>
                                        <CssItemBlock level={3} items={[
                                            {
                                                label: 'background-color',
                                                item: { value: 'red' }
                                            }
                                        ]}/>
                                    </CssBlock>
                                </CssBlock>
                            </div>
                            
                        </div>
                        <div className="modulepage-body-2">
                            <p>Example:</p>
                            <div className="scssselector">
                                <div className="scss-sel-row-black">
                                    .row-black
                                </div>
                                <div className="scss-sel-row-blue">
                                    .row-blue
                                </div>
                                <div className="scss-sel-row-red">
                                    .row-red
                                </div>
                            </div>
                            <br></br>
                            <p>There are other designations besides ^=</p>
                            <div className="modulepage--csscode--block">
                                <CssBlock title={{label: '[class*="row"]'}}></CssBlock>
                            </div>
                            <p>The <b>*</b> designates all classes that contains the provided value (can be dangerous)</p>
                            <div className="modulepage--csscode--block">
                                <CssBlock title={{label: '[class$="-row"]'}}></CssBlock>
                            </div>
                            <p>The <b>$</b> sign indicates any classes that end in that value.</p>
                        </div>
                    </div>
                </main>
            </div>

        </>
    );
}

export default ScssSelectors;