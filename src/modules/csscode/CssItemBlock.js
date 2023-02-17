import React from 'react';
import CssItem from './CssItem';
import { getLevelClass } from '../util/ModuleUtils';

const CssItemBlock = ({level, items}) => {

    return (
        <div className={getLevelClass(level)}>
            {items.map(item => (
                <CssItem item={item.item} items={item.items}>{item.label}</CssItem>
            ))}
        </div>
    )
}

export default CssItemBlock;