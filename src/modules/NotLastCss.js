import React from "react";

import Header from "../components/Header";
import CssBlock from "./csscode/CssBlock";
import CssItemBlock from "./csscode/CssItemBlock";

const NotLastCss = () => {

    return (
        <>
            <Header/>
            
             <div className="container">
                <main className='modulepage-container' style={{minHeight: '115rem', marginBottom: '10rem'}}>
                    <h1>not last CSS Trick</h1>
                    <div className="modulepage-body">
                        <div className="modulepage-body-1">
                            <p>The not last css trick is a pretty useful tool for applying a style to every element inside a div besides the last one.</p>
                            <div className="modulepage--csscode--block">
                                <CssBlock title={{label: '.row'}}>
                                    <CssItemBlock level={2} items={[
                                        {
                                            label: 'background-color',
                                            item: { value: 'orangered'}
                                        },
                                        {
                                            label: 'height',
                                            item: { value: '2', unit: 'rem' }
                                        },
                                        {
                                            label: 'width',
                                            item: { value: '100', unit: '%' }
                                        }

                                        
                                    ]}/>
                                    <br/>
                                    <CssBlock title={{label: ':not(:last-child)', red: "&"}} level={2}>
                                        <CssItemBlock level={3} items={[
                                            {
                                                label: 'margin-bottom',
                                                item: { value: 2, unit: 'rem'}
                                            }
                                        ]}/>
                                    </CssBlock>
                                    
                                </CssBlock>
                            </div>
                        </div>
                        <div className="modulepage-body-2">
                            <p>Example:</p>
                            <div className="notlast-container">
                                <div className="notlast-row">
                                    .row
                                </div>
                                <div className="notlast-row">
                                    .row
                                </div>
                                <div className="notlast-row">
                                    .row
                                </div>
                                <div className="notlast-row">
                                    .row
                                </div>
                            </div>
                            <br></br>
                            <p>As you can see, the margin-bottom is only applied to every element except the last.</p>
                        </div>
                        
                    </div>

                </main>
            </div>
        </>
    );
}

export default NotLastCss;