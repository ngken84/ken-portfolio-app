import React from 'react';
import { getLevelClass } from '../util/ModuleUtils';


const HtmlBlock = ({blockName, htmlClass, level, blockId, children}) => {

    return (
        <div>
            <div className={getLevelClass(level)}>
                {'<'}<span  className='modulepage--redtext'>{blockName}</span>
                {blockId && 
                    <>
                        {' '}
                        <span className='modulepage--greentext'>id</span>
                        <span className='modulepage--redtext'>=</span>
                        <span className='modulepage--yellowtext'>{`"${blockId}"`}</span>
                    </>
                }
                {htmlClass && 
                    <>
                        {' '}
                        <span className='modulepage--greentext'>class</span>
                        <span className='modulepage--redtext'>=</span>
                        <span className='modulepage--yellowtext'>{`"${htmlClass}"`}</span>
                    </>
                }
                {'>'}
            </div>
            {children}
            <div className={getLevelClass(level)}>
                {'<'}<span className='modulepage--redtext'>{blockName}</span>{'>'}
            </div>
        </div>
    );
}

export default HtmlBlock;