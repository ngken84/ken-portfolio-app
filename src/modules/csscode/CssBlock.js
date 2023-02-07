import React from 'react';

import CssBlockTitle from './CssBlockTitle';

const CssBlock = ({title, titles, blockName, amp, level, children}) => {

    const getLevelClass = () => {
        switch(level) {
            case 5:
                return 'u-margin-left-xlarge';
            case 4:
                return 'u-margin-left-large';
            case 3: 
                return 'u-margin-left-medium';
            case 2:
                return 'u-margin-left-small';
            default: 
                return 'u-margin-left-none';
        }
    }

    return (
        <>
            <div className={getLevelClass()}>
                <CssBlockTitle item={title} items={titles} level={level}/>
            </div>
                {children}
            <div className={getLevelClass()}>
                <span className={`modulepage--csscode-bracket--${level}`}>{'}'}</span>
            </div>
        </>
    );
}

export default CssBlock;