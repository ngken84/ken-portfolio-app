import React from 'react';

import Header from '../components/Header';
import CssBlock from './csscode/CssBlock';
import CssItemBlock from './csscode/CssItemBlock';

const CssMenu = () => {

    return (
        <>
            <Header/>
            <div className="container">
                <main className="modulepage-container">
                    <h1>CSS Menu</h1>
                    <div className="modulepage-body">
                        <div className="modulepage-body--1">
                            Hello World
                            <div className="modulepage--csscode--block">
                                <div>
                                    <CssBlock title={{label: '.nav'}} level={1}>
                                        <CssBlock title={{label: '__checkbox', red:'&'}} level={2} amp={true}>
                                            <CssItemBlock level={3} items={
                                                [
                                                    {
                                                        label: 'display',
                                                        item: { value: 'none' }
                                                    }
                                                ]
                                            }/>
                                        </CssBlock>
                                        <CssBlock title={{label: '__icon', red:'&'}} level={2}>
                                            <CssItemBlock level={3} items={
                                                [
                                                    {label: 'position', item:{value:"absolute"}},
                                                    {label: 'top', item:{value: -8, unit: 'rem'}},
                                                    {label: 'left', item:{value: 0}}
                                                ]
                                            }/>
                                            <CssBlock title={{label: '::before', red:'&'}} level={3}>
                                                <CssItemBlock level={4} items={
                                                    [
                                                        {label: 'position', item:{value:"absolute"}},
                                                        {label: 'top', item:{value: -.8, unit: 'rem'}},
                                                        {label: 'left', item:{value: 0}}
                                                    ]
                                                }/>
                                            </CssBlock>
                                            <CssBlock title={{label: '::after', red:'&'}} level={3}>
                                                <CssItemBlock level={4} items={
                                                    [
                                                        {label: 'position', item:{value:"absolute"}},
                                                        {label: 'top', item:{value: .8, unit: 'rem'}},
                                                        {label: 'left', item:{value: 0}}
                                                    ]
                                                }/>
                                            </CssBlock>
                                            <CssBlock titles={[
                                                    {label: '', red:'&', comma: true},
                                                    {label: '::before', red:'&', comma: true},
                                                    {label: '::after', red:'&'}
                                                ]} level={3}>
                                                <CssItemBlock level={4} items={
                                                    [
                                                        {label: 'width', item:{value:3, unit: 'rem'}},
                                                        {label: 'height', item:{value: 2, unit: 'px'}},
                                                        {label: 'background-color', item:{value: 'darkgrey'}},
                                                        {label: 'display', item: {value: 'inline-block'}},
                                                        {label: 'border-radius', item: {value: '20', unit: 'px'}},
                                                        {label: 'transition', items: [{value: 'all'}, {value: .2, unit: 's'}]}
                                                    ]
                                                }/>
                                            </CssBlock>

                                            <CssBlock titles={[
                                                    {label: '::before', red:'&', comma: true},
                                                    {label: '::after', red:'&'}
                                                ]} level={3}>
                                                <CssItemBlock level={4} items={
                                                    [
                                                        {label: 'content', item:{value:'""'}}
                                                    ]
                                                }/>
                                            </CssBlock>
                                        
                                        </CssBlock>
                                        <CssBlock title={{label: '__button', red:'&'}} level={2}>
                                            <CssItemBlock level={3} items={
                                                [
                                                    { label: 'background-color', item: {value : 'white'} },
                                                    { label: 'height', item: { value: '7', unit: 'rem'}},
                                                    { label: 'width', item: { value: 7, unit: 'rem'}},
                                                    { label: 'position', item: { value: 'fixed'}},
                                                    { label: 'top', item: {value: 6, unit: 'rem'}},
                                                    { label: 'right', item: {value: 6, unit: 'rem'}},
                                                    { label: 'z-index', item: {value: 2000}},
                                                    { label: 'border-radius', item: {value: 50, unit: '%'}},
                                                    { label: 'box-shadow', items: [{value: 0}, 
                                                                    {value: 1, unit:'rem'}, 
                                                                    {value: 3, unit: 'rem'},
                                                                    {value: 'rgba(black, .1)'},
                                                    
                                                    ]}
                                                ]
                                            }/>
                                            
                                        </CssBlock>

                                        
                                        <CssBlock titles={[
                                            {label: '__button:hover', red:'&'},
                                            {label: '__icon::before', red:'&'}
                                        ]} level={2}>
                                            <CssItemBlock level={3} items={
                                                [
                                                    { label: 'top', item: {value: -1, unit: 'rem'}}
                                                ]
                                            }/>
                                        </CssBlock>
                                        <CssBlock titles={[
                                            {label: '__button:hover', red:'&'},
                                            {label: '__icon::after', red:'&'}
                                        ]} level={2}>
                                            <CssItemBlock level={3} items={
                                                [
                                                    { label: 'top', item: {value: 1, unit: 'rem'}}
                                                ]
                                            }/>
                                        </CssBlock>
                                        <CssBlock titles={[
                                            {label: '__checkbox:checked', red:'&', add: true},
                                            {label: '__button:hover', red:'&'},
                                            {label: '__icon::before', red:'&'}
                                        ]} level={2}>
                                            <CssItemBlock level={3} items={
                                                [
                                                    { label: 'top', item: {value: 0}},
                                                    { label: 'transform', item: {value: 'rotate(-135deg)'}}
                                                ]
                                            }/>
                                        </CssBlock>
                                        <CssBlock titles={[
                                            {label: '__checkbox:checked', red:'&', add: true},
                                            {label: '__button:hover', red:'&'},
                                            {label: '__icon::after', red:'&'}
                                        ]} level={2}>
                                            <CssItemBlock level={3} items={
                                                [
                                                    { label: 'top', item: {value: 0}},
                                                    { label: 'transform', item: {value: 'rotate(135deg)'}}
                                                ]
                                            }/>
                                        </CssBlock>
                                        <CssBlock titles={[
                                            {label: '__checkbox:checked', red:'&', add: true},
                                            {label: '__button', red:'&'},
                                            {label: '__icon', red:'&'}
                                        ]} level={2}>
                                            <CssItemBlock level={3} items={
                                                [
                                                    { label: 'background-color', item: {value: 'transparent'}}
                                                ]
                                            }/>
                                        </CssBlock>

                                        <CssBlock title={{label: '__background', red:'&'}} level={2}>
                                            <CssItemBlock level={3} items={
                                                [
                                                    { label: 'border-radius', item: {value : 50, unit: '%'} },
                                                    { label: 'height', item: { value: 6, unit: 'rem'}},
                                                    { label: 'width', item: { value: 6, unit: 'rem'}},
                                                    { label: 'position', item: { value: 'fixed'}},
                                                    { label: 'top', item: {value: 6.5, unit: 'rem'}},
                                                    { label: 'right', item: {value: 6.5, unit: 'rem'}},
                                                    { label: 'z-index', item: {value: 1000}},
                                                    { label: 'border-radius', item: {value: 50, unit: '%'}},
                                                    { label: 'background-image', item: {value: 'radial-gradient(lightblue, darkblue)'}},
                                                    { label: 'transition', items: [{value: 'all'}, {value: .2, unit: 's'}]}
                                                ]
                                            }/>
                                            <CssBlock title={{label: 'respond(phone)', red: '@include '}} level={3}>
                                                <CssItemBlock level={4} items={
                                                    [
                                                        { label: 'top', item: {value: 4, unit: 'rem'}},
                                                        { label: 'right', item: {value: 4, unit: 'rem'}}
                                                    ]
                                                }/>
                                            
                                            </CssBlock>
                                        </CssBlock>

                                        <CssBlock title={{label: '__nav', red:'&'}} level={2}>
                                            <CssItemBlock level={3} items={
                                                [
                                                    {label: 'height', item: {value: 100, unit: 'vh'}},
                                                    {label: 'position', item: {value: 'fixed'}},
                                                    {label: 'top', item: {value: 0}},
                                                    {label: 'left', item: {value: 0}},
                                                    {label: 'z-index', item: {value: 1500}},
                                                    {label: 'opacity', item: {value: 0}},
                                                    {label: 'top', item: {value: 0}},
                                                    {label: 'width', item: {value: 100, unit: '%'}},
                                                    {label: 'top', items: [{value: 'all'}, {value: .2, unit: 's'}, {value: 'ease-in'}]},
                                                    {label: 'transform', item: {value: 'translatex(-100%)'}}
                                                ]
                                            }/>
                                        </CssBlock>

                                        <CssBlock title={{label: '__list', red:'&'}} level={2}>
                                            <CssItemBlock level={3} items={
                                                [
                                                    {label: 'position', item: {value: 'absolute'}},
                                                    {label: 'top', item: {value: '50', unit: '%'}},
                                                    {label: 'left', item: {value: '50', unit: '%'}},
                                                    {label: 'transform', item: {value: 'translate(-50%, -50%)'}},
                                                    {label: 'list-style', item: {value: 'none'}},
                                                    {label: 'text-align', item: {value: 'center'}},
                                                ]
                                            }/>
                                        </CssBlock>

                                        <CssBlock title={{label: '__item', red:'&'}} level={2}>
                                            <CssItemBlock level={3} items={
                                                [
                                                    {label: 'margin', item: {value: '1', unit: 'rem'}},
                                                ]
                                            }/>
                                        </CssBlock>

                                        <CssBlock title={{label: '__link', red:'&'}} level={2}>
                                            <CssBlock titles={[{label: ':link', red:'&', comma: true}, {label: ':visited', red: '&'}]} level={3}>
                                                <CssItemBlock level={4} items={
                                                    [
                                                        {label: 'display', item:{ value: 'inline-block'}},
                                                        {label: 'font-size', item: {value: 3, unit: 'rem'}},
                                                        {label: 'font-weight', item:{ value: '300'}},
                                                        {label: 'color', item:{ value: 'white'}},
                                                        {label: 'text-decoration', item:{ value: 'none'}},
                                                        {label: 'text-transform', item:{ value: 'uppercase'}},
                                                        {label: 'padding', items: [{value: .7, unit: 'rem'}, {value: 2, unit: 'rem'}]},
                                                        {label: 'background-image', item:{ value: 'linear-gradient(120deg, transparent 0%, transparent 50%, white 50%'}},
                                                        {label: 'background-size', item:{ value: '230', unit: '%'}},
                                                        {label: 'transition', items:[{ value: 'all'}, {value: .4, unit: 's'}]},
                                                    ]   

                                                    
                                                }/>

                                                <CssBlock title={{red: 'span'}} level={4}>
                                                    <CssItemBlock level={5} items={
                                                        [
                                                            {label: 'margin-right', item:{ value: '1.5', unit: 'rem'}},
                                                            {label: 'display', item:{ value: 'inline-block'}}
                                                        ]
                                                    }/>
                                                </CssBlock>
                                            </CssBlock>
                                            <CssBlock titles={[{label: ':active', red:'&', comma: true}, {label: ':hover', red: '&'}]} level={3}>
                                                    <CssItemBlock level={3} items={[
                                                        {label: 'color', item: {value: 'darkred'}},
                                                        {label: 'background-position', item: {value: '100', unit: '%'}},
                                                        {label: 'transform', item: {value: 'translateX(1rem)'}}
                                                    ]}/>
                                            </CssBlock>
                                        </CssBlock>

                                        <CssBlock titles={[{label: '__checkbox:checked ~', red: '&'}, {label: '__background', red: '&'}]} level={2}>
                                            <CssItemBlock level={3} items={[
                                                {label: 'transform', item: {value: 'scale(60)'}}
                                            ]}/>
                                        </CssBlock>

                                         <CssBlock titles={[{label: '__checkbox:checked ~', red: '&'}, {label: '__nav', red: '&'}]} level={2}>
                                            <CssItemBlock level={3} items={[
                                                {label: 'opacity', item: {value: '1'}},
                                                {label: 'width', item: {value: '100', unit: '%'}},
                                                {label: 'transform', item: {value: 'tranform(0rem)'}}
                                            ]}/>
                                        </CssBlock>
                                    </CssBlock>
                                </div>
                            </div>

                        </div>
                        <div> 
                            {}
                        </div>
                    </div>

                </main>
            
            </div>
        </>
    )
}

export default CssMenu;