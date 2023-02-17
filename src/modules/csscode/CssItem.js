import React from 'react';

const CssItem = ({item, items, children}) => {

    const renderItem = (i) => {

        return (
            <>
                {i.unit &&
                    <>
                        {' '}<span className='modulepage--purpletext'>{i.value}</span>
                        <span className='modulepage--redtext'>{i.unit}</span>
                    </>
                }
                {!i.unit && 
                    <>
                        <span className='modulepage--lightbluetext'>{i.value}</span>
                    </>
                }
            
            </>
        )
    }

    return (
        <div>
            <span className='modulepage--lightbluetext'><i>{children}</i></span>:
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