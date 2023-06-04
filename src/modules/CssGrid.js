import React from 'react';

import Header from '../components/Header';
import CssBlock from './csscode/CssBlock';
import CssItemBlock from './csscode/CssItemBlock';

const CssGrid = () => {

    return (
        <>
            <Header/>
            <div className="container">
                <main className="modulepage-container">
                    <h1>CSS Grid</h1>
                    <div className="modulepage-singlebody">
                        <p>
                            <b>CSS Grid</b> is a module that brings a 2-Dimensional Grid system to CSS. 
                            It replaces the float layout system and makes it more readable and logical. 
                            It also works well with Flex Box (with Flex handling the 1-Dimensional Layout and Grid handling the 2-Dimensional layout). 
                            It completely changes how we build 2-D layouts. No need for tags and frameworks like Bootstrap to build our column layouts.
                        </p>
                        <div className="css-grid--figure-1">
                            <div className="css-grid--figure-1--left-side">

                                <div className="css-grid--figure-1--y-axis">
                                    <div className="css-grid--figure-1--title">Column Axis</div>
                                    <div className="css-grid--figure-1--left-side--larr">&larr;</div>
                                </div>
                                
                            </div>
                            <div className="css-grid--figure-1--right-side">
                                <div className="css-grid--figure-1--body">
                                    <div className="css-grid--figure-1--grid-piece">Grid Item</div>
                                    <div className="css-grid--figure-1--grid-piece">Grid Item</div>
                                    <div className="css-grid--figure-1--grid-piece"/>
                                    <div className="css-grid--figure-1--grid-piece"/>
                                    <div className="css-grid--figure-1--grid-piece"/>
                                    <div className="css-grid--figure-1--grid-piece"/>
                                </div>
                                <div className="css-grid--figure-1--bottom-axis">
                                    <div className="css-grid--figure-1--rarr">
                                        &rarr; 
                                    </div>    
                                    
                                    <div className="css-grid--figure-1--title">
                                        Row Axis
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                        <h3>Managing Gaps</h3>
                        <p>To manage the spacing between grid items, you can use the CSS Property grid-gap.</p>
                        <div className="modulepage--csscode--block">
                            <CssBlock title={{label: '.grid-container'}} level={1}>
                                <CssItemBlock level={3} items={
                                    [
                                        {
                                            label: 'grid-row-gap',
                                            item: { value: '30px' }
                                        },
                                        {
                                            label: 'grid-column-gap',
                                            item: { value: '25px' }
                                        },
                                        {
                                            label: 'grid-template-columns',
                                            item: { value: 'repeat(3, 150px)' }
                                        }
                                    ]
                                }/>
                            </CssBlock>
                        </div>
                        <p>You can also manage the row and column gaps separately.</p>
                        <CssBlock title={{label: '.grid-container'}} level={1}>
                                <CssItemBlock level={3} items={
                                    [
                                        {
                                            label: 'grid-gap',
                                            item: { value: '30px' }
                                        },
                                        {
                                            label: 'grid-template-columns',
                                            item: { value: 'repeat(3, 150px)' }
                                        }
                                    ]
                                }/>
                            </CssBlock>            




                        <h3>Sizing Grid Elements</h3>
                        <p>Managing the size of grid elements can be done a number of ways.</p>

                        <h4>repeat() function</h4>
                        <p>If you have a consistent element size across multiple grid elements the <b>repeat()</b> function can be useful to elinate redundancy.</p>
                        <div className="modulepage--csscode--block">
                            <CssBlock title={{label: '.grid-container'}} level={1}>
                                <CssItemBlock level={3} items={
                                    [
                                        {
                                            label: 'grid-template-rows',
                                            item: { value: 'repeat(2, 150px)' }
                                        },
                                        {
                                            label: 'grid-template-columns',
                                            item: { value: 'repeat(3, 150px)' }
                                        }
                                    ]
                                }/>
                            </CssBlock>
                        </div>
                        <p>This also can be mixed in with different widths as need</p>
                        <div className="modulepage--csscode--block">
                            <CssBlock title={{label: '.grid-container'}} level={1}>
                                <CssItemBlock level={3} items={
                                    [
                                        {
                                            label: 'grid-template-columns',
                                            item: { value: 'repeat(2, 150px) 300px' }
                                        }
                                    ]
                                }/>
                            </CssBlock>
                        </div>
                        <h4>fr unit</h4>
                        <p>fractional units (fr) can used to occupy as much space as there is available</p>
                        <div className="modulepage--csscode--block">
                            <CssBlock title={{label: '.grid-container'}} level={1}>
                                <CssItemBlock level={3} items={
                                    [
                                        {
                                            label: 'grid-template-columns',
                                            item: { value: 'repeat(2, 150px) 1fr' }
                                        }
                                    ]
                                }/>
                            </CssBlock>
                        </div>
                        <p>The two columns will be a fixed size and the last one will occupy the rest of the available space.</p>
                        <p>You can use multitple fr units with differing values to have different ratios of element sizes</p>
                        <div className="modulepage--csscode--block">
                            <CssBlock title={{label: '.grid-container'}} level={1}>
                                <CssItemBlock level={3} items={
                                    [
                                        {
                                            label: 'grid-template-columns',
                                            item: { value: '1fr 2fr 1fr' }
                                        }
                                    ]
                                }/>
                            </CssBlock>
                        </div>
                    </div>

                </main>
            </div>
        </>
    );
}

export default CssGrid;