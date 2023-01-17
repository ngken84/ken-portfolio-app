import React, { useState} from 'react';
import Header from '../components/Header';

import SortValue from '../components/SortValue';

import { getValidIntValFromString, createValidIntRandomNumber } from './util/ModuleUtils';

export class QuickTreeItem {

    constructor(item, top, left) {
        this.key = item.key;
        this.value = item.value;
        this.top = top;
        this.left = left;
    }
}

export class QuickTreeBranch {

    constructor(id, contents, parentId, level, sorted) {
        this.id = id;
        this.content = [];
        contents.forEach(item => {
            this.content.push(new QuickTreeItem(item, item.top, item.left));
        });
        this.parentId = parentId;
        this.level = level;
        this.sorted = sorted;
    }



    generateBranches(newId) {
        if(this.content.length === 1 || this.left) {
            return;
        }
        let firstValue = this.content[0];
        const contents1 = [];
        const contents2 = [];
        this.content.forEach(item => {
            if(item.key !== firstValue.key) {
                if(item.value < firstValue.value) {
                    contents1.push(new QuickTreeItem(item, item.top, item.left));
                } else {
                    contents2.push(new QuickTreeItem(item, item.top, item.left));
                }
            }
        });
        this.leftBranch = newId;
        this.rightBranch = newId + 1;
        return [new QuickTreeBranch(newId, contents1, this.id, this.level + 1, contents1.length < 2),
                new QuickTreeBranch(newId + 1, contents2, this.id, this.level + 1, contents2.length < 2)];
    }

    trimAllButFirst() {
        const contents = [new QuickTreeItem(this.content[0], this.content[0].top, this.content[0].left)];
        const retval = new QuickTreeBranch(this.id, contents, this.parentId, this.level, false);
        retval.leftBranch = this.leftBranch;
        retval.rightBranch = this.rightBranch;
        return retval;
    }

    generateWithUpdatedLocation(topOffset, offset) {
        const contents = [];
        var o = offset;
        this.content.forEach((val) => {
            contents.push(new QuickTreeItem(val, `${topOffset}rem`, `${o}rem`));
            o = o + 5;
        });
        return new QuickTreeBranch(this.id, contents, this.parentId, this.level, this.sorted);
    }

    getBranchWidth() {
        return this.content.length * 5;
    }

    generateMergedBranch(leftBranch, rightBranch) {
        const mergedBranch = new QuickTreeBranch(this.id, 
                [
                    ...leftBranch.content,
                    ...this.content,
                    ...rightBranch.content
                ],
                this.parentId,
                this.level,
                true
            );
        mergedBranch.leftBranch = leftBranch.id;
        mergedBranch.rightBranch = rightBranch.id;
        return mergedBranch;
    }

    generateEmptyBranch() {
        const emptyBranch = new QuickTreeBranch(this.id, [], this.parentId, this.level, this.sorted);
        emptyBranch.leftBranch = this.leftBranch;
        emptyBranch.rightBranch = this.rightBranch;
        return emptyBranch;
    }

    generateNewBranchWithUpdatedValue = (key, value) => {
        const contents = [...this.content];
        const toBeReplaced = this.content[key];
        contents.splice(key, 1, new QuickTreeItem({key: toBeReplaced.key, value}, toBeReplaced.top, toBeReplaced.left));
        return new QuickTreeBranch(this.id, contents, this.parentId, this.level, this.sorted);
    }
    
    generateNewBranchWithRandomizedValues = () => {
        const newContents = [];
        this.content.forEach(item => {
            newContents.push(new QuickTreeItem({key: item.key, value: createValidIntRandomNumber()}, item.top, item.left));
        });
        return new QuickTreeBranch(this.id, newContents, this.parentId, this.level, this.sorted);
    }

    generateNewBranchWithNewValue = (key) => {
        console.log(this.getBranchWidth());
        const newContents = [...this.content,
            new QuickTreeItem({key, value: 0}, 0, `${this.getBranchWidth()}rem`)    
        ];
        return new QuickTreeBranch(this.id, newContents, this.parentId, this.level, this.sorted);
    }

}

const QuickSort = () => {

    const [values, setValues] = useState([
        new QuickTreeBranch(0, 
            [ 
                new QuickTreeItem({key: 0, value: 3}, 0, 0), 
                new QuickTreeItem({key: 1, value: 2}, 0, '5rem'),
                new QuickTreeItem({key: 2, value: 1}, 0, '10rem'),
                new QuickTreeItem({key: 3, value: 3}, 0, '15rem'),
                new QuickTreeItem({key: 4, value: 4}, 0, '20rem')
            ], 
            -1, 
            0, 
            false)
    ]);

    const [newKey, setNewKey] = useState(1);
    const [currentKey, setCurrentKey] = useState(0);

    const [start, setStart] = useState(false);
    const [count, setCount] = useState(5);

    const addBranchesToValues = async (key) => {
        
        var nextLevelWidth = getLevelWidth(values[key].level + 1, -1);
        setValues((vs) => {
            const currentBranch = vs[key];
            const vals = currentBranch.generateBranches(newKey);
            const newBranch = currentBranch.trimAllButFirst();
            const newValues = [...vs, ...vals];
            newValues.splice(key, 1, newBranch);
            return newValues;
        });

        await sleep(1000);  

        setValues((vs) => {
            const newValues = [...vs];
            const firstNewBranch = vs[newKey].generateWithUpdatedLocation(vs[newKey].level * 6, 0);
            newValues.splice(newKey, 1, firstNewBranch);
            newValues.splice(newKey + 1, 1, vs[newKey + 1].generateWithUpdatedLocation(vs[newKey].level * 6, firstNewBranch.getBranchWidth() + 1))
            return newValues;
        });
        
        setCurrentKey(newKey);
        setNewKey((oldKey) => oldKey + 2);
        
    }

    const getLevelWidth = (level, key) => {
        var retval = 0;
        var found = false;

        values.forEach((val) => {
            
            if(val.level === level) {
                if(val.id === key) {
                    found = true;
                }
                if(!found) {
                    retval = retval + val.getBranchWidth();
                    retval = retval + 1;
                }
                
            }
        });
        return retval;
    }

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
    
    const onNextPressed = () => {
        if(currentKey === -1) {
            return;
        }
        const currentBranch = values[currentKey];
        if(currentBranch.sorted) {
            return setCurrentKey(currentBranch.parentId);
        }

        if(currentBranch.leftBranch && currentBranch.rightBranch) {
            if(!values[currentBranch.leftBranch].sorted) {
                return setCurrentKey(currentBranch.leftBranch)
            }

            if(!values[currentBranch.rightBranch].sorted) {
                return setCurrentKey(currentBranch.rightBranch);
            }

            //Merge the two
            mergeBranches(currentBranch);
            return;
        }
        

        addBranchesToValues(currentKey);
        console.log(values);
    }

    const mergeBranches = (branch) => {
        const leftBranch = values[branch.leftBranch];
        const rightBranch = values[branch.rightBranch];
        
        const newLeftBranch = leftBranch.generateEmptyBranch();
        const newRightBranch = rightBranch.generateEmptyBranch();

        const mergedBranch = branch.generateMergedBranch(leftBranch, rightBranch);
        console.log(mergedBranch);
        
        const width = getLevelWidth(branch.level, branch.id);
        console.log(width);

        setValues((vs) => {
            const newVals = [...vs];
            newVals.splice(newLeftBranch.id, 1, newLeftBranch);
            newVals.splice(newRightBranch.id, 1, newRightBranch);
            newVals.splice(mergedBranch.id, 1, mergedBranch);

            return newVals;
        });

        sleep(1000);

        const newBranch = mergedBranch.generateWithUpdatedLocation(6 * mergedBranch.level, width);
        console.log(newBranch);

        setValues((vs) => {
            const newVals = [...vs];
            newVals.splice(newBranch.id, 1, newBranch);
            return newVals;
        })
    }

    const onTestPressed = () => {
        console.log(values);
        console.log(currentKey);
        console.log(newKey);
    }

    const onStartPressed = () => {
        setStart(true);
    }

    const onRandomPressed = () => {
        setValues((vs) => {
            return [vs[0].generateNewBranchWithRandomizedValues()];
        })
    }
    
    const setValue = (key, value) => {

        setValues((vs) => {
            const oldBranch = vs[0];
            return [oldBranch.generateNewBranchWithUpdatedValue(key, value)];
        });
    }

    const onAddPressed = () => {
        setValues((vs) => {
            const oldBranch = vs[0];
            return [oldBranch.generateNewBranchWithNewValue(count)];
        })
        setCount(c => c + 1);
    }

    return (
        <>
            <Header/>
            
             <div className="container">
                <main className='modulepage-container' style={{minHeight: '115rem', marginBottom: '10rem'}}>
                    <h1>Quick Sort</h1>
                    <div className="modulepage-body">
                        <div className="modulepage-body-1">
                            <p>Quick Sort follows a similar idea as MergeSort in that it continuously divides the list into two lists. This time the lists are divided by if they are greater or smaller than the first value on that list. This is repeated until each list is a single value and then the lists are combined until the entire list is sorted. </p>
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
                                onClick={onStartPressed}>Start</button>
                            <button 
                                className="outline-btn"
                                onClick={onRandomPressed}>Randomize</button>
                            <button 
                                className="outline-btn"
                                onClick={onTestPressed}>Test</button>
                        </div>
                    }

                    {start && 
                        <div className="sort__controls">
                            <button 
                                className="outline-btn"
                                onClick={onNextPressed}>Next</button>
                            <button 
                                className="outline-btn"
                                onClick={onTestPressed}>Test</button>
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
                                                squared={true}
                                                editable={!start}
                                                setValue={setValue}/>
                                        ))
                                    }
                                </span>
                            )
                        )}
                        {count < 16 && !start && 
                            <button className="sort-value-square__container"
                                style={{left: `${count * 5}rem`}}
                                onClick={onAddPressed}>
                                +
                            </button>
                        }
                        
                        

                    </div>
                </main>
            </div>
        </>
    )
};



export default QuickSort;