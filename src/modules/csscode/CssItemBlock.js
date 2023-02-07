import React from 'react';
import CssItem from './CssItem';

const CssItemBlock = ({level, items}) => {

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
        <div className={getLevelClass()}>
            {items.map(item => (
                <CssItem item={item.item} items={item.items}>{item.label}</CssItem>
            ))}
        </div>
    )
}

export default CssItemBlock;