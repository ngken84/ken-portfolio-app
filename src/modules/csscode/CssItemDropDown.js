import React from 'react';

import { getLevelClass } from '../util/ModuleUtils';

const CssItemDropDown = ({level, optionList, children, value, setValue}) => {

    


    return (
        <div className={getLevelClass(level)}>
            <span className='modulepage--lightbluetext'><i>{children}</i></span>{': '}
            <select value={value} onChange={(e) => {setValue(e.target.value)}}>
                {optionList && optionList.map((option) => (
                    <option key={option}>{option}</option>
                ))}
            </select>
        </div>
    );
}

export default CssItemDropDown;