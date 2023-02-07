import React from 'react';

const CssItem = ({item, items, children}) => {

    const renderItem = (i) => {

        return (
            <>
                {i.unit &&
                    <>
                        {' '}<span className='modulepage--csscode--purpletext'>{i.value}</span>
                        <span className='modulepage--csscode--redtext'>{i.unit}</span>
                    </>
                }
                {!i.unit && 
                    <>
                        <span className='modulepage--csscode--lightbluetext'>{i.value}</span>
                    </>
                }
            
            </>
        )
    }

    return (
        <div>
            <span className='modulepage--csscode--lightbluetext'><i>{children}</i></span>:
            {item && 
                <>{' '}{renderItem(item)}{';'}</>
            }

            {!item && items && items.length > 0 &&
                <>
                    {items.map((i) => (
                            <>
                                {' '}{renderItem(i)}
                            </>
                        )
                    )}
                    {';'}
                
                </>
            
            
            }
        </div>
    );
}

export default CssItem;