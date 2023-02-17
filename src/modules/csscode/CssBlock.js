import React from 'react';

import CssBlockTitle from './CssBlockTitle';
import { getLevelClass } from '../util/ModuleUtils';

const CssBlock = ({title, titles, blockName, amp, level, children}) => {

    return (
        <>
            <div className={getLevelClass(level)}>
                <CssBlockTitle item={title} items={titles} level={level}/>
            </div>
                {children}
            <div className={getLevelClass(level)}>
                <span className={`modulepage--csscode-bracket--${level}`}>{'}'}</span>
            </div>
        </>
    );
}

export default CssBlock;