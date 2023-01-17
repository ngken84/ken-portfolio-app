import React, { useState } from 'react';

import Header from '../components/Header';
import SortValue from '../components/SortValue';

import { getValidIntValFromString, createValidIntRandomNumber } from './util/ModuleUtils';

const BubbleSort = () => {

    const [start, setStart] = useState(false);
    const [stepCount, setStepCount] = useState(0);
    const [complete, setComplete] = useState(false);
    const [nextPosition, setNextPosition] = useState(30);
    const [nextKey, setNextKey] = useState(5);
    const [values, setValues] = useState([
        {
            key: 0,
            value: 1,
            left: '0rem',
            order: 1,
            complete: false
        },
        {
            key: 1,
            value: 2,
            left : '6rem',
            order: 2,
            complete: false
        },
        {
            key: 2,
            value: 3,
            left: '12rem',
            order: 3,
            complete: false
        },
        {
            key: 3,
            value: 4,
            left: '18rem',
            order: 4,
            complete: false
        },
        {
            key: 4,
            value: 5,
            left: '24rem',
            order: 5,
            complete: false
        }
    ]);

    const [activeKey, setActiveKey] = useState(0);

    const setValue = (key, value) => {
        setValues((vs) => {
            const v = vs[key];

            var intVal = getValidIntValFromString(value);
            if(!intVal) {
                return vs;
            }
            
            if(v) {
                var newArr = vs.filter((val) => val.key !== key);
                newArr.splice(key, 0, {key, value: intVal, order: v.order, left: v.left, complete: v.complete});
                return newArr;
            }
            return vs;
        })
    }

    const getActiveItem = () => {
        return values.filter((v) => v.key === activeKey)[0];
    }

    const getNextItem = (active) => {
        var val = undefined;
        
        values.forEach((v) => {

            if(active.key !== v.key) {
                if(v.order === active.order + 1) {
                    val = v;
                }
            }
        })
        return val;
    }

    const swapPlaces = (item1, item2) => {
        setValues((vs) => {
            var newArr = [...vs]

            newArr.splice(item1.key, 1, {key: item1.key, value: item1.value, order: item2.order, left: item2.left, complete: item1.complete});
            newArr.splice(item2.key, 1, {key: item2.key, value: item2.value, order: item1.order, left: item1.left, complete: item2.complete});
            return newArr;
        });
    }

    const addNewItem = () => {
        setValues((vs) => (
            [...vs,
                {
                    key: nextKey,
                    value: 0,
                    order: nextKey + 1,
                    left: `${nextPosition}rem`,
                    complete: false
                }
            ]
            
        ))
        setNextKey((k) => k + 1);
        setNextPosition((n) => n + 6);
    }

    const nextPressed = () => {

        const active = getActiveItem();
        const next = getNextItem(active);
        if(next === undefined || next.complete) {
            markAsComplete(active);
            var complete = true;
            values.forEach((v) => {
                if(!v.complete) {
                    complete = false;
                }
            });
        } else if(active.value > next.value) {
            swapPlaces(active, next);
            setStepCount((c) => c + 1);

        } else {
            setActiveKey(next.key);
            setStepCount((c) => c + 1);
        }
    }

    const markAsComplete = (item) => {
        
        values.forEach((v)=> {
            if(v.order === 1) {
                setActiveKey(v.key);
                if(v.complete) {
                    setComplete(true);
                }
            }
        });
        setValues((vs) => {
            var newArr = [...vs];
            newArr.splice(item.key, 1, {key: item.key, value: item.value, order: item.order, left: item.left, complete: true});
            return newArr;
        })


    }

    const randomizeValues = () => {
        setValues((vs)=> {
            var newArr = [...vs];
            newArr.forEach(v => {
                v.value = createValidIntRandomNumber();
            });
            return newArr;
        })
    }




    return (
        <>
            
            <Header/>
            <div className="container">
                <main className='modulepage-container'>
                    <h1>Bubble Sort</h1>

                    <div className="modulepage-body">
                        <div className="modulepage-body-1">
                            <p>The Bubble Sort is one of the simpliest sorting algorithms. It operates by swapping adjacent values until the highest value bubbles up to the end of the list.</p>
                        </div>
                        <div className="modulepage-body-2">
                            <p><b>Time Complexity: </b>O(n&#178;)</p>
                            <p><b>Space Requirement: </b>O(1)</p>
                        </div>
                    </div>

                    
                    
                    <div className="sort-container">
                        {values.map((value) => (
                            <SortValue
                                key={value.key} 
                                value={value}
                                editable={!start}
                                setValue={setValue}/>
                        ))}
                        {!start && nextPosition < 80 && 
                            <div className="sort-value__container" style={{left : `${nextPosition}rem`}}>
                                <button className="sort-value__btn" onClick={addNewItem}>+</button>
                            </div>
                        }
                    
                    </div>
                    { !start && 
                        <div className="sort__controls">
                            <button 
                                className="outline-btn"
                                onClick={randomizeValues}>Randomize</button>
                            <button 
                                className="outline-btn"
                                onClick={(e)=>setStart(true)}>Start</button>
                        </div>
                        
                    }
                    { start && 
                        <div className="sort__controls">
                            <button 
                                className="outline-btn"
                                onClick={nextPressed}>Next</button>
                            <div>Count : {stepCount}</div>
                        </div>
                        
                    }
                </main>
            </div>
        </>

        
    );
}

export default BubbleSort;