import React, { useState } from 'react';
import Header from '../components/Header';
import SortValue from '../components/SortValue';

import { getValidIntValFromString, createValidIntRandomNumber } from './util/ModuleUtils';

const MergeSort = () => {

    class MergeTreeItem {
        constructor(item, top, left) {
            this.key = item.key
            this.value = item.value;
            this.left = left;
            this.top = top;
        }

        generateNewKey(branchId) {
            this.key = `${branchId}l${this.key}`
        }

        updatePosition(top, left) {
            this.top = `${top}rem`;
            this.left = `${left}rem`;
        }
        
    }

     class MergeTreeBranch {
        constructor(id, content, parentId, level, sorted) {
            this.id = id;
            this.content = [];
            content.forEach(item => {
                this.content.push(new MergeTreeItem(item, item.top, item.left));
            });
            this.parentId = parentId;
            this.level = level;
            this.sorted = content.length === 1 ?  true : sorted;
            this.complete = sorted;
            if(this.complete) {
                this.completeId = id;
            }
        }

        generateNewBranchWithOffset(top, left) {
            const retval = new MergeTreeBranch(this.id, this.content, this.parentId, this.level, this.sorted);
            var position = left;
            retval.content.forEach(item => {
                item.updatePosition(top, position);
                position += 5;
            })
            return retval;
        }

        generateNewMergeTreeWithUpdatedValue(key, value) {
            const retval = new MergeTreeBranch(this.id, this.content, this.parentId, this.level, this.sorted);
            this.content[key].value = value;
            return retval;
        }

        generateNewMergeTreeWithExtra() {
            const cont = [...this.content];
            cont.push({
                key: cont.length,
                value: 0,
                top: '0rem',
                left: `${cont.length * 5}rem`
            })
            return new MergeTreeBranch(this.id, cont, this.parentId, this.level, this.sorted)
        }

        generateNewMergeTreeWithRandomValues() {
            const cont = [...this.content];
            cont.forEach(val => {
                val.value = createValidIntRandomNumber();
            });
            return new MergeTreeBranch(this.id, cont, this.parentId, this.level, this.sorted);
        }

        get remWidth() {
            return this.content.length * 5;
        }
    }



    const [start, setStart] = useState(false);
    const [values, setValues] = useState([
        new MergeTreeBranch(
                0, 
                [ 
                    new MergeTreeItem({
                        key: 0,
                        value: 5
                    }, '0rem', '0rem'), 
                    new MergeTreeItem({
                        key: 1,
                        value: 4
                    }, '0rem', '5rem'), 
                    new MergeTreeItem({
                        key: 2,
                        value: 3
                    }, '0rem', '10rem'),
                    new MergeTreeItem({
                        key: 3,
                        value: 2
                    }, '0rem', '15rem'),
                    new MergeTreeItem({
                        key: 4,
                        value: 1
                    }, '0rem', '20rem')
                ], 
                -1,
                0,
                false)
        ]);

    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(c => c + 1)
    }

    const [currentKey, setCurrentKey] = useState(0);
    const [nextKey, setNextKey] = useState(1);
    const [active, setActive] = useState(false);

    const [mergeQueue] = useState([]);

    const onNextPressed = async () => {
        setActive(true);

        const currentBranch = values[currentKey];

        if(!currentBranch) {
            return;
        }

        if(!currentBranch.complete) {
            
            if(!currentBranch.leftBranch) {
                mergeQueue.push(currentBranch.id);
                await splitBranch(currentBranch);
            } else if(!values[currentBranch.leftBranch].complete) {
                mergeQueue.push(currentBranch.id);
                setCurrentKey(currentBranch.leftBranch);
            } else if(!values[currentBranch.rightBranch].complete) {
                mergeQueue.push(currentBranch.id);
                setCurrentKey(currentBranch.rightBranch);
            } else {
                mergeBranch(currentBranch);
                setCurrentKey(mergeQueue.pop());
                
            }
        } else {
            if(mergeQueue.length === 0) {
                return;
            }
            setCurrentKey(mergeQueue.pop());
        }  

        setActive(false);     
    }

    const getBranchLowestLevel = (branch) => {
        if(branch.complete && branch.completeId && values[branch.completeId]) {
            const completedLevel = values[branch.completeId].level;
            return completedLevel;
        }

        if(branch.sorted || !branch.leftBranch) {
            return branch.level;
        }
        const leftLow = getBranchLowestLevel(values[branch.leftBranch]);
        const rightLow = getBranchLowestLevel(values[branch.rightBranch]);

        return leftLow > rightLow ? leftLow : rightLow;
    }

    const getOffsetForLevel = (level, id) => {
        var offset = 0;
        values.forEach(val => {
            if(val.level === level) {
                if(val.id !== id) {
                    offset += val.remWidth + 1;
                } else {
                    return offset
                }
            }
        });
        return offset;
    }

    const splitBranch = async (branch) => {
        var arrays = splitArrays(branch.content);
        const newValues = [...values];
        const leftBranch = new MergeTreeBranch(nextKey, arrays[0], branch.id, branch.level + 1, false);
        leftBranch.content.forEach(item => item.generateNewKey(leftBranch.id));
        const rightBranch = new MergeTreeBranch(nextKey + 1, arrays[1], branch.id, branch.level + 1, false);
        rightBranch.content.forEach(item => item.generateNewKey(rightBranch.id));
        setNextKey(key => key + 2);
        setCurrentKey(leftBranch.id);
        branch.leftBranch = leftBranch.id;
        branch.rightBranch = rightBranch.id;
        newValues.push(leftBranch);
        newValues.push(rightBranch);
        setValues(newValues);

        await sleep(500);
        
        const newValues2 = [...newValues];
        const newOffset = getOffsetForLevel(leftBranch.level);
        newValues2.splice(leftBranch.id, 1, leftBranch.generateNewBranchWithOffset(leftBranch.level * 6, newOffset));
        newValues2.splice(rightBranch.id, 1, rightBranch.generateNewBranchWithOffset(leftBranch.level * 6, newOffset + leftBranch.remWidth + 1));
        setValues(newValues2);
        incrementCount();
    }

    const generateMergedBranch = (origBranch, leftBranch, rightBranch) => {
            if(!leftBranch || !rightBranch) {
                return undefined;
            }
            var lIndex = 0;
            var rIndex = 0;
            const newArray = [];
            var loop = true;
            while(loop) {
                const lValue = leftBranch.content[lIndex];
                const rValue = rightBranch.content[rIndex];

                if(!lValue && !rValue) {
                    loop = false;;
                } else if(lValue && !rValue) {
                    newArray.push(new MergeTreeItem(lValue, lValue.top, lValue.left));
                    incrementCount();
                    lIndex++;
                } else if(rValue && !lValue) {
                    newArray.push(new MergeTreeItem(rValue, rValue.top, rValue.left));
                    incrementCount();
                    rIndex++;
                } else if (rValue.value > lValue.value) {
                    newArray.push(new MergeTreeItem(lValue, lValue.top, lValue.left));
                    incrementCount();
                    lIndex++;
                } else {
                    newArray.push(new MergeTreeItem(rValue, rValue.top, rValue.left));
                    incrementCount();
                    rIndex++;
                }
                
            }

            origBranch.complete = true;
            
            const retval =  new MergeTreeBranch(nextKey, newArray, leftBranch.id, getBranchLowestLevel(origBranch) + 1, true);
            origBranch.completeId = retval.id;
            setNextKey(key => key + 1);
            return retval;
        }

    const mergeBranch =  async (branch) => {
        const leftBranch = values[values[branch.leftBranch].completeId];
        const rightBranch = values[values[branch.rightBranch].completeId];
        const newBranch = generateMergedBranch(branch, leftBranch, rightBranch);
        const newValues = [...values];
        newValues.push(newBranch);
        setValues(newValues);

        await sleep(500);

        const newValues2 = [...newValues];
        const newOffset = getOffsetForLevel(newBranch.level);
        newValues2.splice(newBranch.id, 1, newBranch.generateNewBranchWithOffset(newBranch.level * 6, newOffset));
        setValues(newValues2);
    }

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    const splitArrays = (a) => {
        
        var array = [...a];
        const extra = array.length%2 === 1 ? 1 : 0;
        const l = (array.length - extra)/2;
        const arr1 = array.splice(0, l + extra);
        return [arr1, array];
    }

    const setValue = (key, value) => {
        setValues((vs) => {
            const v = vs[0];

            var intVal = getValidIntValFromString(value);
            if(!intVal) {
                return vs;
            }
            return [v.generateNewMergeTreeWithUpdatedValue(key, intVal)];
        })
    }

    const addValue = () => {
        setValues((vs) => {
            return [vs[0].generateNewMergeTreeWithExtra()];
        });
        
    }

    const randomizeValues = () => {
        setValues((vs) => {
            return [vs[0].generateNewMergeTreeWithRandomValues()];
        })
    }

    return (
        <>
            <Header/>

            <div className="container">
                <main className='modulepage-container' style={{minHeight: '115rem', marginBottom: '10rem'}}>
                    <h1>Merge Sort</h1>
                    <div className="modulepage-body">
                        <div className="modulepage-body-1">
                            <p>The Merge Sort employs a divide and conquer method of sorting data. The array is split into split in half repeatedly until the pieces are simply an array of a single value. Then the arrays are merged together into a sorted smaller arrays until the entire array in reconstituted. </p>
                            <p>This sort was a bit trickier to implement expecially adding the visual component of the search taking place. Much like the merge split, I employed a divide and conquer methodology and split the problem into smaller pieces creating a MergeTreeBranch class that would handle the smaller functionalities.</p>
                        </div>
                        <div className="modulepage-body-2">
                            <p><b>Time Complexity: </b>O(n<i>log</i>n)</p>
                            <p><b>Space Requirement: </b>O(n)</p>
                        </div>
                    </div>
                    
                    {!start &&
                        <div className="sort__controls">
                            
                                <button
                                    className="outline-btn"
                                    onClick={addValue}
                                    disabled={values[0].content.length > 17}>Add Value</button>
                            
                            
                            <button 
                                className="outline-btn"
                                onClick={randomizeValues}>
                                    Randomize
                                </button> 
                            <button 
                                className="outline-btn"
                                onClick={() => setStart(true)}>Start</button>
                        </div>
                    }

                    {start && 
                        <div className="sort__controls">
                            <button 
                                className="outline-btn"
                                onClick={onNextPressed} disabled={active}>Next</button>
                            <div>
                                Count : {count}
                            </div>
                        </div>
                    }
                    
                    <div className="sort-container">
                        {values.map(val => (
                                <span
                                    key={val.id}
                                >
                                    {
                                        val.content.map(item => (
                                            <SortValue
                                                key={item.key}
                                                value={item}
                                                editable={!start}
                                                squared={true}
                                                setValue={setValue}
                                                color={val.id === currentKey && start ? 'orangered' : 'white'}/>
                                        ))
                                    }
                                </span>
                            )
                        )}
                        
                        

                    </div>
                     

                </main>
            </div>
        </>

    )

}

export default MergeSort;